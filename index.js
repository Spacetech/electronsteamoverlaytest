const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow = null;

// Required for steam overlay to function
app.commandLine.appendSwitch("in-process-gpu");

let invalidateIntervalId = undefined;

app.on("window-all-closed", () => {
	if (invalidateIntervalId !== undefined) {
		clearInterval(invalidateIntervalId);
	}

	app.quit();
});

app.on("ready", () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});

	mainWindow.webContents.on("dom-ready", () => {
		invalidateIntervalId = setInterval(() => {
			// help the steam overlay
			mainWindow.webContents.invalidate();
		}, 10);
	});

	const loadUrl = url.format({
		protocol: "file",
		slashes: true,
		pathname: path.join(__dirname, "index.html")
	});

	mainWindow.loadURL(loadUrl);
	mainWindow.focus();
});
