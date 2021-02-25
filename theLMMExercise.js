// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs);

// 1b
warmHugs.toUpperCase();
console.log(warmHugs.toUpperCase());

// 1c
warmHugs.replace("like", "love");
console.log(warmHugs.replace("like", "love"));
warmHugs = warmHugs.replace("like", "love");
// console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";
console.log(beenImpaled);

// 2b
beenImpaled.slice(18,36);
console.log(beenImpaled.slice(18, 36));
// beenImpaled.slice(beenImpaled.indexOf(I));

// 3a
let dotDotDot = "...";
console.log(dotDotDot);

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

// 6
// let song = "Let It Go! ";
// console.log(song);
// song.toUpperCase();
// console.log(song.toUpperCase());
// song = song.toUpperCase();
// console.log(song);
// console.log(song.repeat(2));

console.log(" Let It Go!".repeat(2).trim().toUpperCase());

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
// console.log(reindeers.replace(/ /g, "_"));
console.log(reindeers.replaceAll(" ", "_"));

// 8
console.log(Math.sqrt(2));
console.log(2**(1/2));

// 9
// Completed on separate lines
// let newRandomNumber = Math.random;
// newRandomNumber *= 17;
// newRandomNumber = Math.floor(newRandomNumber);
// newRandomNumber += 7;

// different ways to complete
let newRandomNumber = Math.floor(17 * Math.random()) + 7;
let newRandomNumber = Math.floor(Math.random() * 17) + 7;
let newRandomNumber = Math.floor(17 * Math.random() * 17 + 7);