const copyrightYear = document.getElementById("copyright-year");
const year = new Date().getFullYear();
copyrightYear.textContent = year;

const localTime = document.getElementById("local-time");
const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    localTime.innerText = `Local Time: GMT+4 - ${timeString}`;
};
updateTime();
setInterval(updateTime, 1000);
