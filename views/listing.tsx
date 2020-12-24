/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import Mosaic from "../components/mosaic";
import Spacer from "../components/spacer";

interface ListingProps {
  title: string;
  description: string;
  id: string;
}

const Listing: React.FC<ListingProps> = ({ title, description, id }) => {
  return (
    <div className="px-12 flex mt-6">
      <div className="max-w-2xl">
        <h1 className="font-bold">Nashville’s Finest </h1>
        <Spacer height={1} />
        <p>
          11 Min Drive to Music Row 13 Min Drive to The Gulch 15 Min Bike Ride
          to East Nashville Just a short, 6 minute Uber ride from Downtown
          attractions, this 4 bedroom, 3 bath townhome is perfect for a family
          getaway or as a gathering spot for friends! The home is close enough
          to restaurants, bars, and other entertainment in town and private
          enough if you want to spend quality time indoors with the family.
          Experience Nashville With Us & Learn More Below! Here Are A Few Kind
          Words From Our Past Guests: “Awesome place. Very stylish and
          beautiful.” - Carlia “Great value for a spacious & stylish home!” -
          David “Very nice place, spacious and close to downtown.” - Gregory
          ☆☆BEDROOMS☆☆ With four modern bedrooms and three bathrooms, there is
          plenty of room for everyone! Choose from one bedroom with two king
          beds, one bedroom with a queen bed, and one bedroom with two full
          beds. All the bedrooms are spacious and airy so you never feel
          cramped, the beds and linen are cozy for a good night’s sleep and the
          stunning walk-in closets provide enough room for all of your things.
          ☆☆BATHROOMS ☆☆ Three beautiful and pristine bathrooms await to offer
          you spa-like treatment. Necessities such as towels, soap, shampoo, and
          hairdryers are provided for your convenience. Stunning tile decor and
          fixtures elevate your bath time experience. ☆☆ KITCHEN & LOUNGE ☆☆ The
          spacious, open-concept living areas are perfect for enjoying quality
          time with friends or family. The fully-equipped and well-stocked
          kitchen ensures you can prepare a snack or meal whenever your heart
          (or stomach) desires. A dining table stands at the ready, and the
          large SmartTV in the lounge is perfect for movie nights. ☆☆OUTSIDE
          SPACE ☆☆ Enjoy the skyline view from your private patio - the perfect
          place to kick back with your morning coffee or any beverage of your
          choice in the evening. ★☆ Book Today & Let Us Take Care Of You In
          Nashville! ☆★ GUEST ACCESS You will have access to the entire
          townhouse throughout your stay. We hope you’ll make yourself at home
          and enjoy all of the comforts and amenities we have to offer. Put our
          washer and dryer to use and pack just a bit lighter knowing it’s at
          your disposal. Make a gourmet meal in our top of the line kitchen. And
          park with confidence in your private one-car garage. KEY FEATURES: ☀ 4
          large bedrooms; 2 king size beds, 1 queen size bed, and 2 full size
          beds ☀ 3 bathrooms ☀ Large, fully equipped kitchen and dining area ☀
          Spacious and modern lounge Keurig Maker ☀ Skyline views ☀ Access to
          Hulu & YouTube CHECK IN - 4PM , CHECK OUT - 11AM STRP#2019044725
        </p>
      </div>
      <Spacer width={3} />
      <div className="max-w-1/2 w-1/2">
        <img
          src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
          alt="main image of listing"
          className="rounded-xl shadow-xl object-cover"
          css={css`
            height: 600px;
          `}
        />
        <Spacer height={2} />
        <h1>Photos</h1>
        <Mosaic />
      </div>
    </div>
  );
};

export default Listing;
