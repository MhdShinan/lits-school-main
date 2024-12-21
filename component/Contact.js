// Contact.js

// Function to create the Contact component
export function Contact() {
  // Create the main container for the Contact section
  const contactContainer = document.createElement("section");
  contactContainer.id = "contact";

  // Create the "Get in Touch" section

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact Us";

  const getInTouch = document.createElement("div");
  getInTouch.className = "getin";

  const getInTitle = document.createElement("h2");
  getInTitle.textContent = "Get in touch";

  const getInDescription = document.createElement("p");
  getInDescription.textContent = "Looking for help?";

  const getInDetails = document.createElement("div");
  getInDetails.className = "getin-details";

  const address = createDetail(
    "fas fa-home",
    "606 Colombo Road, Nanuoya, Pilimathalawa"
  );
  const phone = createDetail("fas fa-phone-alt", "+94779395499");
  const email = createDetail("fas fa-envelope-open-text", "info@iltskandy.com");

  getInDetails.append(address, phone, email);

  const followTitle = document.createElement("h3");
  followTitle.textContent = "Follow Us";

  const socialLinks = document.createElement("div");
  socialLinks.className = "pro-links";
  const socialIcons = [
    "fab fa-facebook-f",
    "fab fa-instagram",
    "fab fa-linkedin-in",
    "fa-brands fa-google",
    "fa-brands fa-youtube",
    "fa-brands fa-twitter",
    
  ];
  socialIcons.forEach((iconClass) => {
    const icon = document.createElement("i");
    icon.className = iconClass;
    socialLinks.appendChild(icon);
  });

  getInTouch.append(
    contactTitle,
    getInTitle,
    getInDescription,
    getInDetails,
    followTitle,
    socialLinks
  );

  // Create the "Form" section
  const form = document.createElement("div");
  form.className = "form";

  const formTitle = document.createElement("h4");
  formTitle.textContent = "Make An Admission";

  const academicDetails = createFormSection("Academic Details", [
    createFormField("text", "School Name", "Language Infinity Training School"),
    createFormSelect("Class", [
      "Select Option",
      "Japanese",
      "French",
      "Chinese",
      "Korean",
      "Hindi",
      "English",
      "Russian",
      "Italy",
      "Arabic",
      "German",
    ]),
    createFormSelect("Section", ["Select Option", "Japanese"]),
  ]);

  const studentDetails = createFormSection("Student Details", [
    createFormField("text", "First Name", "First Name"),
    createFormField("text", "Last Name", "Last Name"),
    createFormSelect("Gender", ["Select Option", "Female", "Male"]),
    createFormField("date", "Date of Birth", ""),
    createFormField("text", "Student Mobile Number", "Student Mobile Number"),
    createFormField("text", "Email", "Email"),
    createFormField("text", "Permanent Address", "Permanent Address"),
  ]);

  const guardianDetails = createFormSection("Guardian Details", [
    createFormSelect("Relation", [
      "Select Relation",
      "Mother",
      "Father",
      "Guardian",
    ]),
    createFormField("text", "Guardian Name", "Guardian Name"),
    createFormField("text", "Guardian Number", "Guardian Number"),
  ]);

  const formButtons = document.createElement("div");
  formButtons.className = "form-col";

  const resetButton = document.createElement("button");
  resetButton.className = "reset";
  resetButton.textContent = "Reset";

  const submitButton = document.createElement("button");
  submitButton.className = "submit";
  submitButton.textContent = "Submit";

  formButtons.append(resetButton, submitButton);

  form.append(
    formTitle,
    academicDetails,
    studentDetails,
    guardianDetails,
    formButtons
  );

  // Append both sections to the Contact container
  contactContainer.append(getInTouch, form);

  return contactContainer;
}

// Helper function to create a detail item
function createDetail(iconClass, text) {
  const detailDiv = document.createElement("div");

  const icon = document.createElement("i");
  icon.className = `get ${iconClass}`;

  const detailText = document.createElement("p");
  detailText.textContent = text;

  detailDiv.append(icon, detailText);
  return detailDiv;
}

// Helper function to create a form section
function createFormSection(title, fields) {
  const formSection = document.createElement("div");
  formSection.className = "form-one";

  const sectionTitle = document.createElement("h5");
  sectionTitle.textContent = title;

  formSection.appendChild(sectionTitle);
  fields.forEach((field) => formSection.appendChild(field));

  return formSection;
}

// Helper function to create a form field
function createFormField(type, label, placeholder) {
  const formField = document.createElement("div");
  formField.className = "form-col";

  const formLabel = document.createElement("label");
  formLabel.className = "scl";
  formLabel.textContent = label;

  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;

  formField.append(formLabel, input);
  return formField;
}

// Helper function to create a form select dropdown
function createFormSelect(label, options) {
  const formField = document.createElement("div");
  formField.className = "form-col";

  const formLabel = document.createElement("label");
  formLabel.className = "scl";
  formLabel.textContent = label;

  const select = document.createElement("select");
  select.className = "class-drop";

  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    select.appendChild(option);
  });

  formField.append(formLabel, select);
  return formField;
}

// To dynamically render the Contact component
export function renderContact(rootElement) {
  const contactSection = Contact();
  rootElement.appendChild(contactSection);
}
