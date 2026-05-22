export declare const AdgroupSysStatus: {
    readonly NORMAL: "AD_GROUP_STATUS_NORMAL";
    readonly PENDING: "AD_GROUP_STATUS_PENDING";
    readonly DENIED: "AD_GROUP_STATUS_DENIED";
    readonly FROZEN: "AD_GROUP_STATUS_FROZEN";
    readonly PARTIALLY_PENDING: "AD_GROUP_STATUS_PARTIALLY_PENDING";
    readonly PARTIALLY_NORMAL: "AD_GROUP_STATUS_PARTIALLY_NORMAL";
    readonly PREPARE: "AD_GROUP_STATUS_PREPARE";
    readonly DELETED: "AD_GROUP_STATUS_DELETED";
    readonly INVALID: "AD_GROUP_STATUS_INVALID";
    readonly TO_BE_STARTED: "AD_GROUP_STATUS_TO_BE_STARTED";
    readonly ENDED: "AD_GROUP_STATUS_ENDED";
};
export type AdgroupSysStatus = typeof AdgroupSysStatus[keyof typeof AdgroupSysStatus];
