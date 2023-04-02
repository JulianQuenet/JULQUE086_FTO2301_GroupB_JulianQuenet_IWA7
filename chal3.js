const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";

const divider = "----------------------------------";

// Only change below this line
const owed = (parseInt(leoBalance) + parseFloat(sarahBalance)) * -1;
const leo = `${leoName} ${leoSurname.replace(/ /g, "")} (Owed: R ${(parseInt(leoBalance)*-1).toFixed(2)})`;
const sarah = `${sarahName.replace(/ /g, "")} ${sarahSurname} (Owed: R ${(parseFloat(sarahBalance)*-1).toFixed(2)})`;
const total = `Total amount owed: R ${owed.toFixed(2)}`;
const result = `${leo}
${sarah}

${divider}
${total}
${divider}`;

console.log(result);

//Reference
// Leo Musvaire (Owed: R 9394.00)
// Sarah Kleinhans (Owed: R 4582.20)

// ----------------------------------
//   Total amount owed: R 14 976.20
// ----------------------------------
