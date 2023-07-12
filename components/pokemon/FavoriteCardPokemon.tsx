import { FC } from "react";
import { useRouter } from "next/router";
import { Grid, Card } from "@nextui-org/react";

interface Props {
  favorite: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ favorite }) => {
  const router = useRouter();

  const onFavoriteClick = (): Promise<boolean> =>
    router.push(`/pokemon/${favorite}`);

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={favorite} onClick={onFavoriteClick}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${favorite}.svg`}
          alt={`pokemon #${favorite}`}
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};
