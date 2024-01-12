function alphabetically(word)
    {
        return word.split("").sort().join("");
    }
let serialOrder = alphabetically('webster');
console.log(serialOrder);