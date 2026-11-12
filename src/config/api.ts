import { create } from "axios";

export const api = create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	(config) => config,
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	(response) => {
		//console.log("Isi response dari axios:", response);
		return response;
	},
	(error) => {
		console.error(`API Error: `, error.response.data);
		return Promise.reject(error);
	}
);
