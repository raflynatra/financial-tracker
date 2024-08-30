"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

function AccountList() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="mt-5 rounded-lg">
      <Accordion
        defaultSelectedKeys="all"
        selectionMode="multiple"
        itemClasses={{
          content: "border-t-2 border-gray-700",
          title: "font-semibold",
          trigger: "data-[focus-visible=true]:outline-0",
        }}
        hideIndicator
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={
            <div className="flex w-full justify-between">
              <span>Cash</span>
              <span className="text-blue-400">IDR 150.000</span>
            </div>
          }
        >
          <ul className="text-gray-300">
            <li className="flex w-full justify-between py-2">
              <span>Cash</span>
              <span className="text-blue-400">IDR 150.000</span>
            </li>
            <li className="flex w-full justify-between py-2">
              <span>Cash</span>
              <span className="text-blue-400">IDR 150.000</span>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>

      {/* <Accordion variant="shadow">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={
            <div className="flex w-full justify-between">
              <span>Cash</span>
              <span className="text-blue-400">IDR 150.000</span>
            </div>
          }
          hideIndicator
        >
          <ul>
            <li className="flex w-full justify-between py-2">
              <span>Cash</span>
              <span className="text-blue-400">IDR 150.000</span>
            </li>
            <li className="flex w-full justify-between py-2">
              <span>Cash</span>
              <span className="text-blue-400">IDR 150.000</span>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 1"
          className="mt-5"
          title={
            <div className="flex w-full justify-between">
              <span>Cash</span>
              <span className="text-blue-400">IDR 150.000</span>
            </div>
          }
          hideIndicator
        >
          <ul>
            <li className="flex w-full justify-between py-2">
              <span>Cash</span>
              <span className="text-blue-400">IDR 150.000</span>
            </li>
            <li className="flex w-full justify-between py-2">
              <span>Cash</span>
              <span className="text-blue-400">IDR 150.000</span>
            </li>
          </ul>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
}

export default AccountList;
