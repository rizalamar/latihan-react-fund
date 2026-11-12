import { api } from "../config/api";
import type { PokemonDetail, PokemonListResponse } from "../types/pokemon";

export const pokemonService = {
	getPokemons: async (): Promise<PokemonListResponse> => await api.get(`/pokemon`),
	getPokemon: async (idOrName: string | number): Promise<PokemonDetail> => {
		return await api.get(`/pokemon/${idOrName}`);
	},
};
