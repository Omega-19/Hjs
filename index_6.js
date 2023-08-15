
//processus pour afficher un message non numérique
let p = "c'est la 44 fois"
const r = /\D/g
let c = p.match(r);
let sentences = c.join("");

console.log(sentences);