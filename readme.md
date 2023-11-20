Guide de projet: 

Étape 1 : Lancer le serveur backend 
Étape 2 : Lancer le serveur en direct (live server / index.html) pour le front-end.
Étape 3 : Créer un compte
Étape 4 : Connectez-vous
Étape 5 : Votre compte et les autres utilisateurs créés seront affichés sur la page.

------------------------------dossier backend : 

* création du serveur node (fichier : server.js)
* connexion à la bdd, création de l'instance express, configuration CORS, définissions des routes...(fichier : app.js)

* création des routes et export (dossier : routes)
* création de la logique métier des routes (dossier : controllers)
* vérification de la validité du JsonWebToken (fichier : auth.js)
* création de notre modèle User pour notre bdd (fichier : User.js)

------------------------------dossier frontend : 

* fichier racine : index.hmtl 
* création des différentes pages HTML pour notre application (dossier : templates)
* création de la logique de récupération des données côté front (dossier : scripts)

------------------------------Ici pour en savoir plus : 

-----backend / controllers / login.js

ce fichier gère la logique de connexion d'un utilisateur en vérifiant l'adresse e-mail et le mot de passe fournis par l'utilisateur par rapport aux données stockées dans la base de données. S'il y a correspondance, il génère un token JWT pour l'authentification ultérieure de l'utilisateur.

-----backend / controllers / register.js

ce fichier gère la logique de création d'un nouvel utilisateur en hachant son mot de passe et en l'ajoutant à la base de données. Il renvoie des réponses HTTP appropriées en fonction du succès ou de l'échec de cette opération.

-----backend / controllers / users.js

ce fichier gère une route qui permet de récupérer la liste de tous les utilisateurs enregistrés dans l'application. Cette liste est renvoyée sous forme de réponse HTTP au format JSON.

-----backend / middleware / auth.js

ce middleware Express est utilisé pour vérifier la validité d'un JWT dans une requête et pour extraire l'ID de l'utilisateur à partir du token si celui-ci est valide. Cela permet de sécuriser les routes en s'assurant que seuls les utilisateurs authentifiés peuvent y accéder.

-----backend / modeles / User.js

ce fichier définit le schéma de données et le modèle pour les utilisateurs de votre application, en spécifiant les règles de validation pour les champs email et password et en garantissant l'unicité des adresses e-mail dans la base de données. Cela permet de créer, lire, mettre à jour et supprimer des données d'utilisateur dans la base de données de manière structurée et sécurisée.

-----backend / routes / login.js

ce fichier définit un routeur Express spécifique pour gérer les requêtes de connexion d'utilisateurs. Il dirige ces requêtes vers le contrôleur loginController pour exécuter la logique appropriée lorsqu'un utilisateur tente de se connecter à l'application. Ce routeur est ensuite inclus dans l'application principale pour gérer les routes d'authentification.

-----backend / routes / register.js 

ce fichier définit un routeur Express spécifique pour gérer les requêtes d'inscription d'utilisateurs. Il dirige ces requêtes vers le contrôleur registerController pour exécuter la logique appropriée lorsqu'un utilisateur tente de s'inscrire à l'application. Ce routeur est ensuite inclus dans l'application principale pour gérer les routes d'inscription.

-----backend / routes / users.js

ce fichier définit un routeur Express spécifique pour gérer les requêtes de récupération de la liste des utilisateurs de l'application. Il dirige ces requêtes vers le contrôleur usersController pour exécuter la logique appropriée lorsqu'un utilisateur demande la liste des utilisateurs. Ce routeur est ensuite inclus dans l'application principale pour gérer les routes de récupération des utilisateurs.

-----backend / app.js

 ce fichier est le point d'entrée principal de votre application Node.js. Il configure Express, gère les routes, établit une connexion à la base de données MongoDB et définit la gestion des requêtes CORS. Il agit comme un point central pour le fonctionnement de votre application.

-----backend / server.js 

ce fichier est responsable de la création du serveur HTTP qui héberge votre application Express. Il gère la configuration du port, la gestion des erreurs, et il démarre le serveur, permettant ainsi à votre application d'écouter et de répondre aux requêtes HTTP entrantes.

-----frontend / scripts / login.js 

ce script JavaScript gère la soumission d'un formulaire d'authentification, envoie les données au serveur, traite la réponse, et en fonction du résultat, affiche un message de succès ou d'échec, ainsi que la redirection de l'utilisateur. Cela permet d'effectuer une authentification asynchrone dans une application web.

-----frontend / scripts / register.js 

ce script JavaScript gère la soumission d'un formulaire d'inscription, envoie les données au serveur, traite la réponse, et en fonction du résultat, affiche un message de succès ou d'échec, ainsi que la redirection de l'utilisateur. Cela permet d'effectuer une inscription asynchrone dans une application web.

-----frontend / scripts / users.js

ce script JavaScript récupère la liste des utilisateurs depuis le serveur et les affiche dans un tableau HTML sur la page web une fois que la page est entièrement chargée. Cela permet d'afficher dynamiquement les données des utilisateurs sur la page de l'application web.