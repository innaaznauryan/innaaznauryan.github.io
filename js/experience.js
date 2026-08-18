const experience = [
  {
    company: "Aznaoure Art",
    linkedin: "https://www.linkedin.com/company/aznaoure-art/",
    role: "Technical Founder & Fullstack Engineer",
    period: "2026 - Present",
    stack: [
      { name: "typescript", image: "./images/typescript.svg" },
      { name: "react", image: "./images/react.svg" },
      { name: "python", image: "./images/python.png" },
      { name: "postgresql", image: "./images/postgresql.png" },
      { name: "tailwind", image: "./images/tailwind.svg" },
      { name: "html", image: "./images/html.svg" },
      { name: "css", image: "./images/css.svg" },
    ],
  },
  {
    company: "Synopsys Armenia",
    linkedin: "https://www.linkedin.com/company/synopsys/",
    role: "Software Engineer",
    period: "2025 - 2026",
    stack: [
      { name: "python", image: "./images/python.png" },
      { name: "postgresql", image: "./images/postgresql.png" },
      { name: "javascript", image: "./images/javascript.svg" },
      { name: "react", image: "./images/react.svg" },
      { name: "mui", image: "./images/material-ui.svg" },
      { name: "html", image: "./images/html.svg" },
      { name: "css", image: "./images/css.svg" },
    ],
  },
  {
    company: "Digital Threads",
    linkedin: "https://www.linkedin.com/company/digit-threads/posts/?feedView=all",
    role: "Front-End Developer",
    period: "2024 - 2025",
    stack: [
      { name: "typescript", image: "./images/typescript.svg" },
      { name: "javascript", image: "./images/javascript.svg" },
      { name: "vue", image: "./images/vue.svg" },
      { name: "pinia", image: "./images/pinia.png" },
      { name: "tailwind", image: "./images/tailwind.svg" },
      { name: "html", image: "./images/html.svg" },
      { name: "css", image: "./images/css.svg" },
    ],
  },
  {
    company: "Remisoft",
    linkedin: "https://www.linkedin.com/company/remi-soft/",
    role: "Front-End Developer",
    period: "2023 - 2024",
    stack: [
      { name: "javascript", image: "./images/javascript.svg" },
      { name: "vue", image: "./images/vue.svg" },
      { name: "tailwind", image: "./images/tailwind.svg" },
      { name: "html", image: "./images/html.svg" },
      { name: "css", image: "./images/css.svg" },
    ],
  },
];

const experienceContainer = document.querySelector("#experience-container");

experienceContainer.innerHTML = experience
  .map(
    job => `
      <div class="card">
        <h4 class="tooltip-container">
          <a href="${job.linkedin}" target="_blank">
            ${job.company}
          </a>
          <span class="tooltip">View LinkedIn</span>
        </h4>
        <h5>${job.role}</h5>
        <p>${job.period}</p>
        <p>Tech Stack:</p>
        <div class="img-container">
          ${job.stack
            .map(tech => `<img src="${tech.image}" alt="${tech.name}">`)
            .join("")}
        </div>
      </div>
    `
  ).join("");