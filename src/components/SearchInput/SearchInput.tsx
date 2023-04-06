import React, { useEffect } from "react";
import SearchInput from "@vfuk/core-search-input";

function modifyStyles() {
  // select a dom element by data attribute
  const searchInput = document.querySelector(
    '[data-custom-name="SearchInputWithIcon"]'
  );
  if (searchInput) {
    // select svg icon in searchInput
    const svg = searchInput.querySelector(`[data-component-name="IconButton"]`);
    // change svg icon
    if (svg) svg.innerHTML = "ask";
  }
}

const CustomSearchInput = (props: any) => {
  useEffect(() => {
    modifyStyles();
  }, []);
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
      dataAttributes={{ "data-custom-name": "SearchInputWithIcon" }}
      searchIconButton={{ onClick: props.handleAskClick }}
    />
  );
};

export default CustomSearchInput;
