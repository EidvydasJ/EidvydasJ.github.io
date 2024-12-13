document.getElementById("submit-id").addEventListener("click", function (event) {
    event.preventDefault(); 

    const form = document.getElementById("contact-form");

    const email = form["email"].value;
    const phoneNumber = form["phone-number"].value;
    const address = form["address"].value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Įveskite teisingą el. pašto adresą.");
        return;
    }

    const phonePattern = /^(\+370|0)-\d{3}-\d{5}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Įveskite teisingą telefono numerį: +370|0 su brūkšneliais");
        return;
    }

    if (address.trim() === "") {
        alert("Prašome įvesti adresą.");
        return;
    }

    const formData = {
        firstName: form["first-name"].value,
        lastName: form["last-name"].value,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        ratings: {
            design: parseInt(form["design-rating"].value),
            convenience: parseInt(form["convenience-rating"].value),
            services: parseInt(form["services-rating"].value),
            info: parseInt(form["info-rating"].value),
            recommendation: parseInt(form["recommendation-rating"].value),
        },
    };

    const averageScore = (formData.ratings.design + formData.ratings.convenience + formData.ratings.services 
        + formData.ratings.info + formData.ratings.recommendation) / 5;

    let color;
    if (averageScore < 5) {
        color='red';
    }
    else if (averageScore < 8){
        color='orange';
    }
    else {
        color='green';
    }

    console.log("Form Data:", formData);

    const resultContainer = document.getElementById("result-container");
resultContainer.innerHTML = `
    <p><strong>Vardas:</strong> ${formData.firstName}</p>
    <p><strong>Pavardė:</strong> ${formData.lastName}</p>
    <p><strong>El. paštas:</strong> ${formData.email}</p>
    <p><strong>Tel. numeris:</strong> ${formData.phoneNumber}</p>
    <p><strong>Adresas:</strong> ${formData.address}</p>
    <p><strong>Svetainės dizainas:</strong> ${formData.ratings.design}</p>
    <p><strong>Naudojimo patogumas:</strong> ${formData.ratings.convenience}</p>
    <p><strong>Paslaugų kokybė:</strong> ${formData.ratings.services}</p>
    <p><strong>Informacijos aiškumas:</strong> ${formData.ratings.info}</p>
    <p><strong>Rekomendacija:</strong> ${formData.ratings.recommendation}</p>
    <p style="color: ${color}">${formData.firstName} ${formData.lastName} (${formData.email}): ${averageScore.toFixed(2)}</p>
`;
});