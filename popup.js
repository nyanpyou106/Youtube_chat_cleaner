let execute_extention_button = document.getElementById("execute_extention_button");

execute_extention_button.addEventListener("click", async () => {
    // NGワードのセット
    let input_ngwords = document.getElementById("input_ngwords").value;
    chrome.storage.local.set({ngword: input_ngwords}, function() {
        ; // storageにセットだけして何もしない
    });
    // コメント削除機能の起動
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["script.js"]
    });
    window.close();
});