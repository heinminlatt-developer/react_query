import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

function RQSuperHeroPage() {
  const { heroId } = useParams();
  const { data, isError, error, isLoading } = useSuperHeroData(heroId);
  console.log("Data=>>", data);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {data ? (
        <div>
          {data.name}: {data.alterEgo}
        </div>
      ) : (
        <h1>No data found</h1>
      )}
    </div>
  );
}

export default RQSuperHeroPage;
