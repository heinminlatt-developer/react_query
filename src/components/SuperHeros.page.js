import React, { useState, useEffect } from "react";
import axios from "axios";

function SuperHerospage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error,setError]=useState('');

  useEffect(() => {
    axios.get("http://localhost:4000/superheros").then((res) => {
      setData(res.data);
      setLoading(false);
    }).catch((error)=>{
        setError(error.message);
        setLoading(false);
    })
  }, []);
  if (loading) {
    return (
      <div>
        <h2 style={{alignSelf:'center'}}>...Loading</h2>
      </div>
    );
  }
  if(error){
    return <div>Error Is:{error}</div>
  }

  return (
    <div
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <h2>Super Heros Page</h2>
      {data.map((data) => {
        return <div key={data.name}>{data.name}</div>;
      })}
    </div>
  );
}

export default SuperHerospage;
