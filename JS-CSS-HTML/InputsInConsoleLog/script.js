let page = document.querySelector('#regForm')

page.addEventListener('submit', function(event) {
    event.preventDefault();
    const submittedName = document.querySelector('input[name="name"]').value;
    const submittedAge = document.querySelector('input[name="age"]').value;

    console.log("Name Variable:", submittedName);
    console.log("Age Variable:", submittedAge);
});
