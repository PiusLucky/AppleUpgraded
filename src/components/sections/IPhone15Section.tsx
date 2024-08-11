import React from "react";
import CardHeading from "../common/CardHeading";

function IPhone15Section() {
  return (
    <section className="h-screen lg:h-[calc(100vh-56px-56px)] flex justify-center items-start bg-iphone15 bg-no-repeat bg-center bg-cover">
      <CardHeading
        type="black"
        title="iPhone 15"
        description="New camera. New design. Newphoria."
      />
    </section>
  );
}

export default IPhone15Section;
