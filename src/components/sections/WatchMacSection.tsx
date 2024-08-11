import React from "react";
import CardHeading from "../common/CardHeading";

function WatchMacSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="h-screen lg:h-[calc(100vh-56px-56px)] flex justify-center items-start bg-watch bg-no-repeat bg-center bg-cover">
        <CardHeading
          type="white"
          imageHeadingUrl="/images/watch_heading.svg"
          description="Smarter. Brighter. Mightier."
        />
      </div>
      <div className="h-screen lg:h-[calc(100vh-56px-56px)] flex justify-center items-start bg-macbookPro bg-no-repeat bg-center bg-cover">
        <CardHeading
          type="black"
          title="MacBook Pro"
          description="Mind-blowing. Head-turning."
        />
      </div>
    </section>
  );
}

export default WatchMacSection;
