const form = document.getElementById("blogForm");
const titleInput = document.getElementById("titleInput");
const postContent = document.getElementById("postContent");
const submitButton = document.getElementById("formSubmitButton");
const titleErr = document.getElementById("blogTitleError")

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
