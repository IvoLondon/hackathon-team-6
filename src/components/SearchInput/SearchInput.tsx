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
    if (svg)
      svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  width="30" height="30"
  viewBox="0,0,256,256"
  style="fill:#000000;">
  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-3.52931,0 -6.30245,1.01288 -7.8457,3.4668c0,0.00065 0,0.0013 0,0.00195c-0.73896,1.1755 -0.98635,2.54812 -1.0957,3.64258c-0.09522,0.95299 -0.05753,1.51353 -0.04883,1.69727l-0.86719,2.60156c-0.57819,0.33595 -2.14258,1.35199 -2.14258,3.58984c0,2.14999 1.41556,3.13737 2.05859,3.52734c0.01371,0.24113 -0.00121,0.35725 0.08594,0.79297c0.14511,0.72557 0.41274,1.65102 1.14844,2.38672c1.27884,1.27884 3.55729,2.29297 5.89063,2.29297c1.13266,0 1.94138,-0.46447 2.53125,-1h0.57031c0.58987,0.53553 1.39859,1 2.53125,1c2.33333,0 4.61179,-1.01413 5.89063,-2.29297c0.7357,-0.7357 1.00332,-1.66115 1.14844,-2.38672c0.08714,-0.43572 0.07223,-0.55184 0.08594,-0.79297c0.64303,-0.38998 2.05859,-1.37736 2.05859,-3.52734c0,-2.23785 -1.56439,-3.25389 -2.14258,-3.58984l-0.86719,-2.60156c0.0087,-0.18373 0.04639,-0.74428 -0.04883,-1.69727c-0.10935,-1.09446 -0.35675,-2.46708 -1.0957,-3.64258c0,-0.00065 0,-0.0013 0,-0.00195c-1.54325,-2.45392 -4.31639,-3.4668 -7.8457,-3.4668zM15,5c3.17869,0 5.03355,0.75112 6.1543,2.5332c0.23812,0.37928 0.28847,0.94819 0.42188,1.4668h-13.15234c0.13341,-0.51861 0.18376,-1.08751 0.42188,-1.4668c1.12075,-1.78209 2.97561,-2.5332 6.1543,-2.5332zM8.02734,11h0.90039c-0.13915,0.11628 -0.23437,0.26049 -0.23437,0.46289c0,1 0.30664,2.53711 1.30664,2.53711c0.679,0 4,-1.94489 4,-2.71289c0,-0.10119 -0.14614,-0.1974 -0.35352,-0.28711h2.70703c-0.20738,0.08971 -0.35352,0.18592 -0.35352,0.28711c0,0.768 3.321,2.71289 4,2.71289c1,0 1.30664,-1.53711 1.30664,-2.53711c0,-0.2024 -0.09522,-0.34661 -0.23437,-0.46289h0.90039c0.0059,0.37442 0.0293,0.93945 0.0293,0.93945c-0.00797,0.12762 0.0086,0.25558 0.04883,0.37695l1,3c0.08401,0.25166 0.26457,0.45963 0.50195,0.57813c0,0 0.26674,0.1623 0.56055,0.41602c-2.0106,0.67283 -2.97461,2.18359 -2.97461,2.18359c-0.20232,0.30865 -0.21823,0.70363 -0.04137,1.02755c0.17686,0.32391 0.51772,0.52411 0.88676,0.52079c0.36904,-0.00331 0.70626,-0.20959 0.87727,-0.53663c0,0 0.55155,-1.03235 2.125,-1.39844c-0.07758,1.26435 -1.43359,1.99805 -1.43359,1.99805c-0.33878,0.16944 -0.55276,0.51574 -0.55273,0.89453c0,0 -0.00058,0.40526 -0.10547,0.92969c-0.10488,0.52443 -0.33727,1.09898 -0.60156,1.36328c-0.70743,0.70743 -2.72885,1.66478 -4.37891,1.70117l-0.29102,-0.49805c-0.1376,-0.23599 -0.36405,-0.3986 -0.62305,-0.46289v-1.0332c0,-0.4584 -0.31543,-0.82931 -0.73633,-0.94727l-0.07422,-0.29492c-0.111,-0.445 -0.5117,-0.75781 -0.9707,-0.75781h-0.4375c-0.459,0 -0.8597,0.31281 -0.9707,0.75781l-0.07422,0.29492c-0.4209,0.11795 -0.73633,0.48887 -0.73633,0.94727v1.0332c-0.259,0.06429 -0.48545,0.2269 -0.62305,0.46289l-0.29101,0.49805c-1.65006,-0.03639 -3.67148,-0.99374 -4.37891,-1.70117c-0.2643,-0.2643 -0.49668,-0.83885 -0.60156,-1.36328c-0.10489,-0.52443 -0.10547,-0.92969 -0.10547,-0.92969c0.00003,-0.37879 -0.21395,-0.72509 -0.55273,-0.89453c0,0 -1.35602,-0.7337 -1.43359,-1.99805c1.57346,0.36608 2.125,1.39844 2.125,1.39844c0.17101,0.32704 0.50823,0.53331 0.87727,0.53662c0.36904,0.00331 0.7099,-0.19688 0.88676,-0.52079c0.17686,-0.32391 0.16095,-0.7189 -0.04137,-1.02755c0,0 -0.96401,-1.51076 -2.97461,-2.18359c0.29381,-0.25372 0.56055,-0.41602 0.56055,-0.41602c0.23738,-0.1185 0.41794,-0.32646 0.50195,-0.57812l1,-3c0.04022,-0.12137 0.0568,-0.24934 0.04883,-0.37695c0,0 0.02345,-0.56503 0.0293,-0.93945zM15,15c-0.998,0.001 -1.69691,0.48256 -2.25391,0.97656c-0.567,0.479 -0.98555,0.99917 -1.31055,1.07617l-0.07617,0.01758c-0.251,0.06 -0.4057,0.31345 -0.3457,0.56445c0.048,0.204 0.22288,0.34342 0.42188,0.35742c0.502,0.035 0.92909,-0.16903 1.24609,-0.33203c0.324,-0.171 0.96831,-0.65916 2.32031,-0.66016c1.352,0 1.99631,0.48916 2.32031,0.66016c0.318,0.163 0.74409,0.36703 1.24609,0.33203c0.199,-0.014 0.37387,-0.15342 0.42188,-0.35742c0.059,-0.252 -0.09566,-0.50545 -0.34766,-0.56445l-0.07422,-0.01758c-0.325,-0.077 -0.7455,-0.59717 -1.3125,-1.07617c-0.557,-0.494 -1.25395,-0.97456 -2.25195,-0.97656h-0.00195zM10,21c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM20,21c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1z"></path></g></g>
  </svg>`;
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
