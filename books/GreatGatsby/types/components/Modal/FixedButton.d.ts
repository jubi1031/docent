/// <reference types="react" />
declare type FixedButtonProps = {
    disabled: boolean;
    onClick?: (event: React.MouseEvent) => void;
};
declare const FixedButton: ({ disabled, onClick }: FixedButtonProps) => JSX.Element;
export default FixedButton;
