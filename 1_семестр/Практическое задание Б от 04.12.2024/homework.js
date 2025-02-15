
const response = await fetch('https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg');
let pageContent = await response.text();
const timeRegex = /(\d{1,2}):(\d{2}):(\d{2})/;
pageContent = pageContent.match(timeRegex);
const currentTime = pageContent[0];
console.log(currentTime);