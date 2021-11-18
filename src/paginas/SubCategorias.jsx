import React from "react";
import { useParams } from "react-router";
import ListaPosts from "../components/ListaPosts";

const SubCategorias = () => {
  const { subcategoria } = useParams();
  return <ListaPosts url={`/posts?subcategoria=${subcategoria}`} />;
};

export default SubCategorias;
