export declare const DataSourceType: {
    readonly DATA_SOURCE_TYPE_FILE: "DATA_SOURCE_TYPE_FILE";
    readonly DATA_SOURCE_TYPE_STREAM: "DATA_SOURCE_TYPE_STREAM";
    readonly DATA_SOURCE_TYPE_SITE: "DATA_SOURCE_TYPE_SITE";
    readonly WEB: "WEB";
    readonly ANDROID: "ANDROID";
    readonly IOS: "IOS";
    readonly OFFLINE: "OFFLINE";
    readonly WECHAT: "WECHAT";
    readonly WECHAT_MINI_PROGRAM: "WECHAT_MINI_PROGRAM";
    readonly WECHAT_MINI_GAME: "WECHAT_MINI_GAME";
};
export type DataSourceType = typeof DataSourceType[keyof typeof DataSourceType];
