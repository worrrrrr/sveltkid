import type { ReadOnlyFormData } from "@sveltejs/kit";

type Incoming = {
    method: string;
    host: string;
    headers: Headers;
    path: string;
    query: URLSearchParams;
    body: string | Buffer | ReadOnlyFormData;
};

type GetContext<Context = any> = {
    (incoming: Incoming): Context;
};
