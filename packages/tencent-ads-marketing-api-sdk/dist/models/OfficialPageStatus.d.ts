export declare const OfficialPageStatus: {
    readonly EDITING: "LANDING_PAGE_STATUS_EDITING";
    readonly PENDING: "LANDING_PAGE_STATUS_PENDING";
    readonly APPROVED: "LANDING_PAGE_STATUS_APPROVED";
    readonly REJECTED: "LANDING_PAGE_STATUS_REJECTED";
    readonly OFFLINE: "LANDING_PAGE_STATUS_OFFLINE";
};
export type OfficialPageStatus = typeof OfficialPageStatus[keyof typeof OfficialPageStatus];
