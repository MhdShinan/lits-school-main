// Course.js

// Function to create the Course component
export function Course() {
  // Create the main container for the Course section
  const courseContainer = document.createElement("section");
  courseContainer.id = "course";

  // Add the section title
  const courseTitle = document.createElement("h1");
  courseTitle.textContent = "Our Popular Courses";

  // Create the course box container
  const courseBox = document.createElement("div");
  courseBox.className = "course-box";

  // List of courses
  const courses = [
    {
      title: "Japanese Language",
      description: "Learn the Japanese language with practical modules.",
      entry: "Anyone",
      commencement: "March 2025",
      structure: "English",
    },
    {
      title: "Chinese Language",
      description: "Learn the Chinese Language with practical modules.",
      entry: "Anyone",
      commencement: "March 2025",
      structure: "English",
    },
    {
      title: "French Language",
      description: "Learn the French Language with practical modules.",
      entry: "Anyone",
      commencement: "March 2025",
      structure: "English",
    },
    {
      title: "Korean Language",
      description: "Learn the Korean Language with practical modules.",
      entry: "Anyone",
      commencement: "March 2025",
      structure: "English",
    },
    {
      title: "Russian Language",
      description: "Learn the Russian Language with practical modules.",
      entry: "Anyone",
      commencement: "March 2025",
      structure: "English",
    },
    {
      title: "Italian Language",
      description: "Learn the Italian Language with practical modules.",
      entry: "Anyone",
      commencement: "March 2025",
      structure: "English",
    },
    {
      title: "German Language",
      description: "Learn the German Language with practical modules.",
      entry: "Anyone",
      commencement: "March 2025",
      structure: "English",
    },
    {
      title: "Hindi Language",
      description: "Learn the Hindi Language with practical modules.",
      entry: "Anyone",
      commencement: "March 2025",
      structure: "English",
    },
    {
      title: "English Language",
      description: "Learn the English language with practical modules.",
      entry: "Anyone",
      commencement: "March 2025",
      structure: "English",
    },
    {
      title: "Arabic Language",
      description: "Learn the Arabic Language with practical modules.",
      entry: "Anyone",
      commencement: "March 2025",
      structure: "English",
    },
  ];

  // Generate course cards
  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className = "courses";

    const courseImage = document.createElement("img");
    courseImage.src = "./Assets/images/book.png";
    courseImage.alt = course.title;

    const courseDetails = document.createElement("div");
    courseDetails.className = "details";

    const courseTitle = document.createElement("h4");
    courseTitle.textContent = course.title;

    const courseDescription = document.createElement("p");
    courseDescription.textContent = course.description;

    const entryRequirementsTitle = document.createElement("h5");
    entryRequirementsTitle.textContent = "Entry Requirements";

    const entryRequirements = document.createElement("h6");
    entryRequirements.textContent = course.entry;

    const commencementTitle = document.createElement("h5");
    commencementTitle.textContent = "Commencement";

    const commencement = document.createElement("h6");
    commencement.textContent = course.commencement;

    const structureTitle = document.createElement("h5");
    structureTitle.textContent = "Course Structure and Modules";

    const structure = document.createElement("h6");
    structure.textContent = course.structure;

    // Append details to the course details container
    courseDetails.append(
      courseTitle,
      courseDescription,
      entryRequirementsTitle,
      entryRequirements,
      commencementTitle,
      commencement,
      structureTitle,
      structure
    );

    // Append image and details to the course card
    courseCard.append(courseImage, courseDetails);

    // Append the course card to the course box
    courseBox.appendChild(courseCard);
  });

  // Append title and course box to the main course container
  courseContainer.append(courseTitle, courseBox);

  return courseContainer;
}

// To dynamically render the Course component
export function renderCourse(rootElement) {
  const courseSection = Course();
  rootElement.appendChild(courseSection);
}
