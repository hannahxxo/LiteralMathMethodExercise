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