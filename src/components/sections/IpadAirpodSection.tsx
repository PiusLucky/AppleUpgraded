import React from "react";
import CardHeading from "../common/CardHeading";

function IpadAirpodSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="h-screen lg:h-[calc(100vh-56px-56px)] flex justify-center items-start bg-iPad bg-no-repeat bg-center bg-cover">
        <CardHeading
          type="black"
          title="iPad"
          description="Lovable. Drawable. Magical."
        />
      </div>
      <div className="h-screen lg:h-[calc(100vh-56px-56px)] flex justify-center items-start bg-airPodPro bg-no-repeat bg-center bg-cover">
        <CardHeading
          type="white"
          title="AirPods Pro"
          description="Adaptive Audio. Now playing."
        />
      </div>
    </section>
  );
}

export default IpadAirpodSection;
