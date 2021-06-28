let comments = document.querySelectorAll("yt-live-chat-text-message-renderer #message")
for (let i=0; i<comments.length; i++){
    console.log(comments[i].innerHTML)
}