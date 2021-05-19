import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    numero: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/serveur">
        Retour
      </Link>
      <h1 className="display-4">Contact Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">nom: {user.nom}</li>
        <li className="list-group-item">Prenom: {user.prenom}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">numero: {user.numero}</li>
      </ul>
    </div>
  );
};

export default Contact;
