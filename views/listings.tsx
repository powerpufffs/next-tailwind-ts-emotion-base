/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import Listing from "../components/listingCard";
import Spacer from "../components/spacer";
import Hoverable from "../components/interactive/hoverable";
import searchSVG from "../public/images/search.svg";
import { useRouter } from "next/router";

interface ListingsProps {}

const Listings: React.FC<ListingsProps> = ({}) => {
  const router = useRouter();

  return (
    <>
      <Spacer height={6} />
      <div className="flex flex-col items-stretch px-12">
        <span
          css={css`
            position: relative;
            &:before {
              content: "";
              position: absolute;
              display: block;
              left: 6px;
              bottom: 10px;
              height: 20px;
              width: 20px;
              filter: contrast(30%);
              background: url(${searchSVG}) no-repeat center center;
            }
          `}
        >
          <input className="border-b border-gray-300 focus:outline-none focus:border-green-700 pb-2 w-full pl-10" />
        </span>
        <Spacer height={4} />
        <div className="flex-grow">
          <Hoverable className="rounded-2xl">
            <Listing
              imageURL="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
              title="Spacious Music City Sanctuary"
              address="20B Fern Avenue"
              beds={4}
              baths={3}
              guests={12}
              startingAtPrice={500}
              startingAtDuration="day"
              onClick={() => router.push("/listing")}
            />
          </Hoverable>
          <Spacer height={1} />
          <Hoverable className="rounded-2xl">
            <Listing
              imageURL="https://gallery.streamlinevrs.com/units-gallery/00/06/6C/thumbnail_157498265.jpeg"
              title="Spacious Music City Sanctuary"
              address="20B Fern Avenue"
              beds={4}
              baths={3}
              guests={12}
              startingAtPrice={500}
              startingAtDuration="day"
              onClick={() => router.push("/listing")}
            />
          </Hoverable>
          <Spacer height={1} />
          <Hoverable className="rounded-2xl">
            <Listing
              imageURL="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
              title="Spacious Music City Sanctuary"
              address="20B Fern Avenue"
              beds={4}
              baths={3}
              guests={12}
              startingAtPrice={500}
              startingAtDuration="day"
              onClick={() => router.push("/listing")}
            />
          </Hoverable>
        </div>
      </div>
    </>
  );
};

export default Listings;
