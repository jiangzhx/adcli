export declare const AuditStatus: {
    readonly PENDING: "PRODUCT_STATUS_PENDING";
    readonly AUDITING: "PRODUCT_STATUS_AUDITING";
    readonly PASS: "PRODUCT_STATUS_PASS";
    readonly REJECTED: "PRODUCT_STATUS_REJECTED";
};
export type AuditStatus = typeof AuditStatus[keyof typeof AuditStatus];
