import { ReactNode } from 'react';
type AppbarProps = {
    isOpen: boolean;
    leading?: ReactNode;
    title?: ReactNode;
    actions?: ReactNode;
};
declare const Appbar: ({ isOpen, leading, title, actions }: AppbarProps) => JSX.Element;
export default Appbar;
