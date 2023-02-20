import { ReactNode } from 'react';
declare type CheckListProps = {
    children: ReactNode;
};
declare type CheckItemProps = {
    children: ReactNode;
    onChange?: (checked: boolean) => void;
};
declare const CheckList: {
    ({ children }: CheckListProps): JSX.Element;
    Item: ({ children, onChange }: CheckItemProps) => JSX.Element;
};
export default CheckList;
