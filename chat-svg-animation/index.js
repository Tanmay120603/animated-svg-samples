const chatBoxes=document.querySelectorAll("#boxes")
const chatLines=document.querySelectorAll("#lines")


function animateChat(){
    chatBoxes.forEach(chatBox=>chatBox.classList.remove("chat-box-animate","hide-chat"))
    chatLines.forEach(chatLine=>chatLine.classList.remove("chat-line-animate","hide-chat"))

    document.body.offsetWidth   //To trigger re-animation

    chatBoxes.forEach(chatBox=>chatBox.classList.add("chat-box-animate"))
    chatLines.forEach(chatLine=>chatLine.classList.add("chat-line-animate"))
}

function hideChat(){
    chatBoxes.forEach(chatBox=>chatBox.classList.add("hide-chat"))
    chatLines.forEach(chatLine=>chatLine.classList.add("hide-chat"))
    
    //After 0.4s we need to start animation
    setTimeout(animateChat,400)
}

setInterval(hideChat,5500)