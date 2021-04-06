// Créez une fonction qui prend un tableau en parametre contenant uniquement des nombres et
// renvoie le premier élément.

let array = [1, 2, 3, 4, 5, 6];

function f2(arr) {
    return arr[0];
}

//const f2 = (arr) => arr[0];

var r = f2(array);
console.log(r);


// Créez une fonction qui prend l'âge et retourne l'âge en jours.

var age = 17;
function calcAge(va) {
    return va * 365;
}

var resultat3 = calcAge(age);
console.log(resultat3);


// Ecrivez une fonction qui prend un nombre entier de minutes et retourne la conversion
// en secondes.

var e = 1;
function converstionSeconds(minutes) {
    return minutes * 60;
}

var seconds = converstionSeconds(minutes);
console.log(seconds);