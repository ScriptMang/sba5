# Reflection 

## My development process, Challenges faced, how I overcame them, feature not implmented

The development process invovled  creating an html file with input fields so that the blog post can be generated dynamically.
I then performed event handling using the submit button to add the blog post to the list. Each blog post has an edit button, so that
you can change the existing blog title and body. Getting the edit button event hadling to work was very hard. It wasn't so much the logic
but a silent error I ran into where I chose the type attribute for button to be "submit". Submit is exclusively for forms so it would wipe
my list clean and not show me my error. I managed to fix this issue by choosing the button type to be "button" to stop that form like behavior.
Another issue I ran into was confusing properties of an HTML DOM element for the update button event handler. I fixed this issue by looking at the mdn docs.  



