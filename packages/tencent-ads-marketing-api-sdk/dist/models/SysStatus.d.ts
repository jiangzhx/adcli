export declare const SysStatus: {
    readonly NORMAL: "AD_STATUS_NORMAL";
    readonly PENDING: "AD_STATUS_PENDING";
    readonly DENIED: "AD_STATUS_DENIED";
    readonly FROZEN: "AD_STATUS_FROZEN";
    readonly PARTIALLY_PENDING: "AD_STATUS_PARTIALLY_PENDING";
    readonly PARTIALLY_NORMAL: "AD_STATUS_PARTIALLY_NORMAL";
    readonly PREPARE: "AD_STATUS_PREPARE";
    readonly DELETED: "AD_STATUS_DELETED";
    readonly INVALID: "AD_STATUS_INVALID";
    readonly SUSPEND: "AD_STATUS_SUSPEND";
};
export type SysStatus = typeof SysStatus[keyof typeof SysStatus];
