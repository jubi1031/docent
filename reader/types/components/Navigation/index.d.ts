/// <reference types="react" />
type Chapter = {
    title: string;
    page: number;
    depth: number;
};
type Chapters = Chapter[];
type NavigationProps = {
    isOpen: boolean;
    chapters: Chapters;
    coverPath: string;
    currentPage: number;
    onClose: () => void;
    onChange: (title: string) => void;
};
declare const Navigation: ({ isOpen, chapters, coverPath, currentPage, onClose, onChange }: NavigationProps) => JSX.Element;
export default Navigation;
