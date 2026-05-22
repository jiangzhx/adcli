export declare const CustomerRegistrationType: {
    readonly UNKNOWN: "REGISTRATION_TYPE_UNKNOWN";
    readonly CORPORATION: "REGISTRATION_TYPE_CORPORATION";
    readonly INDIVIDUAL: "REGISTRATION_TYPE_INDIVIDUAL";
};
export type CustomerRegistrationType = typeof CustomerRegistrationType[keyof typeof CustomerRegistrationType];
