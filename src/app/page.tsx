import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { ThemeProvider } from "styled-components";
import themeWS10 from "@vfuk/core-theme-ws10";
import SimpleBadge from "@vfuk/core-simple-badge";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeProvider theme={themeWS10}>
      <main className={styles.main}>
        <h1>Team 6</h1>
        <SimpleBadge />
      </main>
    </ThemeProvider>
  );
}
