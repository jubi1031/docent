import { ReactNode } from 'react';
type CheckListProps = {
    children: ReactNode;
};
type CheckItemProps = {
    children: ReactNode;
    onChange?: (checked: boolean) => void;
};
declare const CheckList: {
    ({ children }: CheckListProps): JSX.Element;
    Item: ({ children, onChange }: CheckItemProps) => JSX.Element;
};
export default CheckList;
