import { pokeApi } from "@/api";
import { PokemonFullResponse } from "@/interfaces";

export const getPokemon = async (key: string) => {
  const { data } = await pokeApi.get<PokemonFullResponse>(`/pokemon/${key}`);
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
