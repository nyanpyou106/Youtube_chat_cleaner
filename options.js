let ngwords = document.getElementById("ngwords").innerHTML;

chrome.storage.local.set({ngword: ngwords}, function() {
    console.log(ngwords);
});