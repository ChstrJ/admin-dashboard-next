import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import {
  LayoutDashboard,
  Newspaper,
  CreditCard,
  User,
  Settings,
  Folders,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-[100vh]">
      <Command className="">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/">Dashboard</Link>
            </CommandItem>
            <CommandItem>
              <Newspaper className="mr-2 h-4 w-4" />
              <Link href="/posts">Post</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/">Categories</Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
