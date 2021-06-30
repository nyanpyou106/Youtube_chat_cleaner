let execute_extention_button = document.getElementById("execute_extention_button");

execute_extention_button.addEventListener("click", async () => {
    // NGワードのセット
    let ngwords = document.getElementById("ngwords").innerHTML;
    chrome.storage.local.set({ngword: ngwords}, function() {
        console.log(ngwords);
    });
    // コメント削除機能の起動
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["script.js"]
    });
});