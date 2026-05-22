export declare const BillingEvent: {
    readonly NONE: "BILLINGEVENT_NONE";
    readonly CLICK: "BILLINGEVENT_CLICK";
    readonly APP_DOWNLOAD: "BILLINGEVENT_APP_DOWNLOAD";
    readonly IMPRESSION: "BILLINGEVENT_IMPRESSION";
    readonly APP_INSTALL: "BILLINGEVENT_APP_INSTALL";
    readonly DURATION: "BILLINGEVENT_DURATION";
    readonly DAY: "BILLINGEVENT_DAY";
};
export type BillingEvent = typeof BillingEvent[keyof typeof BillingEvent];
