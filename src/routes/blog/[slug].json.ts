import db from '$lib/database';
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = params;

	const article = await db.get(slug);

	if (article) {
		return {
			body: {
				article
			}
		};
	}
}


type Request<Context = any> = {
	host: string;
	method: 'GET';
	headers: Record<string, string>;
	path: string;
	params: Record<string, string | string[]>;
	query: URLSearchParams;
	body: string | Buffer | ReadOnlyFormData;
	context: Context; // see getContext, below
};

type Response = {
	status?: number;
	headers?: Record<string, string>;
	body?: any;
};

type RequestHandler<Context = any> = {
	(request: Request<Context>) => Response | Promise<Response>;
}

