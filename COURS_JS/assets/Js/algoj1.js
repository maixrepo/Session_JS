function maFonction() {
    //Box de confirmation
    //var bin = confirm("Press a button !");
    
    //Box d'affichage avec une zone de saisie
    //var str = prompt("Votre Nom", "John Wick");
    //alert(str);

    //Affichage en consoleur

    //Debogger = afficher le contenu des variables
    //Tracer  = Verifier les blocs du code visités
    console.log("Hello world!");

    /*var cl = console.log;
    cl("Hello world!");*/

    var x;
    x = 0;

    // le mot-cle var recupere le type dynamiquement
    //var x = 5, y = 5;

    //Types de variable selon la valeur affectée

    //number
    //string
    //boolean
    //object
    //undefined

    // Afficher number
    console.log(typeof 5.2);

    //Afficher boolean
    console.log(typeof true);

    // Afficher string
    console.log(typeof "bonjour");

    // Affiche undefined
    //le mot cle var a une visibilité globale (portée, scope)
    var x;
    console.log(typeof x);

    var y = 1;
    var z = "8";

    console.log(y + parseInt(z));

    

    // Ecrivez un programme JavaScript pour afficher le jour et l'heure actuels.
// Indications :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects

var today = new Date();
var day = today.getDate();
// var month = today.getMonth() + 1;
console.log(day);
var daylist = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? "PM" : "AM";
console.log("Aujourd'hui, nous sommes " + daylist[day] + ", et il est" + hour + "h" + minute + "m" + second + "s" +prepand);


// Structure conditionnelle

var x = 3;
//Rentre dans le bloc quand la condition est variable
if(x > 0) {
    console.log(x + " est strictement positif");
// utiliser else if pour specifier une nouvelle condition, di la premiere
}



// Operateurs logiques

// && => et 
// || => ou
// ! => none

/* if (condition && !condition2 || condition3) {
    ...
} [else...] */

// Operateurs de comparaison

/*  
- == : test l'égalité
- 
*/
}
maFonction();

// demande à l'utilisteur de rentre un nombre et teste sa parité
var nbr = prompt("saisir un nombre");


