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

export interface PokemonSprites {
	front_default: string;
	other: {
		"official-artwork": {
			front_default: string;
		};
	};
}

export interface PokemonStats {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
}

export interface PokemonTypes {
	slot: number;
	type: {
		name: string;
		url: string;
	};
}

export interface PokemonDetail {
	id: number;
	name: string;
	height: number;
	weight: number;
	sprites: PokemonSprites;
	stats: PokemonStats[];
	types: PokemonTypes[];
}
