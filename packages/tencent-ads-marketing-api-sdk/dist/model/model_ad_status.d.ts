export declare const AdStatus: {
    readonly NORMAL: "AD_STATUS_NORMAL";
    readonly PENDING: "AD_STATUS_PENDING";
    readonly DENIED: "AD_STATUS_DENIED";
    readonly FROZEN: "AD_STATUS_FROZEN";
    readonly PARTIALLY_PENDING: "AD_STATUS_PARTIALLY_PENDING";
    readonly PARTIALLY_NORMAL: "AD_STATUS_PARTIALLY_NORMAL";
    readonly SUSPEND: "AD_STATUS_SUSPEND";
    readonly INVALID: "AD_STATUS_INVALID";
    readonly PREPARE: "AD_STATUS_PREPARE";
    readonly DELETED: "AD_STATUS_DELETED";
    readonly WITHDRAW: "AD_STATUS_WITHDRAW";
};
export type AdStatus = typeof AdStatus[keyof typeof AdStatus];
