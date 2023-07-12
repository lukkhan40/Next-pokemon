const toggleFavorite = (id: number): void => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id))
    favorites = favorites.filter((favorite) => favorite !== id);
  else favorites.push(id);

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const getPokemons = (): number[] =>
  JSON.parse(localStorage.getItem("favorites") || "[]");

export default { existInFavorites, getPokemons, toggleFavorite };
