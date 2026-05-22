export declare const OperationType: {
    readonly CREATE: "CREATE";
    readonly DELETE: "DELETE";
    readonly APPEND: "APPEND";
    readonly REDUCE: "REDUCE";
};
export type OperationType = typeof OperationType[keyof typeof OperationType];
