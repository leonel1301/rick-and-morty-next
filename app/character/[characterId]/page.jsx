import { EpisodeCard } from "@/components/EpisodeCard";
import { LeftPart } from "@/components/LeftPart";
import { RightPart } from "@/components/RightPart";
import { Title } from "@/components/Title";
import Image from "next/image";
import React from "react";

async function fetchData(characterId) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
  return response.json();
}

async function fetchEpisode(episodeUrl) {
  const response = await fetch(episodeUrl);
  return response.json();
}

export default async function Character({ params }) {
  const { characterId } = params;
  const item = await fetchData(characterId);
  const episodes = await Promise.all(
    item.episode.map((episodeUrl) => fetchEpisode(episodeUrl))
  );

  return (
    <div className="p-4 px-8">
      <div className="flex justify-evenly">
        <LeftPart
          status={item.status}
          species={item.species}
          gender={item.gender}
        />
        <div className="flex flex-col justify-center items-center bg-white mt-20 w-1/3">
          <h1 className="font-semibold">{item.name}</h1>
          <div className="w-[120px] h-2 bg-green-600 rounded-lg"></div>
          <div className="border-[5px] border-black rounded-lg mt-4">
            <Image
              src={item.image}
              alt="Picture of the author"
              width={320}
              height={320}
            />
          </div>
        </div>
        <RightPart location={item.location.name} origin={item.origin.name} />
      </div>
      <Title>Episodios</Title>
      <div className="grid grid-cols-7 gap-4">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} name={episode.name} episode={episode.episode} airDate={episode.air_date}/>
        ))}
      </div>
    </div>
  );
}
