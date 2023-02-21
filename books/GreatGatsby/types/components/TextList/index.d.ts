import { ReactNode } from 'react';
type CheckListProps = {
    label?: string;
    children: ReactNode;
};
type CheckItemProps = {
    children: ReactNode;
    onChange?: (checked: boolean) => void;
};
declare const CheckList: {
    ({ label, children }: CheckListProps): JSX.Element;
    Item: ({ children, onChange }: CheckItemProps) => JSX.Element;
};
export default CheckList;
