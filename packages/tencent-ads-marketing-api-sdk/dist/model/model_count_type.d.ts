export declare const CountType: {
    readonly TIMES: "BY_TIMES";
    readonly DAY: "BY_DAY";
};
export type CountType = typeof CountType[keyof typeof CountType];
