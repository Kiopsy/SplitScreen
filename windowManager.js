// Window Manager
const w = window.screen.availWidth;
const h = window.screen.availHeight;

/**
 * Create a new window with the given tabs, size, and left position.
 * @param tabs - an array of URLs to open in the window
 * @param size - the number of windows you want to create
 * @param left - The left position of the window. This value is ignored for panels.
 */
function createWindow(tabs, size, left) {
    chrome.windows.create({
    url: tabs,
    type: "normal",
    width: w  / size,
    height: h,
    left: left,
    top: 0
    });
}

/**
 * Get the current window, then update it with the new size and position.
 * @param size - The number of windows you want to split the screen into.
 * @param left - The left position of the window.
 */
function updateWindow(size, left) {
    chrome.windows.getCurrent(function (window) {
    var updateInfo = {
        width: w  / size,
        height: h,
        left: left,
        top: 0
    };
    (updateInfo.state = "normal"), chrome.windows.update(window.id, updateInfo);
    });
}

/* Splitting the screen into two parts. */
export default async function split(size, screenSide) {
    // query Chrome for tabs in current window
    let queryOptions = { currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);

    let inactiveTabs = [];
    let activeTabs = [];

    // sort tabs by activeness
    tabs.forEach(tab => {
      if (tab.active) {
        activeTabs.push(tab.url);
      } else {
        inactiveTabs.push(tab.url);
      }
    });

    if (screenSide == "L") {
        createWindow(activeTabs, size, 0);
        updateWindow(size, w / size);
    } else {
        createWindow(activeTabs, size, w / size);
        updateWindow(size, 0);
    }

    // console.log(tabs);
    // return [activeTabs, inactiveTabs]
}