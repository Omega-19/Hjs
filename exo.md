# Exo

## Exo1
Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE.
### Exemple:
check(5, 20) ➞ true
// 5 + 20 = 25

check(60, 55) ➞ false
// 60 + 55 = 115

## Exo2
Écrivez une fonction qui convertit les heures en secondes. Notez qu’il y a 60 secondes en une minute et 60 minutes en une heure.

Exemple:
heureSeconde(1) ➞ 3600

heureSeconde(5) ➞ 18000

## Exo3
Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.

### Exemple:
isDivisible(5) ➞ true

isDivisible(10) ➞ true

isDivisible(6) ➞ false

## Exo4
Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.

### Exemple:
hmTos(1, 10) ➞ 4200

hmTos(0, 59) ➞ 3540

hmTos(0, 0) ➞ 0

## Exo5
Écrivez une fonction qui prend un entier et:

Si le nombre est un multiple de 3, retournez « Hello ».
Si le nombre est un multiple de 5, retournez « World ».
Si le nombre est un multiple de 3 et de 5, retournez « Hello World ».
### Exemple:

checkNbr(3) ➞ "Hello"

checkNbr(5) ➞ "World"

checkNbr(15) ➞ "Hello World"

## Exo6
Écrivez l’expression régulière qui révèle le message caché. Vous devez supprimer tous les nombres pour révéler le message. Utilisez la classe de caractères \D dans votre expression.

## Exo7 
Ecrivez un programme qui dessine un triangle isocèle avec des etoiles dans la console
### Exemple 
    *
   ***
  *****
 *******
*********

## Exo8
Créez une fonction qui renvoie la valeur ASCII du caractère transmis.

### Exemple:

charToAscii("A") ➞ 65

## Exo9
 Créez une fonction qui renvoie le produit de tous les entiers impairs dans un tableau.

### Exemple:

prodImp([1, 2, 3, 4]) ➞ 3

prodImp([3, 6, 8, 5, 5, 7]) ➞ 525

prodImp([1, 0, 1, 0, 1, 0]) ➞ 1

## Exo10 
 complète les pointillé pour renvoyer true ou false
 let x = "test"
 console.log(...x)

## Exercice 11
Créez une fonction pour calculer le déterminant d’une matrice (le user peut entrer la taille de s matrice dans ce cas la taille est 2).

[[a, b], 
 [c, d]]
Le déterminant de la matrice ci-dessus est: ad – bc:

Exemple:

det([
  [1, 1],
  [2, 3]
]) ➞ 1

## Exercice 12
Déclarer et définir 2 variables misteryNumber et myNumber de type number.
En utilisant uniquement l'opérateur ternaire, on affiche :

Si les 2 nombres sont égaux Congratulations !
Sinon
Si le nombre myNumber est inférieur au nombre misteryNumber, on affiche +
Sinon on affiche -