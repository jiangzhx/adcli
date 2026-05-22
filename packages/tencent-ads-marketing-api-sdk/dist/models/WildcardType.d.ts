export declare const WildcardType: {
    readonly UNKNOWN: "UNKNOWN";
    readonly LANDING_PAGE: "LANDING_PAGE";
    readonly PRODUCT_INDEX: "PRODUCT_INDEX";
    readonly PRODUCT_RECOMMEND: "PRODUCT_RECOMMEND";
    readonly USER_IDENTIFIER: "USER_IDENTIFIER";
    readonly DEEP_LINK: "DEEP_LINK";
    readonly UNIVERSAL_LINK: "UNIVERSAL_LINK";
    readonly QUERY_WORD: "QUERY_WORD";
};
export type WildcardType = typeof WildcardType[keyof typeof WildcardType];
