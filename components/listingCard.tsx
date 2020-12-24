import * as React from "react";
import styled from "@emotion/styled";
import waveVector2 from "../public/images/waveVector2.svg";

interface ImageContainerProps {
  imageURL: string;
}

const ImageContainer = styled.div<ImageContainerProps>`
  mask: url(${waveVector2});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: left;
  height: 145px;
  background-image: url(${(props) => props.imageURL});
  background-position: center;
  width: 800px;
`;

interface ListingProps {
  imageURL: string;
  title: string;
  address: string;
  beds: number;
  baths: number;
  guests: number;
  startingAtPrice: number;
  startingAtDuration: string;
  onClick: () => void;
}

const Listing: React.FC<ListingProps> = ({
  imageURL,
  title,
  address,
  beds,
  baths,
  guests,
  onClick,
  startingAtPrice,
  startingAtDuration,
}) => {
  return (
    <div
      className="rounded-2xl h-36 flex justify-between bg-gray-100"
      onClick={onClick}
    >
      <ImageContainer imageURL={imageURL} className="rounded-2xl" />
      <div className="flex flex-col items-end justify-between pr-4 py-3">
        <h1 className="text-black z-10 text-bold capitalize txt-2xl">
          {title}
        </h1>
        <h1 className="text-black z-10">{address}</h1>
        <div className="bg-green-600 rounded-sm py-2 px-4 text-white flex -mr-7 shadow-xl">
          <div className="flex flex-col">
            <h2 className="mr-8 font-bold tracking-wide">
              BEDS {beds} | BATH {baths} | GUESTS {guests}
            </h2>
            <h2 className="self-end -my-2">starting at</h2>
          </div>
          <h1 className="text-4xl ml-2">
            ${startingAtPrice} / {startingAtDuration}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Listing;
