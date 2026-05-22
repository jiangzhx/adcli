export declare const PageAuditStatus: {
    readonly EDITING: "LANDING_PAGE_STATUS_EDITING";
    readonly PENDING: "LANDING_PAGE_STATUS_PENDING";
    readonly APPROVED: "LANDING_PAGE_STATUS_APPROVED";
    readonly REJECTED: "LANDING_PAGE_STATUS_REJECTED";
    readonly DELETED: "LANDING_PAGE_STATUS_DELETED";
};
export type PageAuditStatus = typeof PageAuditStatus[keyof typeof PageAuditStatus];
