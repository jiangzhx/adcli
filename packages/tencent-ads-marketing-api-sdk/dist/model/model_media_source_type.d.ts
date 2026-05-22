export declare const MediaSourceType: {
    readonly UNSUPPORTED: "SOURCE_TYPE_UNSUPPORTED";
    readonly LOCAL: "SOURCE_TYPE_LOCAL";
    readonly API: "SOURCE_TYPE_API";
    readonly VIDEO_MAKER_XSJ: "SOURCE_TYPE_VIDEO_MAKER_XSJ";
    readonly TCC: "SOURCE_TYPE_TCC";
    readonly DERIVE: "SOURCE_TYPE_DERIVE";
    readonly DERIVATION: "SOURCE_TYPE_DERIVATION";
    readonly AIGC: "SOURCE_TYPE_AIGC";
    readonly HUXUAN: "SOURCE_TYPE_HUXUAN";
    readonly HUXUAN_DERIVE: "SOURCE_TYPE_HUXUAN_DERIVE";
};
export type MediaSourceType = typeof MediaSourceType[keyof typeof MediaSourceType];
