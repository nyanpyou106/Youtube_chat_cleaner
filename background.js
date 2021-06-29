chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["script.js"]
      });
    // まずiframeで挿入されてるコメント欄にアクセスさせる
    /*
    let chatFrame = document.getElementById('chatframe');
    // コメント欄が見つかるまで繰り返す
    const setIntervalId = setInterval(startObserve, 1000);
    */
});