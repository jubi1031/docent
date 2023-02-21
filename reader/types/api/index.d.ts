type RequestProps = {
    url: string;
    method?: string;
    headers?: {
        [key: string]: string;
    };
    body?: {
        [key: string]: any;
    };
};
export declare const config: {
    sessionId: string;
};
export declare const camelCased: (items: any[]) => {
    [key: string]: any;
}[];
export declare const request: ({ url, method, headers, body }: RequestProps) => Promise<void> | Promise<{
    [key: string]: any;
}>;
export {};
