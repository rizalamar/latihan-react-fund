import { api } from "../config/api";
import type { PokemonDetail, PokemonListResponse } from "../types/pokemon";

export const pokemonService = {
	getPokemons: async (offset: number, limit: number = 20): Promise<PokemonListResponse> =>
		await api.get(`/pokemon?offset=${offset}&limit=${limit}`),
	getPokemon: async (idOrName: string | number): Promise<PokemonDetail> => {
		return await api.get(`/pokemon/${idOrName}`);
	},
};
