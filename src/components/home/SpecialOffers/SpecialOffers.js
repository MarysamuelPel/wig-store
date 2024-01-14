import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Brazillian Hair"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="4X4 Transparent HD Lace Front Wigs Human Hair Pre Plucked with Baby Hair,Invisible,Soft and Breathable,Match All Color Skin Well. 💖100% Unprocessed"
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Human Hair"
          price="180.00"
          color="Gray"
          badge={true}
          des="4X4 Transparent HD Lace Front Wigs Human Hair Pre Plucked with Baby Hair,Invisible,Soft and Breathable,Match All Color Skin Well. 💖100% Unprocessed"
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Perruzian Hair"
          price="25.00"
          color="Mixed"
          badge={true}
          des="4X4 Transparent HD Lace Front Wigs Human Hair Pre Plucked with Baby Hair,Invisible,Soft and Breathable,Match All Color Skin Well. 💖100% Unprocessed"
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Human Hair"
          price="220.00"
          color="Black"
          badge={true}
          des="4X4 Transparent HD Lace Front Wigs Human Hair Pre Plucked with Baby Hair,Invisible,Soft and Breathable,Match All Color Skin Well. 💖100% Unprocessed"
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
