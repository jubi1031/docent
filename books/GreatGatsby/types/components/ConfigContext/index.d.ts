import { ReactNode } from 'react';
declare type ConfigProviderProps = {
    children: ReactNode;
    initialPage: number;
};
declare const ConfigContext: import("react").Context<any>;
declare const ConfigProvider: ({ children, initialPage }: ConfigProviderProps) => JSX.Element;
export { ConfigContext, ConfigProvider };
