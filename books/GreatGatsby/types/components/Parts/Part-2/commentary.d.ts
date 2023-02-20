import { ReactNode } from 'react';
declare type CommentaryProps = {
    children?: ReactNode;
};
declare type CommentaryHeaderProps = {
    children?: ReactNode;
};
declare type CommentaryBodyProps = {
    children?: ReactNode;
};
declare type CommentaryFeaturesProps = {
    src: string;
};
declare const Commentary: {
    ({ children }: CommentaryProps): JSX.Element;
    Header: ({ children }: CommentaryHeaderProps) => JSX.Element;
    Body: ({ children }: CommentaryBodyProps) => JSX.Element;
    Features: ({ src }: CommentaryFeaturesProps) => JSX.Element;
    TextDecoration: import("styled-components").StyledComponent<"span", any, {}, never>;
    Quote: import("styled-components").StyledComponent<"span", any, {}, never>;
};
export default Commentary;
