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
    blogPostList.textContent = "";
    let count = 1 ;
    for (let post of posts) {
        const listItem = document.createElement("li");
        const subTitle = document.createElement("h3");  
        const content = document.createElement("p");  
        const editButton = document.createElement("button");

        blogPostList.style = "list-style: none;";
        subTitle.textContent = post.title;
        content.textContent = post.content;        
        editButton.type = "button";
        editButton.className = "edit";
        editButton.textContent = "edit";

        listItem.appendChild(subTitle);
        listItem.appendChild(content);
        listItem.appendChild(editButton);
        blogPostList.appendChild(listItem);


        editButton.addEventListener('click', (event)=>{
            if (event.target.classList.contains("edit")) {
                const item = event.target.closest('li').children;
                console.log(`List-item: `+ item);
                const blogTitle = item[0];
                
                console.log(`Blog-Title: ${blogTitle}`);
                const blogContent = item[1]; 
                console.log(`Blog-Content: ${blogContent}`);

                const blogTitleContainer = document.createElement('div');
                blogTitleContainer.id = "editBlogTitleContainer";
                const editTitleInput = document.createElement('input');
                
                const blogContentContainer = document.createElement('div');
                blogContentContainer.id = "editBlogContentContainer";
                const editContentInput = document.createElement('textArea');
                editContentInput.rows = "5";
                editContentInput.cols = "33";
    
                editTitleInput.value = blogTitle.textContent;
                editContentInput.value = blogContent.textContent;
               
                blogTitleContainer.appendChild(editTitleInput);
                blogContentContainer.appendChild(editContentInput);

                console.log(editTitleInput);
                console.log(editContentInput);

                
                blogTitle.replaceWith(blogTitleContainer);
                blogContent.replaceWith(blogContentContainer);

                const updateButton = document.createElement("button");
                updateButton.type = "button";
                updateButton.textContent = "update";
                editButton.replaceWith(updateButton);
                
                // blogPostList[0].replaceWith(editTitleInput);
                // blogPostList[1].replaceWith(editContentInput);
                // displayList(blogPostList);
            }
        });
    }
    console.log(blogPostList);
}