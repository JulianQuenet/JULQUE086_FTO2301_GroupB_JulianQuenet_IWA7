const nickname = "Timmy";
const firstName = "Timothy";
const user = nickname || firstName;

console.log(user ? `Good morning, ${user}!` : "Good morning!");