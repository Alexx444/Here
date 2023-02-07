import User from "./User.js";

const getUser = async () => {
    const reponse = await fetch(`https://randomuser.me/api/?results=20`)
    const data = await reponse.json();
};




