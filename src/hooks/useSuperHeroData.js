import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchHero = async (heroId) => {
    const response = await axios.get(`http://localhost:4000/superheros/${heroId}`);
    return response.data;
  };
export const useSuperHeroData = (heroId) => {
  return useQuery(["super-heros", heroId], () => fetchHero(heroId));
};
