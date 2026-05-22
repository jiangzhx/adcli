export declare const ClaimType: {
    readonly ACTIVATION: "CLAIM_TYPE_ACTIVATION";
    readonly CLICK: "CLAIM_TYPE_CLICK";
    readonly REGISTER: "CLAIM_TYPE_REGISTER";
    readonly IMPRESSION: "CLAIM_TYPE_IMPRESSION";
};
export type ClaimType = typeof ClaimType[keyof typeof ClaimType];
