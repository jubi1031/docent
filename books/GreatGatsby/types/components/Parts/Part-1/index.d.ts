/// <reference types="react" />
declare const Part1s: (string | (({ isCurrentPage, ref }: {
    isCurrentPage?: boolean;
    ref?: import("react").Ref<HTMLDivElement>;
}) => JSX.Element) | (({ isCurrentPage }: {
    isCurrentPage: boolean;
}) => JSX.Element))[];
export default Part1s;
