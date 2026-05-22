export declare const ReviewResultStatus: {
    readonly NORMAL: "AD_STATUS_NORMAL";
    readonly PENDING: "AD_STATUS_PENDING";
    readonly DENIED: "AD_STATUS_DENIED";
    readonly PARTIALLY_NORMAL: "AD_STATUS_PARTIALLY_NORMAL";
};
export type ReviewResultStatus = typeof ReviewResultStatus[keyof typeof ReviewResultStatus];
