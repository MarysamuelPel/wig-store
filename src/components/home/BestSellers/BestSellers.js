import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Brazillian Hair"
          price="35000"
          color="Black"
          badge={true}
          des="
          genuine image
          Maxine
          Bob Wig Human Hair 13x4 Frontal Lace Wig Short Lace Front Wig Bob Human Hair Pre Plucked Maxine Glueless Bob Wigs Human Hair with Baby Hair 12 Inch"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Perruzian hair"
          price="180000"
          color="black"
          badge={false}
          des="
          genuine image
          Maxine
          Bob Wig Human Hair 13x4 Frontal Lace Wig Short Lace Front Wig Bob Human Hair Pre Plucked Maxine Glueless Bob Wigs Human Hair with Baby Hair 12 Inch"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Brazillian hair"
          price="25000"
          color="Black"
          badge={true}
          des="
          genuine image
          Maxine
          Bob Wig Human Hair 13x4 Frontal Lace Wig Short Lace Front Wig Bob Human Hair Pre Plucked Maxine Glueless Bob Wigs Human Hair with Baby Hair 12 Inch"
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Human Hair"
          price="220000"
          color="Black"
          badge={false}
          des="
          genuine image
          Maxine
          Bob Wig Human Hair 13x4 Frontal Lace Wig Short Lace Front Wig Bob Human Hair Pre Plucked Maxine Glueless Bob Wigs Human Hair with Baby Hair 12 Inch"
        />
      </div>
    </div>
  );
};

export default BestSellers;
