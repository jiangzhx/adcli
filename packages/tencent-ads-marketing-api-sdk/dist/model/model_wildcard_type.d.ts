export declare const WildcardType: {
    readonly UNKNOWN: "UNKNOWN";
    readonly LANDING_PAGE: "LANDING_PAGE";
    readonly PRODUCT_INDEX: "PRODUCT_INDEX";
    readonly PRODUCT_RECOMMEND: "PRODUCT_RECOMMEND";
};
export type WildcardType = typeof WildcardType[keyof typeof WildcardType];
