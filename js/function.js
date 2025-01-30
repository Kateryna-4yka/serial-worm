function fanCTIONS (fff) {
    console.log (`Відносно розміру ваших грудей ${fff}, вам потрібна білизна XXXL`); 
}; 
fanCTIONS (prompt ('Впишіть сюди розмір ваших грудей'));

//

function fan (aaa, bbb) {
    console.log (`Відносно розміру ноги ${aaa}, вам потрібно більше ходити по ${bbb}`); 
}; 
fan (prompt ('Впишіть сюди розмір вашої ноги'), prompt ('Яке ваше улюлене місце для прогулянок?'));


function getRectArea (sideA, sideB) {
const plosha = sideA * sideB;
return plosha;
}

console.log (getRectArea (10, 5));
console.log (getRectArea (2.5, '3'));

function masaTila(Waga, H) {
const masa = Number.parseFloat(Waga) / Number.parseFloat(H)**2;
    return Number((masa).toFixed(1)); 
}
console.log (masaTila ('88.3','1.75')); 