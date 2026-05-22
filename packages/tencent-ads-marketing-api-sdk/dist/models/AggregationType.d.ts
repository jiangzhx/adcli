export declare const AggregationType: {
    readonly SUM: "SUM";
    readonly MAX: "MAX";
    readonly MIN: "MIN";
    readonly COUNT: "COUNT";
};
export type AggregationType = typeof AggregationType[keyof typeof AggregationType];
