import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./";

interface Props {
  favorites: number[];
}

export const FavoritePokemons: FC<Props> = ({ favorites }) => (
  <Grid.Container gap={2} direction="row" justify="flex-start">
    {favorites.map((favorite) => (
      <FavoriteCardPokemon key={favorite} favorite={favorite} />
    ))}
  </Grid.Container>
);
