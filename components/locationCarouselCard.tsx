import * as React from "react";

interface LocationCarouselCardProps {
  name: string;
  imageURL: string;
}

const LocationCarouselCard: React.FC<LocationCarouselCardProps> = ({
  name,
  imageURL,
}) => {
  return (
    <div className="flex flex-col flex-shrink-0">
      <img
        src={imageURL}
        alt={name}
        className="h-32 rounded-xl shadow-lg w-48"
      />
      <h2>{name}</h2>
    </div>
  );
};

export default LocationCarouselCard;
