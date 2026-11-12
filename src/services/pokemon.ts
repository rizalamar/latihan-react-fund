import { api } from "../config/api";
import type { PokemonItem, PokemonListResponse } from "../types/pokemon";

export const pokemonService = {
	getPokemons: async (): Promise<PokemonListResponse> => await api.get(`/pokemon`),
	getPokemon: async (): Promise<PokemonItem> => await api.get(`/pokemon/1`),
};
