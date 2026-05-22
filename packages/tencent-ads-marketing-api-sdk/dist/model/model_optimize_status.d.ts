export declare const OptimizeStatus: {
    readonly NONE: "OPTIMIZE_STATUS_NONE";
    readonly PENDING: "OPTIMIZE_STATUS_PENDING";
    readonly FINISHED: "OPTIMIZE_STATUS_FINISHED";
};
export type OptimizeStatus = typeof OptimizeStatus[keyof typeof OptimizeStatus];
