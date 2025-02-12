import React from "react";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";

const BillsFilters = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
      <div className="w-full">
        <SearchBar/>
      </div>
      <div className="flex items-center gap-4">
        <FilterButton buttonText="ترتيب حسب" />
        <FilterButton buttonText="نوع المسابقة" />
        <FilterButton buttonText="كل الشركات" />
      </div>
    </div>
  );
};

export default BillsFilters;
