document.addEventListener("DOMContentLoaded", () => {
  const formSection = document.getElementById("formSection");
  const idCardSection = document.getElementById("idCard");

  const nameInput = document.getElementById("name");
  const idInput = document.getElementById("idNum");
  const courseInput = document.getElementById("course");
  const photoInput = document.getElementById("photo");

  const showName = document.getElementById("showName");
  const showId = document.getElementById("showId");
  const showCourse = document.getElementById("showCourse");
  const cardPhoto = document.getElementById("cardPhoto");

  let photoURL = "";

  // Photo preview
  photoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      photoURL = URL.createObjectURL(file);
    }
  });

  // Generate ID Card
  document.getElementById("generateBtn").addEventListener("click", () => {
    const name = nameInput.value.trim();
    const id = idInput.value.trim();
    const course = courseInput.value.trim();

    if (!name || !id || !course || !photoURL) {
      alert("Please fill all fields and upload a photo");
      return;
    }

    // Fill data
    showName.textContent = name;
    showId.textContent = id;
    showCourse.textContent = course;
    cardPhoto.src = photoURL;

    // Hide form, show card
    formSection.classList.add("hidden");
    idCardSection.classList.remove("hidden");
  });
});