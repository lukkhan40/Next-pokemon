import NextLink from "next/link";
import Image from "next/image";
import { Spacer, Text, useTheme } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icono de la aplicacion"
        width={70}
        height={70}
      />
      <NextLink
        href="/"
        passHref
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okemon
        </Text>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Text color="white ">Favoritos</Text>
      </NextLink>
    </div>
  );
};
