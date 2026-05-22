export declare const WebsiteStatus: {
    readonly NORMAL: "WEBSITE_STATUS_NORMAL";
    readonly PENDING: "WEBSITE_STATUS_PENDING";
    readonly DENIED: "WEBSITE_STATUS_DENIED";
};
export type WebsiteStatus = typeof WebsiteStatus[keyof typeof WebsiteStatus];
