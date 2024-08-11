import React from "react";

interface IProp {
  title: string;
  options: string[];
}
function FooterBlock({ title, options }: IProp) {
  return (
    <div>
      <p className="font-medium text-customBlack">{title}</p>

      <div className="flex flex-col gap-4 mt-[9px]">
        {options.map((opt, index) => (
          <p
            className="text-black/70 hover:cursor-pointer hover:text-link"
            key={index}
          >
            {opt}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FooterBlock;
