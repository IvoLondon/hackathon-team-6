import React, { useEffect } from "react";
import SearchInput from "@vfuk/core-search-input";

const CustomSearchInput = (props: any) => {
  return (
    <SearchInput
      textInput={{
        value: props.text,
        onChange: (e: any) => props.setText(e.target.value),
        id: "search-input",
      }}
      fieldWrapper={{
        width: "full",
        label: "Search",
        showLabel: false,
      }}
      onClear={() => props.setText("")}
      searchIconButton={{ onClick: props.handleAskClick }}
    />
  );
};

export default CustomSearchInput;
