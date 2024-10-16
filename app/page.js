"use client";
import { Card } from "@/components/Card";
import { Title } from "@/components/Title";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [items, setItems] = useState([]);
  const searchName = useSelector((state) => state.characters.searchName)

  const name = searchName == undefined ? "" : searchName;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((response) => response.json())
      .then((json) => setItems(json.results));
  }, [name])
  
  return (
    <div className="mt-20 p-2 px-4">
      <Title>Characters</Title>
      <div className="grid grid-cols-4 gap-4">
        {
          items.map((item) =>
          (
            <Card key={item.id} title={item.name} description={item.status} thumbnail={item.image} characterId={item.id} />
          )
          )
        }
      </div>
    </div>
  );
}

export default Home;
