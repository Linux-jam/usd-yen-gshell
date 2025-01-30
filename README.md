# USD-MXN

Gnome-Shell v.(3.38, 40, 41, 42, 43, 44, 45, 46, 47) Extension, for conversion of USD to MXN on the center of the top panel.

This extension is a modified version of https://github.com/vezza/eur-usd-gshell extension to show USD to MXN.

# Licence

See LICENSE File

# How to install


Download via Gnome Extension Store: https://extensions.gnome.org/extension/7832/eur-usd/

or

```
cd /tmp && git clone https://github.com/kinduff/usd-mxn-gshell.git && mv usd-mxn-gshell usd-mxn-gshell@kinduff.github.com && cp -av usd-mxn-gshell@kinduff.github.com ~/.local/share/gnome-shell/extensions/ && gnome-shell-extension-tool --enable-extension usd-mxn-gshell@kinduff.github.com && rm -rf usd-mxn-gshell@kinduff.github.com
```

Last method is deprecated with the newer versions, just copy extension file to

```
~/.local/share/gnome-shell/extensions/
```

then restart GNOME Shell and run

```
gnome-extensions enable usd-mxn-gshell@kinduff.github.com
```

To restart GNOME Shell in X11, pressing Alt+F2 to open the Run Dialog and enter restart
(or just r).
In Wayland Logout and Login again.
