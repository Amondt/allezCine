# allezCine 

## Description du projet: 

AllezCine est un projet de groupe basé sur le site The Movie DB. L'objectif est de créer un site permettant de récuperer les films et les séries via l'API TheMovieDb. Pour se faire, nous employerons PHP, VueJS et MySQL pour développer notre plateforme.

## Notre équipe : 
* Elisa RENDA https://github.com/elisarenda
* Alexandre ADMONDT https://github.com/Amondt
* Andres GOLDESTEIN https://github.com/AndresGol

## Back-End::
I. Back-End: 
Le back-end du projet a été créé en PHP sur base d'une base de données MySQL.

## Front-End: 
I. Front-End: 
Le front-end du projet a été créé via VueCLI et le framework Vuetify.
La page est divisée en plusieurs parties :
II. Router-view : redirige vers les différents components en fonction du chemin d'accès de l'url.
III. Components : regroupant nos différents components => 
* Carrousel : slideshow des films les plus tendances
* Commentaire : ajouts/retraits de commentaires
* FilmCard : affichage film 
IV. Views: différentes pages disponibles => 
* Home.vue : page d'accueil
* Films.vue & Series.vue : affiche les 40 films & séries les plus tendances (avec un scroll infini)
* DétailsSheet.vue : affiche les détails d'un film ou d'une série en particulier, et communique l'API pour aller chercher et/ou poster des commentaires.
V. Header : barre de navigation comprenant une barre de recherche
VI. Footer: à propos, contact...

## Procédures d’installation:
````
npm install vuetify --save : installation d'un framework de VueJs
npm install axios : permet facilement d'envoyer des requêtes HTTP asynchrones
npm install : permettant d'installer un package et ceux dont il dépend
npm run serve

````

## Problèmes rencontrées: 
Utilisation de github 

## Elements manquants:

