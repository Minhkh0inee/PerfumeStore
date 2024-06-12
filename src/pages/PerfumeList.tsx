import { LayoutGrid, ListFilter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { SelectGroup } from "@radix-ui/react-select";
import ProductCard from "@/components/ProductCard";

const PerfumeList = () => {
  return (
    <>
      {/* Apparal & filter */}
      <section>
        <div className="flex items-center justify-between px-4 montserrat-regular max-w-[900px] mx-auto">
          <div className="flex gap-x-1 items-center text-sm">
            <span>10</span>
            <span>Apparals</span>
          </div>

          <div className="flex items-center gap-x-3">
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="htol">High to Low</SelectItem>
                  <SelectItem value="ltoh">Low to High</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="">
              <LayoutGrid size={18} />
            </div>
            <ListFilter size={18} />
          </div>
        </div>
      </section>

      {/* Perfume List - grid view */}
      <section className="my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 mx-auto max-w-[900px] justify-items-center content-center justify-evenly gap-y-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      {/* Pagination */}
      <section>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </>
  );
};

export default PerfumeList;
