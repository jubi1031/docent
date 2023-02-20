import { ReactNode } from 'react';
declare type CharacterProps = {
    children?: ReactNode;
};
declare type NameProps = {
    children?: ReactNode;
};
declare type TextProps = {
    children?: ReactNode;
};
declare const Character: {
    ({ children }: CharacterProps): JSX.Element;
    Thumb: ({ src }: {
        src?: string;
    }) => JSX.Element;
    Name: ({ children }: NameProps) => JSX.Element;
    Text: ({ children }: TextProps) => JSX.Element;
};
export default Character;
