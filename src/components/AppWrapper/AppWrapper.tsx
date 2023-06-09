import React from "react";
import Ws10Theme from "@vfuk/core-theme-ws10";
import { ThemeProvider } from "styled-components";
import i18n from "i18next";
import { english } from "@vfuk/core-language-packs";
import { initReactI18next, I18nextProvider } from "react-i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";
import * as Styled from "./styled";

i18n
  .use(initReactI18next)
  .use(intervalPlural)
  .init({
    resources: {
      en: {
        translation: english,
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

Ws10Theme.setBaseAssetLocation("/assets/");
// Ws10Theme.setAssetLocations("icons", "/assets/icons");
// Ws10Theme.setAssetLocations("fonts", "/fonts");

const AppWrapper = (props: any) => {
  return (
    <ThemeProvider theme={Ws10Theme}>
      <I18nextProvider i18n={i18n}>
        <Styled.StyledWrapper>{props.children}</Styled.StyledWrapper>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default AppWrapper;
