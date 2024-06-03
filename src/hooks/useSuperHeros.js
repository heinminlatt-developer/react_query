import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros");
};
export const useSuperHero = ({ onError, onSuccess }) => {
  return useQuery("super-heros", fetchSuperHeros, {
    onSuccess: onSuccess,
    onError: onError,
  });
};
