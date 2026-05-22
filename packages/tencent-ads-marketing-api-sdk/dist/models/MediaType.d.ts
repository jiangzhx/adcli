export declare const MediaType: {
    readonly MP4: "MEDIA_TYPE_MP4";
    readonly AVI: "MEDIA_TYPE_AVI";
    readonly MOV: "MEDIA_TYPE_MOV";
    readonly FLV: "MEDIA_TYPE_FLV";
};
export type MediaType = typeof MediaType[keyof typeof MediaType];
