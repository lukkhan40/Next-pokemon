import { useState, useEffect } from "react";
import { localFavorites } from "@/utils";
import { Layout } from "@/components/layouts";
import { FavoritePokemons } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.getPokemons());
  }, []);

  return (
    <Layout title="Pokemons Favoritos">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favorites={favorites} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
