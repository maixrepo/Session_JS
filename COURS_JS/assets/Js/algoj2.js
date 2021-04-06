function fun() {

    // Tableau (array)
    // - une variable pouvant avoir simultanement un ensemble de valeurs
    // la première valeur du tableau est l'indice 0

    var tab = [2, 3, 5];

    // Recuoere la taille du tableau
    console.log(tab.length);

    // affiche le 1er element du tableau
    console.log(tab[0]);

    tab.push(7);

    tab[tab.length] = 8;

    //Affiche le tableau
    console.log(tab)

    // Pour parcourir le Tableau
    for(var i = 0; i < tab.length; i++){
        console.log(tab[i]);

        // boucle for simplifié
        for (var element of tab){
            console.log(element);
        }

        /*
        Opération sur les tableaux

        - push() : ajoute un element passé en parametre du tableaux
        - pop() : supprime le dernier element du tableau
        - shift() : supprime le premier element du tableau
        - reverse() : inverse l'ordre des elements du tableau
        - sort() : trie le tableau
        - splice() : permet d'extraire, ajouter ou supprimer un ou plusieurs elements (selon des parametres)
        - slice() : permet d'extraire un sous-tableau à partir du tableau d'origine
        - include() : retourne true si la valeur passée en parametre existe dans le tableau
        - indexOf() : retourne la position de l'element passée en parametre, -1 sinon
        - fill() : permet d'initialiser, ou modifier des valeurs d'un tableau ou une partie 
        - unshift() : permet d'ajouter un ou plusieurs elements dans le tableau

        */

        var sports = ["foot", "tennis", "rugby", "basket", "volley"];

        // sports.splice(2, 1, "Basket",  )

        var tab = sports.splice(2, 0, "Basket", "petanque");

        for (var element of sport){
            console.log(element);
        }

        var tab = sports.splice(1, 3);

        console.log(tab);

        var tab = new Array(3).fill(0);

        console.log(tab);

        var tab = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        tab.fill(9, 2, 5);
        console.log(tab);

        tab.unshift(9);

        console.log(tab);

        // ecrivez un programme JavaScript pour calculer la somme et le produit d'un tableau.

        var array = [1, 2, 3, 4, 5, 6, 7
        
        
        ]


        // .foreach() : permet de parcourir un tableau.
        // .map() : permet d'appliquer une fonction à un tableau
        // .filter() : permet de flitrer le s elements d'un tableau selon un critère sous forme d'un fonction anonyme fléchée
        // .reduce() : permet de reduire tous le elements d'un tableau en un seul seon une regle definie sous la forme d'une fonction anonyme
        // ou fléchée
        
        var tab = [2, 3, 5];
        tab.map(x => x + 3)
        .filter(x => x > 5)
        .forEach(
            function(a){
                console.log(a -3);
            }
        );

        // Affiche 3, 5

        var somme = tab.map(x => x + 3)
            .filter(x => x > 5)
            .reduce(function(sum, element){
                return x + element;
            });

            console.log(somme);

            fun();

            // Fonctions

            // ES5 -ECMASCRIPT VS
            function somme(a, b){
                return console.log(a + b);
            }

            somme(1, 2);


           var res = somme(1, 3);

           // ES6

           const addition = (a, b) => a + b;

           var res = addition(1, 3);

           console.log(res);

           
           {
               var x = 2;
           }
           // on va pouvoir se servir de x
           var x = 10
           {
               let x = = 2;
               
           }
           // console.log(x);
           // x = 10
           // pas possible de se servir de x

           let somme = new Function("a", "b", "return a + b");

           let resultat = somme(1, 5);

           console.log(resultat);

           function somme3(){
               result = 0;
               for (var i = 0; i < arguments.length; i++) {
                   result += arguments[i];
               }
               return result;
           }

           console.log(somme3(2, 4, 8));
           console.log(somme3(2, 3));

           
}

fun();