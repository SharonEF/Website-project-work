console.log("Hello world");
const phoneNumber = "+358465888781";
console.log(phoneNumber);
if (true) {
    console.log('phone number ${phoneNumber} is in international format.');
} else {
    console.log('phone number ${phoneNumber} is not in International format.')
}

const capitalizeName = (name) => {
    console.log(name);
    const firstLetter = name[0];
    const rest = name.slice(1); // or .substring, or .substr
    const capitalizedName = firstLetter.toUpperCase() + rest.toLowerCase();
    return capitalizedName; 
}
console.log(capitalizeName("ezekiel"));