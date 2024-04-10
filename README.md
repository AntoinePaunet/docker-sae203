# docker-sae203
## Groupe 13
### ANTOINE PAUNET | NICOLAS CHANTEUX | EDWIN MICHEL | TED HERAMBERT
------------------------------------------------------------------------

# 1- Compte rendu du projet 

//à modiff


# 2- Instructions pour lancer l'application

- Vérifiez si vous avez docker d'installé :

```shell
docker --version
```

- Cloner le référentiel qui contient l'application

```shell
git clone git@github.com:AntoinePaunet/docker-sae203
```

- Aller au référentiel :

```shell
cd docker-sae203
```

- Construisez une image avec ```docker build``` : 

```shell
docker build -t <choisir-un-nom-pour-l'image> .
```

- Lancer le serveur web avec ```docker run``` :

```shell
docker run -d -p 8080:80 <nom-de-l'image-choisie>
```

- Pour finir lancez l'application en allant sur un navigateur et mettre ```localhost:8080``` sur la barre d'URL


# 3- Instructions pour fermer l'application

- Arretez le conteneur avec ```docker stop```

```shell
docker stop b8f8f406b03c
```

- Supprimez le conteneur 

```shell
docker rm b8f8f406b03c
```

**Note** : remplacez le code de hashage ```b8f8f406b03c``` par celui que vous avez en fasiant ```docker ps```

