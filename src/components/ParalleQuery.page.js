import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros");
};
const fetchbrother = () => {
  return axios.get("http://localhost:4000/brothers");
};
function ParalleQuerypage() {
  const { data: superheros } = useQuery("super-heros", fetchSuperHeros);
  const { data: brothers } = useQuery("brothers", fetchbrother);
  return <div>ParalleQuerypage</div>;
}

export default ParalleQuerypage;
