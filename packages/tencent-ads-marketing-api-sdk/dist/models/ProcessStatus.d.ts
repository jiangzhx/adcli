export declare const ProcessStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly SUCCESS: "SUCCESS";
    readonly ERROR: "ERROR";
    readonly FROZEN: "FROZEN";
    readonly THAWING: "THAWING";
    readonly LOCKING: "LOCKING";
};
export type ProcessStatus = typeof ProcessStatus[keyof typeof ProcessStatus];
