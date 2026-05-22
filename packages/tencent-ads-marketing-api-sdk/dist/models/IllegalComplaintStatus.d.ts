export declare const IllegalComplaintStatus: {
    readonly PENDING: "AUDIT_PENDING";
    readonly REJECT: "AUDIT_REJECT";
    readonly PASS: "AUDIT_PASS";
};
export type IllegalComplaintStatus = typeof IllegalComplaintStatus[keyof typeof IllegalComplaintStatus];
