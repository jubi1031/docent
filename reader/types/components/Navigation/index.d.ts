/// <reference types="react" />
declare type Chapter = {
    title: string;
    page: number;
    depth: number;
};
declare type Chapters = Chapter[];
declare type NavigationProps = {
    isOpen: boolean;
    chapters: Chapters;
    coverPath: string;
    currentPage: number;
    onClose: () => void;
    onChange: (title: string) => void;
};
declare const Navigation: ({ isOpen, chapters, coverPath, currentPage, onClose, onChange }: NavigationProps) => JSX.Element;
export default Navigation;
