import { ReactNode } from 'react';
type CommentaryProps = {
    children?: ReactNode;
};
type CommentaryHeaderProps = {
    children?: ReactNode;
};
type CommentaryBodyProps = {
    children?: ReactNode;
};
type CommentaryFeaturesProps = {
    src: string;
    isCover?: boolean;
};
declare const Commentary: {
    ({ children }: CommentaryProps): JSX.Element;
    Header: ({ children }: CommentaryHeaderProps) => JSX.Element;
    Body: ({ children }: CommentaryBodyProps) => JSX.Element;
    Features: ({ src, isCover }: CommentaryFeaturesProps) => JSX.Element;
    TextDecoration: import("styled-components").StyledComponent<"span", any, {}, never>;
    Quote: import("styled-components").StyledComponent<"span", any, {}, never>;
};
export default Commentary;
