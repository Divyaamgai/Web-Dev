document.addEventListener("DOMContentLoaded", () => {
    const formSection = document.getElementById("formSection");
    const idCardSection = document.getElementById("idCard");

    const nameInput = document.getElementById("name");
    const idInput = document.getElementById("idNum");
    const courseInput = document.getElementById("course");
    const photoInput = document.getElementById("photo");

    const displayName = document.getElementById("displayName");
    const displayId = document.getElementById("displayId");
    const displayCourse = document.getElementById("displayCourse");
    const cardPhoto = document.getElementById("cardPhoto");

    let photoURL = "";

    // Photo preview & store URL
    photoInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            photoURL = URL.createObjectURL(file);
        }
    });

    // Generate Card
    document.getElementById("generateBtn").addEventListener("click", () => {
        const name = nameInput.value.trim();
        const id = idInput.value.trim();
        const course = courseInput.value.trim();

        if (!name || !id || !course || !photoURL) {
            alert("Please fill all fields and upload a photo");
            return;
        }

        // Fill card data
        displayName.textContent = name;
        displayId.textContent = id;
        displayCourse.textContent = course;
        cardPhoto.src = photoURL;

        // Switch view
        formSection.classList.add("hidden");
        idCardSection.classList.remove("hidden");
    });
});