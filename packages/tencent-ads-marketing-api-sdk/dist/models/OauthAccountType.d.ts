export declare const OauthAccountType: {
    readonly UNKNOWN: "ACCOUNT_TYPE_UNKNOWN";
    readonly ADVERTISER: "ACCOUNT_TYPE_ADVERTISER";
    readonly AGENCY: "ACCOUNT_TYPE_AGENCY";
    readonly DSP: "ACCOUNT_TYPE_DSP";
    readonly DEVELOPER: "ACCOUNT_TYPE_DEVELOPER";
    readonly MEMBER: "ACCOUNT_TYPE_MEMBER";
    readonly EXTERNAL_SUPPLIER: "ACCOUNT_TYPE_EXTERNAL_SUPPLIER";
    readonly TDC: "ACCOUNT_TYPE_TDC";
    readonly TONE: "ACCOUNT_TYPE_TONE";
    readonly BM: "ACCOUNT_TYPE_BM";
    readonly DATA_NEXUS: "ACCOUNT_TYPE_DATA_NEXUS";
};
export type OauthAccountType = typeof OauthAccountType[keyof typeof OauthAccountType];
