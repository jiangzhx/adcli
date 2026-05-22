export declare const ImageSourceType: {
    readonly UNSUPPORTED: "SOURCE_TYPE_UNSUPPORTED";
    readonly LOCAL: "SOURCE_TYPE_LOCAL";
    readonly MUSE: "SOURCE_TYPE_MUSE";
    readonly API: "SOURCE_TYPE_API";
    readonly QUICK_DRAW: "SOURCE_TYPE_QUICK_DRAW";
    readonly VIDEO_SNAPSHOTS: "SOURCE_TYPE_VIDEO_SNAPSHOTS";
    readonly TCC: "SOURCE_TYPE_TCC";
    readonly AIGC: "SOURCE_TYPE_AIGC";
};
export type ImageSourceType = typeof ImageSourceType[keyof typeof ImageSourceType];
