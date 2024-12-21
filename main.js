// main.js

import { renderAbout } from "./component/About.js";
import { renderContact } from "./component/Contact.js";
import { renderCourse } from "./component/Course.js";
import { renderFooter } from "./component/Footer.js";
import { initializeNavigation } from "./component/script.js";

// Function to initialize the app
function initializeApp() {
  // Get the root element where components will be rendered
  const root = document.getElementById("root");

  if (!root) {
    console.error(
      "Root element not found. Ensure your HTML file has an element with ID 'root'."
    );
    return;
  }

  // Render each component
  renderAbout(root); // About section
  renderCourse(root); // Courses section
  renderContact(root); // Contact section
  renderFooter(root); // Footer section

  // Initialize navigation functionality
  initializeNavigation();
}

// Initialize the app when DOM content is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);
