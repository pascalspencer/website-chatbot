let data = [];

document.getElementById('addTag').addEventListener('click', function () {
    let tags = document.getElementById('tags').value;
    let patterns = document.getElementById('patterns').value;
    let responses = document.getElementById('responses').value;

    if (tags && patterns && responses) {
        let displayArea = document.querySelector('.display-area');
        let newTag = document.createElement('p');
        newTag.innerHTML = `Tag: ${tags}, Pattern: ${patterns}, Response: ${responses} <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>`;
        displayArea.appendChild(newTag);



        // Add new data to the array
        data.push({
            "tag": tags,
            "patterns": patterns,
            "responses": responses
        });

        console.log(data); // Optional: log the data array to see the contents

        // Clear input fields
        document.getElementById('tags').value = '';
        document.getElementById('patterns').value = '';
        document.getElementById('responses').value = '';
    } else {
        // Optionally, alert the user that all fields are required
        alert("Please fill in all fields.");
    }
});

document.querySelector('.display-area').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        let tagElement = event.target.closest('p');
        tagElement.remove(); // Remove the tag element

        // Check if there are no more tags and hide the button if true
        if (document.querySelector('.display-area').children.length === 0 || (document.querySelector('.display-area').children.length === 1 && document.querySelector('.train-chatbot'))) {
            document.querySelector('.train-chatbot').style.display = "none";
        }
    }
});



function addNewTag() {

    // Insert new tag just before the button
    let button = document.querySelector('.train-chatbot');
    displayArea.insertBefore(newTag, button);
}

// Example usage
addNewTag('exampleTag', 'examplePattern', 'exampleResponse');

