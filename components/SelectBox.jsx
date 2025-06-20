"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectBox = function () {
  return (
    <div className="w-[220px]" disable="true">
      <Select onValueChange={(value) => console.log("Selected:", value)}>
        <SelectTrigger className="w-full px-4 py-2 rounded-full border border-b-light focus:outline-none bg-white text-sm font-medium text-black">
          <SelectValue placeholder="Geist Sans" />
        </SelectTrigger>

        <SelectContent className="rounded-md border border-gray-200 shadow-md bg-white">
          <SelectItem value="satoshi">Geist Sans</SelectItem>
          <SelectItem value="inter">PP Neue Machina</SelectItem>
          <SelectItem value="roboto">PP Argandir</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectBox;
