import React, { useState, useEffect } from "react";

export default function Fetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetctData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const value = await response.json();
        setData(value);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetctData();
  }, []);

  console.log(data);

  if(loading){
    return <div>Loading...</div>
  }
  if(!data){
    return <div>Error loading data</div>
  }

  return (
    <>
      <h1>Using Fetch inside useEffect</h1>
        {data.map((item) => (
          <ul key={item.id}>
            <p>Name: {item.name}</p>
            <p>Price: ${item.price}</p>
            <p>In Stock: {item.in_stock ? "Yes" : "No"}</p>
          </ul>
        ))}
    </>
  );
}
