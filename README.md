# USD-MXN

Gnome-Shell v.(3.38, 40, 41, 42, 43, 44, 45, 46, 47) Extension, for conversion of USD to YEN on the center of the top panel.

This extension is a modified version of https://github.com/vezza/eur-usd-gshell extension to show USD to EUR.

# Licence

See LICENSE File

# How to install


Download via Gnome Extension Store: https://extensions.gnome.org/

or

```
cd /tmp && git clone https://github.com/Linux-jam/usd-yen-gshell.git && mv usd-yen-gshell usd-yen-gshell@am-l.f5.si && cp -av usd-yen-gshell@am-l.f5.si ~/.local/share/gnome-shell/extensions/ && gnome-shell-extension-tool --enable-extension usd-yen-gshell@am-l.f5.si && rm -rf usd-yen-gshell@am-l.f5.si
```

Last method is deprecated with the newer versions, just copy extension file to

```
~/.local/share/gnome-shell/extensions/
```

then restart GNOME Shell and run

```
gnome-extensions enable usd-yen@am-l.f5.si
```

To restart GNOME Shell in X11, pressing Alt+F2 to open the Run Dialog and enter restart
(or just r).
In Wayland Logout and Login again.
