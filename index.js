// Iteration 1: Names and Input

hacker1 = "Peter";
console.log(`The driver's name is ${hacker1}`);

hacker2 = "Mary";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 Capitalize and spacing

let driverCapitalized = "";

for (let i = 0; i < hacker1.length; i++) {
  let upperCassing = hacker1[i].toUpperCase();

  if (i === 0) {
    driverCapitalized = driverCapitalized + upperCassing;
  } else {
    driverCapitalized = driverCapitalized + " " + upperCassing;
  }
}
console.log(driverCapitalized);

// 3.2 Reverse order

let reversedNavigator = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigator += hacker2[i];
}
console.log(reversedNavigator);

// 3.3 Lexicographic order

let longestName = "";

if (hacker1.length < hacker2.length) {
  longestName = hacker2;
} else {
  longestName = hacker1;
}

for (let i = 0; i < longestName.length; i++) {
  if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
    break;
  } else if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
    console.log(`The driver's ${hacker1} goes first.`);
    break;
  } else if (hacker2[i] < hacker1[i] || hacker2[i] === undefined) {
    console.log(`Yo, the navigator ${hacker2} goes first definitely.`);
    break;
  }
}

// Bonus 1. lorem ipsum generator
