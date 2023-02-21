import { ReactNode } from 'react';
type CharacterProps = {
    children?: ReactNode;
};
type NameProps = {
    children?: ReactNode;
};
type TextProps = {
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
