// Function to create the About component
export function About() {
  // Create the main container for the About section
  const aboutContainer = document.createElement("section");
  aboutContainer.id = "about-container";

  // Create the text container
  const aboutText = document.createElement("div");
  aboutText.className = "about-text";

  // Add title and description
  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "Welcome to LITS.";

  const aboutDescription = document.createElement("p");
  aboutDescription.textContent = `
      At LITS Academy, we believe that language is the bridge to endless opportunities.
      Nestled in the heart of Kandy, we are proud to be a trailblazer in language education,
      offering an unparalleled opportunity to master 10 languages under one roof. Our mission
      is to empower individuals from all walks of life to communicate effectively, connect
      globally, and thrive in a multicultural world.
  
      With a team of expert lecturers, state-of-the-art facilities, and innovative teaching
      methodologies, LITS Academy provides a dynamic and inclusive learning environment.
      Whether you're a beginner or looking to refine your language skills, our courses are
      designed to cater to diverse proficiency levels and personal goals.
  
      Join us at LITS Academy and unlock the doors to a world of possibilities through the power
      of language. Together, let’s shape a future without borders!
    `;

  // Append the title and description to the text container
  aboutText.appendChild(aboutTitle);
  aboutText.appendChild(aboutDescription);

  // Create the image container
  const aboutImg = document.createElement("div");
  aboutImg.className = "about-img";

  const img = document.createElement("img");
  img.src = "./Assets/images/students.jpeg";
  img.alt = "About Us";

  // Append the image to the image container
  aboutImg.appendChild(img);

  // Append text and image containers to the main about container
  aboutContainer.appendChild(aboutText);
  aboutContainer.appendChild(aboutImg);

  // Add "Our Lecturers" section
  const lecturersSection = createLecturersSection();
  aboutContainer.appendChild(lecturersSection);

  // Return the full About section
  return aboutContainer;
}

// Helper function to create the "Our Lecturers" section
function createLecturersSection() {
  const lecturersContainer = document.createElement("section");
  lecturersContainer.id = "experts";

  // Title and description
  const title = document.createElement("h1");
  title.textContent = "Our Lecturers";

  const description = document.createElement("p");
  description.textContent =
    "Our lecturers are highly qualified professionals with years of experience in teaching languages. Passionate and " +
    "dedicated, they bring innovative teaching methods to make language learning engaging, effective, and enjoyable for every student.";

  // Lecturers profiles
  const expertsBox = document.createElement("div");
  expertsBox.className = "experts-box";

  const lecturers = [
    {
      imgSrc: "./Assets/images/pro1.webp",
      name: "Subha Rathnayaka",
      subject: "Hindi Language",
    },
    {
      imgSrc: "./Assets/images/pro2.webp",
      name: "Thathsarani Weerakoon",
      subject: "French Language",
    },
    {
      imgSrc: "./Assets/images/pro3.webp",
      name: "Wasantha Karunanaaka",
      subject: "Korean Language",
    },
    {
      imgSrc: "./Assets/images/pro4.webp",
      name: "Demini Dulanga",
      subject: "Chinese Language",
    },
  ];

  lecturers.forEach((lecturer) => {
    const profile = document.createElement("div");
    profile.className = "profile";

    const img = document.createElement("img");
    img.src = lecturer.imgSrc;
    img.alt = lecturer.name;

    const name = document.createElement("h6");
    name.textContent = lecturer.name;

    const subject = document.createElement("p");
    subject.textContent = lecturer.subject;

    profile.appendChild(img);
    profile.appendChild(name);
    profile.appendChild(subject);

    expertsBox.appendChild(profile);
  });

  // Append title, description, and profiles to the section
  lecturersContainer.appendChild(title);
  lecturersContainer.appendChild(description);
  lecturersContainer.appendChild(expertsBox);

  return lecturersContainer;
}

// To dynamically render the About component
export function renderAbout(rootElement) {
  const aboutSection = About();
  rootElement.appendChild(aboutSection);
}
