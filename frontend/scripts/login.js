document.getElementById('monFormulaire').addEventListener('submit', function(e) {
    e.preventDefault();

    var formulaire = new FormData(this);
    var objetDonnees = {};
    formulaire.forEach((value, key) => { 
        objetDonnees[key] = value; 
    });

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetDonnees)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur de connexion');
        }
        return response.json();
    })
    .then(data => {
        if (data.token) {
            console.log('Token reçu:', data.token);
            document.getElementById('message').innerText = 'Connexion réussie!';
            document.getElementById('message').style.backgroundColor = 'green';
            setTimeout(function(){
                window.location.href = '/frontend/templates/users.html';
            }, 1500)
        } else {
            console.log('Pas de token reçu');
            document.getElementById('message').innerText = 'Échec de la connexion.';
            document.getElementById('message').style.backgroundColor = 'red';
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        document.getElementById('message').innerText = 'Échec de la connexion.';
        document.getElementById('message').style.backgroundColor = 'red';
    });
});


