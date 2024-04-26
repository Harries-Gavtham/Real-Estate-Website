import React, { useContext, useState } from "react";
import { HouseContext } from "./HouseContext";
import { Menu } from "@headlessui/react";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiWallet3Line,
} from "react-icons/ri";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState("false");

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 130000",
    },
    
  ]

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div className="">
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className="text-[13px]">Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
