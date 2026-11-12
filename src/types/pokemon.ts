export interface PokemonItem {
	name: string;
	url: string;
}

export interface PokemonListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonItem[];
}

export interface PokemonDetail {
	id: number;
	name: string;
	sprites: {
		front_default: string;
		other: {
			"official-artwork": {
				front_default: string;
			};
		};
	};
}
