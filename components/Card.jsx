import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = ({ title, description, thumbnail, characterId }) => {
  return (
    <div className="border-2 p-2 rounded-lg">
      <h1 className="flex justify-center font-semibold">
      <Link href={`/character/${characterId}`}>{title}</Link>
      </h1>
      <div className="flex justify-center">
        <Image
          src={thumbnail}
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </div>
      <p className="flex justify-center">{description}</p>
    </div>
  );
};
