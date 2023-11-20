
window.onload = function() {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        let contenu = '<tbody>';
        data.users.forEach(objet => {
            contenu += `<tr><td>${objet.email}</td></tr>`;
        });
        contenu += '</tbody>';
    
        document.getElementById('donneesAffichees').innerHTML = contenu;
    })
    
    .catch(error => console.error('Erreur:', error));
};
