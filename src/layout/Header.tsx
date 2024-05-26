import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { List } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex flex-row justify-between py-4 px-5 bg-transparent">
      {/* img */}
      <div className="">
        <div>Logo</div>
      </div>

      {/* nav link - desktop mode*/}
      <div className="hidden">
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
      </div>

      {/* login & cart - destop & tablet mode*/}
      <div className="hidden">
        <div>Cart</div>
        <div>Login</div>
      </div>

      {/* login & cart - mobile mode*/}
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <List />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Header;
