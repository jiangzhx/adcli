export declare const OperatorPlatformType: {
    readonly UNKNOWN: "OPERATOR_PLATFORM_UNKNOWN";
    readonly MARKETING_API: "OPERATOR_PLATFORM_MARKETING_API";
    readonly ADQ: "OPERATOR_PLATFORM_ADQ";
    readonly AUDIT: "OPERATOR_PLATFORM_AUDIT";
    readonly MINISITE: "OPERATOR_PLATFORM_MINISITE";
    readonly SMART_ENGINE: "OPERATOR_PLATFORM_SMART_ENGINE";
    readonly SEARCH_EDITOR: "OPERATOR_PLATFORM_SEARCH_EDITOR";
    readonly MARKETING_ASSET: "OPERATOR_PLATFORM_MARKETING_ASSET";
    readonly API_KEY: "OPERATOR_PLATFORM_API_KEY";
};
export type OperatorPlatformType = typeof OperatorPlatformType[keyof typeof OperatorPlatformType];
