/*
    Ecrire une fonction "isAllEven",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre:
        - 1 si tous les nombres du tableau sont pair
        - 0 si au moins un nombre du tableau est impair

    CRITERE DE VALIDATION OBLIGATOIRE
    --> Réutiliser la fonction isEven
        que vous aviez codé dans les exercices précédents ;)
        INTERDICTION d'écrire le contenu de isEven dans la même fonction
        Vous devez donc bien avoir 2 fonctions différentes;

*/

/*      Test 1
    Appel à la fonction "isAllEven",
    prenant en paramètre le tableau [4, 5, 6],
    et nous attendons comme résultat 0;
*/

isAllEven([4, 5, 6]);

/*      Test 1
    Appel à la fonction "isAllEven",
    prenant en paramètre le tableau [4, 4, 6, 8, 10, 12],
    et nous attendons comme résultat 1;
*/

isAllEven([4, 4, 6, 8, 10, 12]);

//  écrire votre code sous ce commentaire

function isAllEven(array) {
    newArray = [];
    for(i = 0; i < array.length; i++) {
        newArray[i] = isEven(array[i]);
        //console.log(isEven(array[i]))
    }
    var total = 0;
    for(i = 0; i < newArray.length; i++) {
        total += newArray[i];
    }
    //console.log(total);

    if(total === newArray.length) {
        console.log(1);
    } else {
        console.log(0);
    }
}


function isEven(nb) {
    if (nb % 2 === 0) {
        return 1;
    } else {
        return 0;
    }
}