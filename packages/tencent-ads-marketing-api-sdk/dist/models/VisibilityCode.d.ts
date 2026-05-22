export declare const VisibilityCode: {
    readonly UNKNOWN: "VISIBILITY_CODE_UNKNOWN";
    readonly INSERT_READY: "VISIBILITY_CODE_INSERT_READY";
    readonly INSERTED: "VISIBILITY_CODE_INSERTED";
    readonly NOT_APPROVED: "VISIBILITY_CODE_NOT_APPROVED";
    readonly NOT_BEGINTIME: "VISIBILITY_CODE_NOT_BEGINTIME";
    readonly DIFFERENT_CORPORATION: "VISIBILITY_CODE_DIFFERENT_CORPORATION";
};
export type VisibilityCode = typeof VisibilityCode[keyof typeof VisibilityCode];
