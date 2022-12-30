// EXERCICE1 Partie1

const people = ["Greg", "Mary", "Devon", "James"];
// Écrivez du code pour supprimer "Greg" du peopletableau.
people.shift()
// Écrivez le code pour remplacer "James" par "Jason".
people[2]="jason"
console.log(people)
// Écrivez du code pour ajouter votre nom à la fin du peopletableau.
people.push("Lasme")
console.log(people)
// Écrivez le code qui console.logs l'index de Mary. jetez un oeil à la indexOfméthode sur Google .
console.log(people.indexOf("Mary"))
// Écrivez du code pour faire une copie du peopletableau à l'aide de la sliceméthode.
// La copie ne doit PAS inclure "Marie" ou votre nom.
people.slice(0,-1)
// Écrivez le code qui donne l'index de "Foo". Pourquoi renvoie-t-il -1 ?
console.log("L'index de Foo est " +people.indexOf("Foo"))
// Créez une variable appelée lastdont la valeur est le dernier élément du tableau.
// Astuce : Quelle est la relation entre l'indice du dernier élément du tableau et la longueur du tableau ?
let last = people[people.length-1]
console.log("Le dernier element du tableau est" +last)

// EXERCICE1 Partie2

// À l'aide d'une boucle, parcourez le peopletableau et console.log chaque personne.
for (let i = 0; i < people.length; i++) {
    const element = people[i];
    console.log(element)
}
// À l'aide d'une boucle, parcourez le peopletableau et quittez la boucle après avoir console.log "Jason" .
for (let i = 0; i < people.length; i++) {
    const element = people[i];
    if (element == "jason") {break;} {
        console.log(element)
    }
}


// EXERCICE2

// Créez un tableau appelé colors où la valeur est une liste de vos cinq couleurs préférées.
const colors = ["turkoise", "yellogreen", "black", "grey", "white"]
// Bouclez à travers le tableau et pendant que vous bouclez console.log une chaîne comme ceci : "Mon choix n°1 est bleu", "Mon choix n°2 est rouge" ect… .
for (let i = 0; i < colors.length; i++) {
    const element = colors[i];  
    console.log("Mon choix n° " +(i+1)+ " est " +element)
}
// Bonus : changez-le en console.log "Mon 1er choix", "Mon 2ème choix", "Mon 3ème choix", en choisissant le suffixe correct pour chaque numéro.
// Astuce : créer un tableau de suffixes pour faire le Bonus
const suffixe = ["er", "eme"]
for (let i = 0; i < colors.length; i++) {
    const element = colors[i];    
    if (i == 0) {
           console.log("Mon " +(i+1) +suffixe[0]+ " choix est " +element);
           continue;
    }
    console.log("Mon " +(i+1) +suffixe[1]+ " choix est " +element)
}


// Exercice3

// Demander à l'utilisateur un numéro.
// Astuce : Vérifiez le type de données que vous recevez à partir de l'invite (c.-à-d. Utilisez la typeofméthode)
let numero = prompt("Entrer un numero");
console.log(typeof(numero))
// Tant que le nombre est inférieur à 10, continuez à demander à l'utilisateur un nouveau numéro.
// Astuce : Quelle whileboucle est la plus pertinente pour cette situation ?
while (parseInt(numero) < 10) {
    numero = prompt("Entrer un nouveau numero");
}

// Exercice4

// Copiez et collez l'objet ci-dessus dans votre fichier Javascript.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log le nombre d'étages du bâtiment.
console.log(building["numberOfFloors"])
// Console.log combien d'appartements sont aux étages 1 et 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.secondFloor);
// Console.log le nom du deuxième locataire et le nombre de pièces qu'il possède dans son appartement.
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);
// Vérifiez si la somme du loyer de Sarah et de David est supérieure au loyer de Dan. Si c'est le cas, augmentez le loyer de Dan à 1200.
if (building.numberOfRoomsAndRent.dan[1] < building.numberOfRoomsAndRent.david[1] + building.numberOfRoomsAndRent.sarah[1]) {
    let newDanTenant;
    console.log(newDanTenant = building.numberOfRoomsAndRent.dan[1] + 1200)
} else {
    console.log(building.numberOfRoomsAndRent.dan[1]);
}

// Exercice5
const famille = {
    pere: 'Mireille',
    mere: 'Capi',
    enfants: ["Mia", "Liam", "Arnold"]
}
for (const key in famille) {
    console.log(key)
}
for (const key in famille) {
    console.log(famille[key])
}



// Exercice6
//  Étant donné l'objet ci-dessus et en utilisant un for loop, console.log "mon nom est Rudolf le raindeer"
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
for (const key in details) {
    console.log(key + " " + details[key])
}

//  Exercice7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const names2 = names.sort()
let premiereLettrePrenom = " ";
names2.forEach(element => {
    premiereLettrePrenom = premiereLettrePrenom + element.substring(0,1)
});
console.log(premiereLettrePrenom)