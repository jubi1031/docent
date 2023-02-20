import { ReactNode } from 'react';
declare type CheckListProps = {
    label?: string;
    children: ReactNode;
};
declare type CheckItemProps = {
    children: ReactNode;
    onChange?: (checked: boolean) => void;
};
declare const CheckList: {
    ({ label, children }: CheckListProps): JSX.Element;
    Item: ({ children, onChange }: CheckItemProps) => JSX.Element;
};
export default CheckList;
