import React from "react";
import { Separator } from "@/components/ui/separator";
import FooterBlock from "../common/FooterBlock";

function FooterSection() {
  const shopLearnData = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "AirTag",
    "Accessories",
    "Gift Cards",
  ];

  const appleWalletData = ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"];

  const accountData = [
    "Manage Your Apple ID",
    "Apple Store Account",
    "iCloud.com",
  ];

  const entertainmentData = [
    "Apple One",
    "Apple TV+",
    "Apple Music",
    "Apple Arcade",
    "Apple Fitness+",
    "Apple News+",
    "Apple Podcasts",
    "Apple Books",
    "App Store",
  ];

  const appleStoreData = [
    "Find a Store",
    "Genius Bar",
    "Today at Apple",
    "Apple Camp",
    "Apple Store App",
    "Certified Refurbished",
    "Apple Trade In",
    "Financing",
    "Carrier Deals at Apple",
    "Order Satus",
    "Shopping Help",
  ];

  const forBusinessData = ["Apple and Business", "Shop for Business"];

  const forEducationData = [
    "Apple and Education",
    "Ahop for K-12",
    "Shop for College",
  ];

  const forHealthcareData = [
    "Apple in Healthcare",
    "Health on Apple Watch",
    "Health ecords on iPhone",
  ];

  const forGovernmentData = [
    "Shop for Government",
    "Shop for Veterans and Military",
  ];

  const appleValuesData = [
    "Accessibility",
    "Education",
    "Environment",
    "Inclusion and Diversity",
    "Privacy",
    "Racial Equity and Justice",
    "Supplier Responsibility",
  ];

  const aboutAppleData = [
    "Newsroom",
    "Apple Leadership",
    "Career Opportunities",
    "Investors",
    "Ethis & Compliance",
    "Events",
    "Contact Apple",
  ];

  return (
    <section className="pb-16 px-4 md:px-[100px]">
      <div className="text-customBlack">
        1. Trade-in values will vary based on the condition, year, and
        configuration of your eligible trade-in device. Not all devices are
        eligible for credit. You must be at least 18 years old to be eligible to
        trade in for credit or for an Apple Gift Card. Trade-in value may be
        applied toward qualifying new device purchase, or added to an Apple Gift
        Card. Actual value awarded is based on receipt of a qualifying device
        matching the description provided when estimate was made. Sales tax may
        be assessed on full value of a new device purchase. In-store trade-in
        requires presentation of a valid photo ID local law may require saving
        this information. Offer may not be available in all stores, and may vary
        between in-store and online trade-in. Some stores may have additional
        requirements. Apple or its trade-in partners reserve the right to refuse
        or limit quantity of any trade-in transaction for any reason. More
        details are available from Apple&apos;s trade-in partner for trade-in
        and recycling of eligible devices. Restrictions and limitations may
        apply. Available in the U.S. on apple.com, in the Apple Store app, and
        at Apple Stores. To access and use all Apple Card features and products
        available only to Apple Card users, you must add Apple Card to Wallet on
        an iPhone or iPad that supports and has the latest version of iOS or
        iPadOS. Apple Card is subject to credit approval, available only for
        qualifying applicants in the United States, and issued by Goldman Sachs
        Bank USA, Salt Lake City Branch. If you reside in the U.S. territories,
        please call Goldman Sachs at 877-255-5923 with questions about Apple
        Card. Learn more about how Apple Card applications are evaluated at
        support.apple.com/kb/HT209218. A subscription is required for Apple TV+.
      </div>

      <div className="my-8">
        <Separator />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between gap-8">
        <div className="flex flex-col gap-8">
          <FooterBlock title="Shop and Learn" options={shopLearnData} />
          <FooterBlock title="Apple Wallet" options={appleWalletData} />
        </div>
        <div className="flex flex-col gap-8">
          <FooterBlock title="Account" options={accountData} />
          <FooterBlock title="Entertainment" options={entertainmentData} />
        </div>
        <div className="flex flex-col gap-8">
          <FooterBlock title="Apple Store" options={appleStoreData} />
        </div>
        <div className="flex flex-col gap-8">
          <FooterBlock title="For Business" options={forBusinessData} />
          <FooterBlock title="For Education" options={forEducationData} />
          <FooterBlock title="For Healthcare" options={forHealthcareData} />
          <FooterBlock title="For Government" options={forGovernmentData} />
        </div>
        <div className="flex flex-col gap-8">
          <FooterBlock title="Apple Values" options={appleValuesData} />
          <FooterBlock title="About Apple" options={aboutAppleData} />
        </div>
      </div>

      <div className="mt-[37px]">
        <p>
          More ways to shop:{" "}
          <span className="udnerline text-link">Find an Apple Store</span> or
          <span className="udnerline text-link">&nbsp;other retailer</span> near
          you. Or call 1-800-MY-APPLE.
        </p>
      </div>

      <div className="my-8">
        <Separator />
      </div>

      <div className="flex justify-between">
        <p className="text-customBlack">
          Copyright © 2024 Apple Inc. All rights reserved.
        </p>

        <p className="text-customBlack">United States</p>
      </div>
    </section>
  );
}

export default FooterSection;
