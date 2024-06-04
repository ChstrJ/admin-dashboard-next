import Image from "next/image";
import React from "react";
import Logo from "../../img/logo.png";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { ThemeToggler } from "../components/ThemeToggler";

export default function Navbar() {
  return (
    <nav className="bg-primary dark:bg-slate-700 flex justify-between py-2 px-5 items-center">
      <div className="flex gap-4">
        <h1 className="text-white text-2xl">Admin Dashboard</h1>
      </div>
      <div className="flex items-center">
        <ThemeToggler />

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-black text-md">CJ</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile">
                <User className="inline-block mr-5" size={20} />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/auth">
                <LogOut className="inline-block mr-5" size={20} />
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
