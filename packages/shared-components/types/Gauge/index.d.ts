/// <reference types="react" />
type GaugeProps = {
    value: number;
    max: number;
    tootip: boolean;
    gradient?: string;
    onChange: (value: number) => void;
};
declare const Gauge: ({ value, max, tootip, gradient, onChange }: GaugeProps) => JSX.Element;
export default Gauge;
