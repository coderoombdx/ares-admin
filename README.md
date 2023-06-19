# PROJET ARES

Vous êtes sur le projet de la page administrateur de l'Escape Game "Projet Ares". Destiné au maître de jeu, 
cette interface permettre de communiquer avec le joueur , de lui envoyer des messages, et des débloquer
des énigmes en cas de problèmes techniqued

## Initialisation

Ce projet nécessite de tourner avec le backend associé ares-rasp, qui va envoyer toutes les données 
au maître de jeu. Le backend est appelé toutes les secondes pour mettre à jour l'état du jeu.

A la récupération du projet : 

```bash
# create a new project in the current directory
npm install

# create a new project in my-app
npm run dev
```

## Développement

Les éléments d'interface ont principalement été écrits en svg pour donner un aspet au maximum "jeu video SF".


## Building

Pour le déploiement, lancez la commande suivante :

```bash
npm run build
```

Ensuite, récupérez le contenu du dossier build, et mettez la dans le dossier www/etc/ares-admin du raspberry
