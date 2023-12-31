import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemon";
import { PokemonResponse, HomeProps, SmallPokemon } from "@/interfaces";

const Home: NextPage<HomeProps> = (props) => {
  const { pokemons } = props;

  return (
    <Layout title="Listado de pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((result, resultIndex) => ({
    ...result,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      resultIndex + 1
    }.svg`,
    id: resultIndex + 1,
  }));

  return {
    props: { pokemons },
  };
};

export default Home;
