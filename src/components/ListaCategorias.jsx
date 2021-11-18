import React, { useEffect, useState } from "react";
import { buscaDados } from "../api/api.js";
import { Link } from "react-router-dom";
import "../assets/css/blog.css";

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    buscaDados(`/categorias`, setCategorias);
  }, []);
  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria) => (
        <Link to={`/categoria/${categoria.id}`} key={categoria.id}>
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}
          >
            {categoria.nome}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ListaCategorias;
