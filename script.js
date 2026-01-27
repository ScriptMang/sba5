const form = document.getElementById("blogForm");
const titleInput = document.getElementById("titleInput");
const postTextArea = document.getElementById("postContent");
const submitButton = document.getElementById("formSubmitButton");
const titleErr = document.getElementById("blogTitleError")
const contentErr = document.getElementById("blogContentError");

let posts = [];
titleInput.addEventListener("change", (event)=>{
    const title = event.target;
    if (title.validity.valueMissing) {
        titleInput.setCustomValidity("blog title can't be empty");
    } else {
        titleInput.setCustomValidity("");
    }
    titleErr.textContent = titleInput.validationMessage;
});

postContent.addEventListener("change", (event)=>{
    const postArea = event.target;
       if (postArea.validity.valueMissing) {
        postTextArea.setCustomValidity("blog title can't be empty");
    } else {
        postTextArea.setCustomValidity("");
    }
    contentErr.textContent = postTextArea.validationMessage;
});