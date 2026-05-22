export declare const ActionChannelType: {
    readonly NATURAL: "NATURAL";
    readonly TENCENT: "TENCENT";
    readonly BYTEDANCE: "BYTEDANCE";
    readonly KUAISHOU: "KUAISHOU";
    readonly ALIBABA: "ALIBABA";
    readonly BAIDU: "BAIDU";
    readonly OTHERS: "OTHERS";
    readonly MULTIPLE: "MULTIPLE";
    readonly UNKNOWN: "UNKNOWN";
};
export type ActionChannelType = typeof ActionChannelType[keyof typeof ActionChannelType];
