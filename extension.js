// This extension shows USD to JPY conversion on Gnome panel.
// Copyright (C) 2024 vezza
// See LICENSE file

'use strict';

import St from 'gi://St';
import Clutter from 'gi://Clutter';
import Soup from 'gi://Soup';
import GLib from 'gi://GLib';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

let panelButton;
let session;
let sourceId = null;

async function fetchDollarQuotation() {
  if (!session) {
    session = new Soup.Session({ timeout: 10 });
  }

  const message = Soup.Message.new_from_encoded_form(
    "GET", "https://economia.awesomeapi.com.br/last/USD-JPY", Soup.form_encode_hash({})
  );

  try {
    const text = await session.send_and_read_async(message, GLib.PRIORITY_DEFAULT, null);
    return new TextDecoder().decode(text.get_data());
  } catch (error) {
    console.error(`Error fetching dollar quotation: ${error}`);
  } finally {
    session.abort();
  }

  return null;
}

function updatePanelText(quotation) {
  let displayText = quotation
    ? `1 USD = ${quotation} JPY`
    : "";

  const panelButtonText = new St.Label({
    text: displayText,
    y_align: Clutter.ActorAlign.CENTER,
  });

  panelButton.set_child(panelButtonText);
}

async function handleRequestApi() {
  const response = await fetchDollarQuotation();

  if (response) {
    try {
      const bodyResponse = JSON.parse(response);
      let dollarQuotation = bodyResponse["USDJPY"]["bid"];
      dollarQuotation = dollarQuotation.substring(0, 5);
      updatePanelText(dollarQuotation);
    } catch (error) {
      console.error(`Error parsing dollar quotation: ${error}`);
      updatePanelText(null);
    }
  } else {
    updatePanelText(null);
  }
}

export default class UsdJpy {
  enable() {
    panelButton = new St.Bin({ style_class: "panel-button" });
    handleRequestApi();
    Main.panel._centerBox.insert_child_at_index(panelButton, 0);
    sourceId = GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT, 30, () => {
      handleRequestApi();
      return GLib.SOURCE_CONTINUE;
    });
  }

  disable() {
    if (panelButton) {
      Main.panel._centerBox.remove_child(panelButton);
      panelButton.destroy();
      panelButton = null;
    }

    if (sourceId) {
      GLib.Source.remove(sourceId);
      sourceId = null;
    }

    if (session) {
      session.abort();
      session = null;
    }
  }
}
