const form = document.getElementById("blogForm");
const titleInput = document.getElementById("titleInput");
const postTextArea = document.getElementById("postContent");
const formSubmitButton = document.getElementById("formSubmitButton");
const titleErr = document.getElementById("blogTitleError")
const contentErr = document.getElementById("blogContentError");
const blogPostList = document.getElementById("blogPostsList");

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

function clearInputFields(fields) {
     for (let field of fields){
        field.value = "";
    }
}

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
        console.log(posts);
        displayList(posts);
        clearInputFields([titleInput, postTextArea]);
    }
  
});



function displayList(posts) {
    let count = 1 ;
    for (let post of posts) {
        const listItem = document.createElement("li");
        const subTitle = document.createElement("h3");  
        const content = document.createElement("p");  
        const editButton = document.createElement("button");

        blogPostList.style = "list-style: none;";
        subTitle.textContent = post.title;
        content.textContent = post.content;        
        editButton.type = "submit";
        editButton.textContent = "edit";

        listItem.appendChild(subTitle);
        listItem.appendChild(content);
        listItem.appendChild(editButton);
        blogPostList.appendChild(listItem);


        editButton.addEventListener('click', function(){
            displayList(taskList);
        });
    }
    console.log(posts);
}