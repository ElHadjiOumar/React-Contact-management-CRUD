import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    numero: "",
  });

  const { nom, prenom, email, numero } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/serveur");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Ajoutez un utilisateur</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer votre nom"
              name="nom"
              value={nom}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer votre prenom"
              name="prenom"
              value={prenom}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Entrer votre mail"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="entrer votre numero de telephone"
              name="numero"
              value={numero}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Add Contact</button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
