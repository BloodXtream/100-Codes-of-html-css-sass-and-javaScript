const iplTeams = [
    {
        name: "Chennai Super Kings",
        shortName: "CSK",
        primaryColor: "#F7C52E", // Yellow
        secondaryColor: "#1C1C1C" // Dark Blue
    },
    {
        name: "Mumbai Indians",
        shortName: "MI",
        primaryColor: "#045093", // Blue
        secondaryColor: "#FFFFFF" // White
    },
    {
        name: "Royal Challengers Bangalore",
        shortName: "RCB",
        primaryColor: "#DA1818", // Red
        secondaryColor: "#000000" // Black
    },
    {
        name: "Kolkata Knight Riders",
        shortName: "KKR",
        primaryColor: "#3F1D64", // Purple
        secondaryColor: "#D1AB3E" // Gold
    },
    {
        name: "Sunrisers Hyderabad",
        shortName: "SRH",
        primaryColor: "#FB6427", // Orange
        secondaryColor: "#000000" // Black
    },
    {
        name: "Rajasthan Royals",
        shortName: "RR",
        primaryColor: "#E61C81", // Pink
        secondaryColor: "#005BAC" // Blue
    },
    {
        name: "Delhi Capitals",
        shortName: "DC",
        primaryColor: "#17449B", // Blue
        secondaryColor: "#E21737" // Red
    },
    {
        name: "Punjab Kings",
        shortName: "PBKS",
        primaryColor: "#D71920", // Red
        secondaryColor: "#C4C4C4" // Silver
    },
    {
        name: "Gujarat Titans",
        shortName: "GT",
        primaryColor: "#0A1F39", // Dark Blue
        secondaryColor: "#B4A269" // Gold
    },
    {
        name: "Lucknow Super Giants",
        shortName: "LSG",
        primaryColor: "#2B8ED8", // Light Blue
        secondaryColor: "#E76F1E" // Orange
    }
];

const p = document.querySelector('p');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let num = Math.floor(Math.random() * iplTeams.length)
    let winner = iplTeams[num]
    p.innerHTML = `${winner.shortName}`
    p.style.backgroundColor = `${winner.primaryColor}`
    p.style.color = `${winner.secondaryColor}`
})

