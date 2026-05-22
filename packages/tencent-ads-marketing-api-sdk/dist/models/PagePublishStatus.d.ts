export declare const PagePublishStatus: {
    readonly UNPUBLISH: "LANDING_PAGE_STATUS_UNPUBLISH";
    readonly PUBLISHED: "LANDING_PAGE_STATUS_PUBLISHED";
    readonly OFFLINE: "LANDING_PAGE_STATUS_OFFLINE";
    readonly DELETING: "LANDING_PAGE_STATUS_DELETING";
    readonly DELETED: "LANDING_PAGE_STATUS_DELETED";
};
export type PagePublishStatus = typeof PagePublishStatus[keyof typeof PagePublishStatus];
