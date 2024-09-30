const beginnings = [
  "The future belongs to",
  "A wise person once said",
  "Remember that",
];

const middles = [
  "those who believe in their dreams",
  "the hardest battles",
  "success is not final, failure is not fatal",
];

const endings = [
  "and dare to fail.",
  "are won by the strong.",
  "it is the courage to continue that counts.",
];

function generateMessage() {
  const randomBeginning =
    beginnings[Math.floor(Math.random() * beginnings.length)];
  const randomMiddle = middles[Math.floor(Math.random() * middles.length)];
  const randomEnding = endings[Math.floor(Math.random() * endings.length)];

  return `${randomBeginning} ${randomMiddle} ${randomEnding}`;
}

console.log(generateMessage());
