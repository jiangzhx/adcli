export declare const AudienceType: {
    readonly AUDIENCE_TYPE_UNKNOWN: "AUDIENCE_TYPE_UNKNOWN";
    readonly AUDIENCE_TYPE_META: "AUDIENCE_TYPE_META";
    readonly AUDIENCE_TYPE_COMBINE: "AUDIENCE_TYPE_COMBINE";
    readonly AUDIENCE_TYPE_LOOKALIKE: "AUDIENCE_TYPE_LOOKALIKE";
    readonly AUDIENCE_TYPE_PACKAGE: "AUDIENCE_TYPE_PACKAGE";
    readonly CUSTOMER_FILE: "CUSTOMER_FILE";
    readonly LOOKALIKE: "LOOKALIKE";
    readonly USER_ACTION: "USER_ACTION";
    readonly LBS: "LBS";
    readonly KEYWORD: "KEYWORD";
    readonly AD: "AD";
    readonly COMBINE: "COMBINE";
    readonly LABEL: "LABEL";
};
export type AudienceType = typeof AudienceType[keyof typeof AudienceType];
