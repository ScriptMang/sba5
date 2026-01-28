const form = document.getElementById("blogForm");
const titleInput = document.getElementById("titleInput");
const postTextArea = document.getElementById("postContent");
const formSubmitButton = document.getElementById("formSubmitButton");
const titleErr = document.getElementById("blogTitleError")
const contentErr = document.getElementById("blogContentError");


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

let posts = [];
formSubmitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    const title = titleInput.value;
    const content = postTextArea.value;
    if (title !== "" && content !==""){
        const blogPost = {
            title: titleInput.value,
            content: postTextArea.value
        }
        posts.push(blogPost);
    }
    console.log(posts);
});


