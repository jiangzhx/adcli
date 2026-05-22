export declare const BatchOperationType: {
    readonly DATE: "OPERATION_TYPE_DATE";
    readonly TIME_SERIES: "OPERATION_TYPE_TIME_SERIES";
    readonly CONFIGURED_STATUS: "OPERATION_TYPE_CONFIGURED_STATUS";
};
export type BatchOperationType = typeof BatchOperationType[keyof typeof BatchOperationType];
