export declare const QualificationStatus: {
    readonly NORMAL: "QUALIFICATION_STATUS_NORMAL";
    readonly PENDING: "QUALIFICATION_STATUS_PENDING";
    readonly DENIED: "QUALIFICATION_STATUS_DENIED";
    readonly EXPIRED: "QUALIFICATION_STATUS_EXPIRED";
    readonly SOON_EXPIRED: "QUALIFICATION_STATUS_SOON_EXPIRED";
};
export type QualificationStatus = typeof QualificationStatus[keyof typeof QualificationStatus];
