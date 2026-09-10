let Container = document.querySelector("#card");
fetch('https://raw.githubusercontent.com/dreadwing148/ds/refs/heads/main/online_courses.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(d => {

            let courseCard = document.createElement("div");
            courseCard.className = "card-item";

            let title = document.createElement("h2");
            title.textContent = d.CourseName;
            courseCard.append(title);

            let instructor = document.createElement("p");
            instructor.className = "instructor";
            instructor.textContent = `Instructor: ${d.Instructor}`;
            courseCard.append(instructor);

            let detailsDiv = document.createElement("div");
            detailsDiv.className = d.CourseID;

            let badge = document.createElement("span");
            badge.className = "badge";
            badge.textContent = d.category || 'General';
            detailsDiv.append(badge);

            let price = document.createElement("span");
            price.className = "price";
            price.textContent = d.price ? `${d.price}` : 'Free';
            detailsDiv.append(price);

            courseCard.append(detailsDiv);
            Container.append(courseCard);
        });
    })
    .catch(error => console.error("Error Fetching Data:" , error));    
