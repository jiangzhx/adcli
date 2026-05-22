export declare const SharedAccountType: {
    readonly INVALID: "INVALID";
    readonly ADVERTISER: "ADVERTISER";
    readonly ORGANIZATION: "ORGANIZATION";
};
export type SharedAccountType = typeof SharedAccountType[keyof typeof SharedAccountType];
