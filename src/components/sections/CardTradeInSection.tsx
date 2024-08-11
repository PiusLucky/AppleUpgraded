import React from "react";
import CardHeading from "../common/CardHeading";

function CardTradeInSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="h-screen lg:h-[calc(100vh-56px-56px)] flex justify-center items-start bg-card bg-no-repeat bg-center bg-cover">
        <CardHeading
          type="black"
          title="Card"
          description="Get up to 3% Daily Cash back with every purchase."
          hasAppleIcon
        />
      </div>
      <div className="h-screen lg:h-[calc(100vh-56px-56px)] flex justify-center items-start bg-tradeIn bg-no-repeat bg-center bg-cover">
        <CardHeading
          type="black"
          title="Trade In"
          description="Get $180-$620 in credit when you trade in iPhone 11 or higher."
          linkText="See what your device is worth"
          hasAppleIcon
        />
      </div>
    </section>
  );
}

export default CardTradeInSection;
