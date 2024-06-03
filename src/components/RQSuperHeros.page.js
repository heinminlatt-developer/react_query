import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useSuperHero } from "../hooks/useSuperHeros";
import { Link } from "react-router-dom";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros");
};
function RQSuperHerospage() {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fecthing", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHero(
    onError,
    onSuccess
  );
  //   "super-heros",
  //   fetchSuperHeros,
  //   { onSuccess: onSuccess, onError: onError }
  // );

  //Note=>{refetchOnMount:false} true is default false is data change cannot auto refetch
  // but page reload refetch

  // function RQSuperHerospage() {
  //   const { isLoading, data, isError, error, isFetching } = useQuery(
  //     "super-heros",
  //     () => {
  //       return axios.get("http://localhost:4000/superheros");
  //     }
  //     // { cacheTime: 10, staleTime: 0 } Loading Time,
  //   );
  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h1>...Loading</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
        display: "flex",
      }}
    >
      <h2>RQSuperHeros page</h2>
      <button onClick={refetch}>Refetch</button>
      {data?.data.map((data) => {
        return (
          <div key={data.id}>
            <Link to={`/rq-super-heros/${data.id}`}>{data.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
export default RQSuperHerospage;
