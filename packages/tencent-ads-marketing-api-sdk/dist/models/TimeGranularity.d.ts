export declare const TimeGranularity: {
    readonly DAILY: "DAILY";
    readonly HOURLY: "HOURLY";
    readonly UNKNOWN: "UNKNOWN";
    readonly SUMMARY: "SUMMARY";
};
export type TimeGranularity = typeof TimeGranularity[keyof typeof TimeGranularity];
