export declare const AudienceType: {
    readonly CUSTOMER_FILE: "CUSTOMER_FILE";
    readonly LOOKALIKE: "LOOKALIKE";
    readonly USER_ACTION: "USER_ACTION";
    readonly KEYWORD: "KEYWORD";
    readonly AD: "AD";
    readonly COMBINE: "COMBINE";
    readonly LABEL: "LABEL";
};
export type AudienceType = typeof AudienceType[keyof typeof AudienceType];
