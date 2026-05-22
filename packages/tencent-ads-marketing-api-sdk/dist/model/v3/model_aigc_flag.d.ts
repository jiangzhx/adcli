export declare const AigcFlag: {
    readonly UNKNOWN: "AIGC_FLAG_UNKNOWN";
    readonly NOT_AI: "AIGC_FLAG_NOT_AI";
    readonly USE_MUSE_AI: "AIGC_FLAG_USE_MUSE_AI";
    readonly USE_OTHERS_AI: "AIGC_FLAG_USE_OTHERS_AI";
};
export type AigcFlag = typeof AigcFlag[keyof typeof AigcFlag];
