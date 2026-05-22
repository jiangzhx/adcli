export declare const AccessType: {
    readonly SDK: "ACCESS_TYPE_SDK";
    readonly API: "ACCESS_TYPE_API";
    readonly JS: "ACCESS_TYPE_JS";
};
export type AccessType = typeof AccessType[keyof typeof AccessType];
