export declare const DimensionType: {
    readonly CONTENT: "CONTENT";
    readonly RESOURCE_ID: "RESOURCE_ID";
    readonly HYPERLINK: "HYPERLINK";
    readonly AGE: "AGE";
    readonly GENDER: "GENDER";
    readonly EDUCATION: "EDUCATION";
    readonly RESIDENT_AREA_CODE: "RESIDENT_AREA_CODE";
    readonly USER_BUSINESS_INTEREST: "USER_BUSINESS_INTEREST";
    readonly RELATIONSHIP_STATUS: "RELATIONSHIP_STATUS";
    readonly LOCARD_INTEREST: "LOCARD_INTEREST";
    readonly LOCARD_BEHAVIOR_CATEGORY: "LOCARD_BEHAVIOR_CATEGORY";
};
export type DimensionType = typeof DimensionType[keyof typeof DimensionType];
