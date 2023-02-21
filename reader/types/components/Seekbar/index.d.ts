/// <reference types="react" />
type SeekbarProps = {
    isOpen: boolean;
    value: number;
    max: number;
    onChange?: (value: number, max: number) => void;
};
declare const Seekbar: ({ isOpen, value, max, onChange }: SeekbarProps) => JSX.Element;
export default Seekbar;
