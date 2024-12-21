// Footer.js

// Function to create the Footer component
export function Footer() {
  // Create the main footer container
  const footerContainer = document.createElement("footer");

  // Footer columns
  const columns = [
    {
      imgSrc: "./Assets/images/logo1.png",
    },
    {
      title: "Quick Links",
      links: ["Home", "Courses", "Lecturers", "About Us"],
    },
    {
      title: "Address",
      content: [
        "606 Colombo Road, Nanuoya, Pilimathalawa",
        "+94779395499",
        "info@iltskandy.com",
      ],
    },
  ];

  // Create footer columns
  columns.forEach((col) => {
    const footerCol = document.createElement("div");
    footerCol.className = "footer-col";

    if (col.imgSrc) {
      const img = document.createElement("img");
      img.src = col.imgSrc;
      footerCol.appendChild(img);
    }

    if (col.title) {
      const title = document.createElement("h3");
      title.textContent = col.title;
      footerCol.appendChild(title);
    }

    if (col.content) {
      col.content.forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        footerCol.appendChild(item);
      });
    }
    

    if (col.links) {
      col.links.forEach((linkText) => {
        const link = document.createElement("li");
        link.textContent = linkText;
        footerCol.appendChild(link);
      });
    }

    footerContainer.appendChild(footerCol);
  });

  // Create copyright section
  const copyright = document.createElement("div");
  copyright.className = "copyright";

  const copyrightText = document.createElement("p");
  copyrightText.textContent =
    "Copyright ©2024 LITS School Management - Developed by R-Tech Solution Team";

  const socialLinks = document.createElement("div");
  socialLinks.className = "pro-links";
  const socialIcons = [
    "fab fa-facebook-f",
    "fab fa-instagram",
    "fab fa-linkedin-in",
    "fab fa-youtube",
    "fab fa-twitter",
    "fab fa-google",
  ];
  socialIcons.forEach((iconClass) => {
    const icon = document.createElement("i");
    icon.className = iconClass;
    socialLinks.appendChild(icon);
  });

  copyright.appendChild(copyrightText);
  copyright.appendChild(socialLinks);

  // Append copyright section to the footer
  footerContainer.appendChild(copyright);

  return footerContainer;
}

// To dynamically render the Footer component
export function renderFooter(rootElement) {
  const footerSection = Footer();
  rootElement.appendChild(footerSection);
}
