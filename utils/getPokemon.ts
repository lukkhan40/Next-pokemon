import { pokeApi } from "@/api";
import { PokemonFullResponse, PokemonMin } from "@/interfaces";

export const getPokemon = async (key: string): Promise<PokemonMin | null> => {
  try {
    const { data } = await pokeApi.get<PokemonFullResponse>(`/pokemon/${key}`);
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};
