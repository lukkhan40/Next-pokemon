import { FC } from "react";
import Head from "next/head";
import { Navbar } from "@/components/ui";
import { LayoutProps } from "./interfaces";

export const Layout: FC<LayoutProps> = (props) => {
  const { children, title = "Pokemon App" } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Luis Acosta" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta
          property="og:image"
          content="https://next-pokemon-kohl-pi.vercel.app/img/banner.png"
        />
      </Head>
      <Navbar />
      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};
