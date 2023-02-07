
class User {
    constructor(titre, nom, prenom, age, ville, pays, email, photo) {
        this.titre = titre;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.ville = ville;
        this.pays = pays;
        this.email = email;
        this.photo = photo;
    }

    estPresent() {
        return false;
    }
   
    createUser (titre, nom, prenom, age, ville, pays, email, photo) {
        const containerElement = document.createElement("div");
        containerElement.classList.add("user");
        const html = `<div class="user" data-present="false">
        <img src="${photo}">
        <div class="user--info">
                <h1>${titre} ${prenom} ${nom}</h1>
                <p>${age} years old</p>
                <p>${ville}, ${pays}</p>
        </div>
        <a href="mailto:${email}">
                <span class="mail">✉️</span>
        </a>
    </div>`;
    containerElement.insertAdjacentHTML("afterbegin", html);

    
    }
    
}

export default User;


