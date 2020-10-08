
const btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener('click', function showComment() {
    const pseudo = document.querySelector("#pseudo");
    const comments = document.querySelector("#comments");

    const divShowMessage = document.createElement("div");
    divShowMessage.style.border = "1px solid gray";
    divShowMessage.style.margin = "2% auto";
    divShowMessage.style.padding = "2%";
    divShowMessage.style.borderRadius = "20px 0px 20px 0px";
    divShowMessage.style.borderBottom = "#333333 solid 5px";
    divShowMessage.style.borderRadius = "5px 2px 8px #333333";
    comments.prepend(divShowMessage);

    const newMessage = document.createElement("h3");
    newMessage.innerHTML = pseudo.value;
    divShowMessage.appendChild(newMessage);
    pseudo.value = "";

    const message = document.querySelector("#message");
    const newComment = document.createElement("p");
    newComment.innerHTML = message.value;
    divShowMessage.appendChild(newComment);
    message.value ="";
    
})
