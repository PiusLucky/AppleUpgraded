import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";

interface IProp {
  type: "white" | "black";
  imageHeadingUrl?: string;
  title?: string;
  description: string;
  paddingTop?: string;
  linkText?: string;
  hasAppleIcon?: boolean;
}

function CardHeading({
  type,
  imageHeadingUrl,
  title,
  description,
  paddingTop,
  linkText,
  hasAppleIcon,
}: IProp) {
  return (
    <div>
      {imageHeadingUrl && (
        <div className={cn("mt-[55px]", paddingTop ? paddingTop : "")}>
          <div>
            <img src={imageHeadingUrl} alt="heading" />
          </div>
          <div className="flex flex-col items-center pb-[84px]  md:pb-[54px] px-4 text-center leading-tight">
            <p
              className={cn(
                "text-[28px] ",
                type === "white" ? "text-customWhite" : "text-customBlack"
              )}
            >
              {description}
            </p>

            <div className="flex gap-4 mt-2">
              <div className="flex gap-1 items-center hover:cursor-pointer">
                <p className="text-link">Learn more </p>
                <ChevronRight className="text-link" size={18} />
              </div>
              <div className="flex gap-1 items-center hover:cursor-pointer">
                <p className="text-link">Buy </p>
                <ChevronRight className="text-link" size={18} />
              </div>
            </div>
          </div>
        </div>
      )}

      {title && (
        <div className={cn("mt-[55px]", paddingTop ? paddingTop : "")}>
          <div className="text-center">
            <div
              className={cn(
                " font-bold text-[54px]",
                type === "white" ? "text-customWhite" : "text-customBlack",
                "flex items-centergap-2 justify-center"
              )}
            >
              {hasAppleIcon && (
                <img
                  src="/images/apple_icon_black.svg"
                  className="w-[40px]"
                  alt="apple black"
                />
              )}
              <p>{title}</p>
            </div>
          </div>
          <div className="flex flex-col items-center pb-[84px]  md:pb-[54px] px-4 text-center leading-tight">
            <p
              className={cn(
                "text-[28px]",
                type === "white" ? "text-customWhite" : "text-customBlack"
              )}
            >
              {description}
            </p>

            {linkText && (
              <div className="flex gap-4 mt-2 justify-center">
                <div className="flex gap-1 items-center hover:cursor-pointer">
                  <p className="text-link">{linkText} </p>
                  <ChevronRight className="text-link" size={18} />
                </div>
              </div>
            )}

            {!linkText && (
              <div className="flex gap-4 mt-2">
                <div className="flex gap-1 items-center hover:cursor-pointer">
                  <p className="text-link">Learn more </p>
                  <ChevronRight className="text-link" size={18} />
                </div>
                <div className="flex gap-1 items-center hover:cursor-pointer">
                  <p className="text-link">Buy </p>
                  <ChevronRight className="text-link" size={18} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CardHeading;
