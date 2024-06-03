import axios from "axios";
import React from "react";
import { useQueries } from "react-query";
const fetchsuperHeros = (heroId) => {
  return axios.get(`http://localhost:4000/superheros/${heroId}`);
};
export const DynamicParalleQuerypage = ({ heroIds }) => {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryfn: () => fetchsuperHeros(id),
      };
    })
  );
  console.log({ queryResult });
  return <div>Dynamic Page </div>;
};
