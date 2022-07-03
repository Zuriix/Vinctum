const { app, BrowserWindow } = require("electron");
// TODO: Add support to log status as an icon in tray

app.whenReady().then(() => {
  let height = 500;
  let width = 400;
  // TODO: Test to see what this looks like on windows, if it needs any updates
  const window = new BrowserWindow({
    center: true,
    minWidth: width,
    minHeight: height,
    maxWidth: width,
    maxHeight: height,
    frame: false,
    hasShadow: false,
    backgroundColor: "#ee000000",
    darkTheme: true,
    transparent: true,
  });
  window.loadFile("index.html");
});
