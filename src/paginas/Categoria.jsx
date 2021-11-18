import React, { useEffect, useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { buscaDados } from "../api/api";
import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPosts from "../components/ListaPosts";
import SubCategorias from "./SubCategorias";

const Categoria = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subcategorias, setSubcategorias] = useState([]);

  useEffect(() => {
    buscaDados(`/categorias/${id}`, (categoria) => {
      setSubcategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPosts url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategorias />
        </Route>
      </Switch>
    </>
  );
};

export default Categoria;
