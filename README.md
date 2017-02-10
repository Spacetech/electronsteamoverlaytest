# electronsteamoverlaytest
Test if the Steam Overlay works in Electron.

This will only work on Windows 8 and up due to the requirement of the *in-process-gpu* chromium command line switch.

Test Instructions:

1. Download the latest Electron release
2. Clone this repo into electron\resources\app (e.g. electron-v1.6.0-win32-ia32\resources\app)
3. Add electron.exe as a [Non-Steam Game](https://support.steampowered.com/kb_article.php?ref=2219-YDJV-5557) - Non-Steam games support overlays!
4. Launch the game from Steam. Depending on if your Electron version has the invalidate fix, the Steam Overlay may or may not work.
