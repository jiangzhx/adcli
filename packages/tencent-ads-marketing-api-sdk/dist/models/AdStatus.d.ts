export declare const AdStatus: {
    readonly NORMAL: "ADSTATUS_NORMAL";
    readonly PENDING: "ADSTATUS_PENDING";
    readonly DENIED: "ADSTATUS_DENIED";
    readonly FROZEN: "ADSTATUS_FROZEN";
    readonly PAY_PENDING: "ADSTATUS_PAY_PENDING";
    readonly PAY_REFUND: "ADSTATUS_PAY_REFUND";
    readonly MANUAL_END: "ADSTATUS_MANUAL_END";
    readonly SUSPEND: "ADSTATUS_SUSPEND";
    readonly WITHDRAW: "ADSTATUS_WITHDRAW";
    readonly INVALID: "ADSTATUS_INVALID";
    readonly TO_BE_STARTED: "ADSTATUS_TO_BE_STARTED";
    readonly ENDED: "ADSTATUS_ENDED";
    readonly PROCESS: "ADSTATUS_PROCESS";
    readonly DRAFT: "ADSTATUS_DRAFT";
    readonly PREPARE: "ADSTATUS_PREPARE";
    readonly DELETED: "ADSTATUS_DELETED";
};
export type AdStatus = typeof AdStatus[keyof typeof AdStatus];
