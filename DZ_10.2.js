const text = "Wonderful Joyful Happiness Time Task Apple";
const result = text.match(/\b[^aA\s]{6,}\b/g);

console.log("Знайдено слова:");
console.log(result);