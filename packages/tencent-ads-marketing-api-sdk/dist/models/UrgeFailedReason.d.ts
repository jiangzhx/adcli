export declare const UrgeFailedReason: {
    readonly SYSTEM_ERROR: "SYSTEM_ERROR";
    readonly ACCOUNT_NO_PERMISSION: "ACCOUNT_NO_PERMISSION";
    readonly ACCOUNT_REACH_URGE_UPPER_LIMIT: "ACCOUNT_REACH_URGE_UPPER_LIMIT";
    readonly COMPONENT_ID_NOT_EXIST: "COMPONENT_ID_NOT_EXIST";
    readonly ELEMENT_FINGERPRINT_NOT_EXIST: "ELEMENT_FINGERPRINT_NOT_EXIST";
    readonly ALREADY_URGED: "ALREADY_URGED";
    readonly NOT_REACH_URGE_TIME: "NOT_REACH_URGE_TIME";
    readonly ACCOUNT_PENDING: "ACCOUNT_PENDING";
};
export type UrgeFailedReason = typeof UrgeFailedReason[keyof typeof UrgeFailedReason];
