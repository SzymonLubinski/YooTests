
export function RoundPrice (value: number) {
    return Number((Math.round(value * 100) / 100).toFixed(2));
}