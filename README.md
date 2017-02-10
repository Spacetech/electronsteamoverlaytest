# electronsteamoverlaytest
Test if the Steam Overlay works in Electron.

This will only work on Windows (probably on Windows 8 and up) due to the requirement of in-process-gpu command line switch.

Test Instructions:

1. Download latest Electron build
2. Clone this folder into electron-v1.6.0-win32-ia32\resources\app
3. Add electron.exe as a [Non-Steam Game](https://support.steampowered.com/kb_article.php?ref=2219-YDJV-5557) - Non-Steam games support overlays!
4. Launch the game from Steam. Depending on if your Electron version has the invalidate fix, the Steam Overlay may or may not work.
