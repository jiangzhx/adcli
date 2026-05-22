export declare const LeadsType: {
    readonly FORM: "LEADS_TYPE_FORM";
    readonly MAKE_PHONE_CALL: "LEADS_TYPE_MAKE_PHONE_CALL";
    readonly PAGE_SCAN_CODE: "LEADS_TYPE_PAGE_SCAN_CODE";
    readonly PROMOTION_FOLLOW: "LEADS_TYPE_PROMOTION_FOLLOW";
};
export type LeadsType = typeof LeadsType[keyof typeof LeadsType];
