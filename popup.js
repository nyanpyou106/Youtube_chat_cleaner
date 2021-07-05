let execute_extention_button = document.getElementById("execute_extention_button");
let input_ngwords_element = document.getElementById("input_ngwords");

// 既にNGワードがchoromeのstorageに設定されていたら、それをtextareaに読み込む
chrome.storage.local.get(["ngword"], (key_value) => {
    if (key_value.ngword!==undefined) {
        input_ngwords_element.value = key_value.ngword;
    }
});

execute_extention_button.addEventListener("click", async () => {
    // NGワードのセット
    chrome.storage.local.set({ngword: input_ngwords_element.value}, function() {
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