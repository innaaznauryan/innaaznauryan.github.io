const projects = [
  {
    title: "Aznaoure Art",
    description: "A fully responsive jewelry gallery and marketplace, built and running in production.",
    stack: [
      { name: "react", image: "./images/react.svg" },
      { name: "typescript", image: "./images/typescript.svg" },
      { name: "tailwind", image: "./images/tailwind.svg" },
    ],
    links: [
      {
        label: "View GitHub",
        url: "https://github.com/innaaznauryan/aznaoure",
        icon: "./images/github.png",
        iconAlt: "github"
      },
      {
        label: "View Live",
        url: "https://www.aznaoure.com",
        icon: "./images/aznaoure.png",
        iconAlt: "aznaoure"
      },
    ],
  },
  {
    title: "Healthcare Facilities",
    description: "A modern medical management app featuring CRUD operations.",
    stack: [
      { name: "vue", image: "./images/vue.svg" },
      { name: "typescript", image: "./images/typescript.svg" },
      { name: "tailwind", image: "./images/tailwind.svg" },
    ],
    links: [
      {
        label: "View GitHub",
        url: "https://github.com/innaaznauryan/healthcare",
        icon: "./images/github.png",
        iconAlt: "github"
      },
      {
        label: "View Live",
        url: "https://healthcare-departments.netlify.app/",
        icon: "./images/netlify.svg",
        iconAlt: "netlify"
      },
    ],
  },
  {
    title: "Typeracer",
    description: "Challenge yourself to type words or phrases as quickly and accurately as possible, improving your typing skills while having fun!",
    stack: [
      { name: "typescript", image: "./images/typescript.svg" },
      { name: "vue", image: "./images/vue.svg" },
    ],
    links: [
      {
        label: "View GitHub",
        url: "https://github.com/innaaznauryan/typeracer",
        icon: "./images/github.png",
        iconAlt: "github"
      },
      {
        label: "View Live",
        url: "https://speed-type-battle.netlify.app/",
        icon: "./images/netlify.svg",
        iconAlt: "netlify"
      },
    ],
  },
  {
    title: "Memory Game",
    description: "Test and improve your memory skills with this simple and fun memory game!",
    stack: [
      { name: "vue", image: "./images/vue.svg" },
    ],
    links: [
      {
        label: "View GitHub",
        url: "https://github.com/innaaznauryan/memory-vue",
        icon: "./images/github.png",
        iconAlt: "github"
      },
      {
        label: "View Live",
        url: "https://memorygame-vue3.netlify.app/",
        icon: "./images/netlify.svg",
        iconAlt: "netlify"
      },
    ],
  },
];

const projectsContainer = document.querySelector("#projects-container");

projectsContainer.innerHTML = projects
  .map(
    project => `
      <div class="card">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <p>Tech Stack:</p>
        <div class="img-container">
          ${project.stack
      .map(tech => `<img src="${tech.image}" alt="${tech.name}">`)
      .join("")}
        </div>
        <p>View Project:</p>
        <div class="img-container">
          ${project.links
          .map(
            link => `
              <a
                href="${link.url}"
                target="_blank"
                class="tooltip-container scale-on-hover"
              >
                <img src="${link.icon}" alt="${link.iconAlt}">
                <span class="tooltip">${link.label}</span>
              </a>
            `
          ).join("")}
        </div>
      </div>
    `
  )
  .join("");