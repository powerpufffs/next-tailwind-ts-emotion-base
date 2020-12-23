import * as React from "react";
import { css } from "@emotion/react";
import LocationCarouselCard from "../components/locationCarouselCard";
import Spacer from "../components/spacer";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    // <div className="m-20 h-48">
    <div className="grid grid-cols-2 gap-4 m-12">
      <div className="flex flex-col justify-between">
        <h1 className="text-6xl mt-24 leading-tight">
          Vacation, <br /> Your way.
        </h1>
        <div className="rounded-xl border-2 border-gray-200 h-16 mt-8 -mr-16 z-10 p-2 flex justify-between bg-white shadow-xl">
          <input
            type="text"
            placeholder="Take me away to..."
            className="flex-grow pl-4 mr-2"
          />
          <button className="bg-blue-500 text-white h-full px-4 rounded-xl shadow-md">
            Search
          </button>
        </div>
        <h2 className="font-bold mt-24">Luxury Destinations</h2>
        <section
          className="flex flex-row mt-3 overflow-x-scroll overflow-y-hidden"
          css={css`
            scrollbar-width: none;
            ::-webkit-scrollbar {
              width: 0;
              height: 0;
            }
          `}
        >
          <LocationCarouselCard
            name="Nashville, Tennessee"
            imageURL="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
          />
          <Spacer width={1} />
          <LocationCarouselCard
            name="Maui, Hawaii"
            imageURL="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
          />
          <Spacer width={1} />
          <LocationCarouselCard
            name="Moab, Utah"
            imageURL="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
          />
          <Spacer width={1} />
          <LocationCarouselCard
            name="Nashville, Tennessee"
            imageURL="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
          />
        </section>
      </div>
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
        alt="fancy photo"
        className="w-full h-full shadow-md rounded-xl"
      />
    </div>
    // </div>
  );
};

export default Home;
