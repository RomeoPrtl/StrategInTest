document.getElementById('monFormulaire').addEventListener('submit', function(e) {
    e.preventDefault();

    var formulaire = new FormData(this);
    var objetDonnees = {};
    formulaire.forEach((value, key) => { 
        objetDonnees[key] = value; 
    });

    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetDonnees)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Échec de l\'inscription.');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('message').innerText = 'Inscription réussie!';
        document.getElementById('message').style.backgroundColor = 'green';
        setTimeout(function(){
            window.location.href = '/frontend/index.html';
        }, 1500)
    })
    .catch(error => {
        console.error('Erreur:', error);
        document.getElementById('message').innerText = 'Échec de l\'inscription.';
        document.getElementById('message').style.backgroundColor = 'red';
    });
});

