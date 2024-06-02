import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

//const fetchSuperHeros=()=>{
//     axios.get("http://localhost:4000/superheros")
// }
// function RQSuperHerospage() {
// const { isLoading, data } = useQuery("super-heros",fetchSuperHeros)

function RQSuperHerospage() {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heros",
    () => {
      return axios.get("http://localhost:4000/superheros");
    },
    { cacheTime: 10, staleTime: 0 }
  );
  console.log({ isLoading, isFetching });
  if (isLoading) {
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
      {data?.data.map((data) => {
        return <div key={data.name}>{data.name}</div>;
      })}
    </div>
  );
}
export default RQSuperHerospage;
