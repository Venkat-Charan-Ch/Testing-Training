document.querySelector('#registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        name: document.querySelector('input[name = "name"]').value,
        age: document.querySelector('input[name = "age"]').value,
        address: document.querySelector('input[name = "address"]').value,
        gender: document.querySelector('input[name="choice"]:checked')?.value || 'Not selected',
        course: document.querySelector('input[name = "course"]').value,
        acceptedTerms: document.querySelector('input[name = "t&c"]').checked,
        about: document.querySelector('input[name = "about"]').value
    };
    console.log("--- Submitted Registration Details ---");
    console.table(formData); 
});
