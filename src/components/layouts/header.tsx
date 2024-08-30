"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import React from "react";
import PageTitle from "./page-title";

function Header() {
  return (
    <div className="flex h-20 w-full items-center justify-between p-5">
      <PageTitle />

      {/* Profile Avatar */}
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Profile Actions"
          variant="flat"
          disabledKeys={["profile"]}
        >
          <DropdownSection aria-label="Profile zone">
            <DropdownItem
              isReadOnly
              key="profile"
              className="h-14 gap-2 opacity-80"
            >
              <p className="font-semibold">Zoey</p>
              <p className="text-sm">zoey@example.com</p>
            </DropdownItem>
          </DropdownSection>
          <DropdownItem key="settings">Settings</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Header;
