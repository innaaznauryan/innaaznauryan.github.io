const contacts = [
  {
    type: "linkedin",
    url: "https://linkedin.com/in/inna-aznauryan",
    icon: "./images/linkedin.png",
    iconAlt: "linkedin",
    tooltip: "View LinkedIn",
    label: "LinkedIn",
  },
  {
    type: "github",
    url: "https://github.com/innaaznauryan",
    icon: "./images/github.png",
    iconAlt: "github",
    tooltip: "View GitHub",
    label: "GitHub",
  },
  {
    type: "email",
    url: "mailto:inna.aznauryan@gmail.com",
    icon: "./images/email.png",
    iconAlt: "email",
    tooltip: "Email Me",
    label: "inna.aznauryan@gmail.com",
  },
];

const contactContainer = document.querySelector("#contact-container");

const contactsHtml = contacts
  .map(
    contact => `
      <p>
        <a
          href="${contact.url}"
          ${contact.type !== "email" ? 'target="_blank"' : ""}
          class="tooltip-container scale-on-hover"
        >
          <img src="${contact.icon}" alt="${contact.iconAlt}">
          <span class="tooltip">${contact.tooltip}</span>
        </a>
        <span>${contact.label}</span>
      </p>
    `
  ).join("");

const localTimeHtml = `
  <p>
    <img src="./images/clock.png" alt="clock">
    <span id="local-time">Local Time: GMT+4</span>
  </p>
`;

contactContainer.innerHTML = contactsHtml + localTimeHtml;

const localTime = document.getElementById("local-time");
const updateTime = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  localTime.innerText = `Local Time: GMT+4 - ${timeString}`;
};
updateTime();
setInterval(updateTime, 1000);

const copyrightYear = document.getElementById("copyright-year");
copyrightYear.textContent = new Date().getFullYear();