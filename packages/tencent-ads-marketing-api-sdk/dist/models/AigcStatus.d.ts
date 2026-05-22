export declare const AigcStatus: {
    readonly UNKNOWN: "AIGC_STATUS_UNKNOWN";
    readonly USE_HM: "AIGC_STATUS_USE_HM";
    readonly USE_AIGC: "AIGC_STATUS_USE_AIGC";
};
export type AigcStatus = typeof AigcStatus[keyof typeof AigcStatus];
