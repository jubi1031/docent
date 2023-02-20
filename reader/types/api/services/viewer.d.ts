export declare const getHistory: ({ bookSeq }: {
    bookSeq?: string;
}) => Promise<void> | Promise<{
    [key: string]: any;
}>;
export declare const setHistory: ({ bookSeq, location, updated_at }: {
    bookSeq?: string;
    location?: string;
    updated_at?: number;
}) => Promise<void> | Promise<{
    [key: string]: any;
}>;
