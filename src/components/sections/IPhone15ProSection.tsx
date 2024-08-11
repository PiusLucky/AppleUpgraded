import React from "react";
import CardHeading from "../common/CardHeading";

function IPhone15ProSection() {
  return (
    <section className="h-screen lg:h-[calc(100vh-56px-56px)] flex justify-center items-start bg-iphone15pro bg-no-repeat bg-center bg-cover">
      <CardHeading
        type="white"
        title="iPhone 15 Pro"
        description="Titanium. So strong. So light. So Pro."
      />
    </section>
  );
}

export default IPhone15ProSection;
