const certifications = [
  {
    name: "Advanced JavaScript",
    image: "./images/certifications/JavaScript_Certificate.jpg",
  },
  {
    name: "React & TypeScript",
    image: "./images/certifications/React_TypeScript_Certificate.jpg",
  },
  {
    name: "CLaude Code in Action",
    image: "./images/certifications/Claude_Code_in_Action_Certificate.jpg",
  },
  {
    name: "Building AI Agents with Python",
    image: "./images/certifications/AI_Agents_Certificate.jpg",
  },
  {
    name: "LangChain & LangGraph",
    image: "./images/certifications/LangChain_LangGraph_Certificate.jpg",
  },
];

const certificationsContainer = document.querySelector("#certifications-container");

certificationsContainer.innerHTML = certifications
  .map(
    cert => `
      <div class="img-card">
        <img class="image" src="${cert.image}" alt="${cert.name}">
      </div>
    `
  ).join("");
