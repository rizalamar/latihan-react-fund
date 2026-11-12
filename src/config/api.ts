import { create } from "axios";

export const api = create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
