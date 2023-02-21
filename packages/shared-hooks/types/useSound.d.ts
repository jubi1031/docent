import type { Howl } from 'howler';
interface SoundProps {
    src: string | string[];
    html5?: boolean;
    loop?: boolean;
    volume?: number;
}
export type ReturnedValue = [
    Howl | null,
    {
        play: () => void;
        pause: () => void;
        stop: () => void;
        skipPrev: () => void;
        skipNext: () => void;
    }
];
declare const useSound: ({ src, html5, volume, loop, ...props }: SoundProps) => ReturnedValue;
export default useSound;
