const skills = [
  {
    name: "HTML",
    image: "./images/html.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS",
    image: "./images/css.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "JavaScript",
    image: "./images/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "TypeScript",
    image: "./images/typescript.svg",
    url: "https://www.typescriptlang.org/"
  },
  {
    name: "React",
    image: "./images/react.svg",
    url: "https://react.dev/"
  },
  {
    name: "Vue",
    image: "./images/vue.svg",
    url: "https://vuejs.org/"
  },
  {
    name: "Python",
    image: "./images/python.png",
    url: "https://docs.python.org/3/"
  },
  {
    name: "Redux",
    image: "./images/redux.svg",
    url: "https://redux.js.org/"
  },
  {
    name: "Pinia",
    image: "./images/pinia.png",
    url: "https://pinia.vuejs.org/"
  },
  {
    name: "Next",
    image: "./images/next.svg",
    url: "https://nextjs.org/"
  },
  {
    name: "Nuxt",
    image: "./images/nuxt.svg",
    url: "https://nuxt.com/"
  },
  {
    name: "PostgreSQL",
    image: "./images/postgresql.png",
    url: "https://www.postgresql.org/docs/"
  },
  {
    name: "Git",
    image: "./images/git.svg",
    url: "https://git-scm.com/"
  },
  {
    name: "Tailwind CSS",
    image: "./images/tailwind.svg",
    url: "https://tailwindcss.com/"
  },
  {
    name: "Material UI",
    image: "./images/material-ui.svg",
    url: "https://mui.com/"
  },
  {
    name: "SASS",
    image: "./images/sass.svg",
    url: "https://sass-lang.com/"
  },
];

const skillsList = document.querySelector("#skills-list");

skillsList.innerHTML = skills
  .map(
    skill => `
      <li class="tooltip-container scale-on-hover">
        <a href="${skill.url}" target="_blank">
          <img src="${skill.image}" alt="${skill.name}">
        </a>
        <span class="tooltip">${skill.name}</span>
      </li>
  `
  ).join("");
