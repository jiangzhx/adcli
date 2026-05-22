export declare const LocalStoreOpeningStatus: {
    readonly UNKNOWN: "OPENING_STATUS_UNKNOWN";
    readonly OPENING: "OPENING_STATUS_OPENING";
    readonly TEMPORARILY_CLOSED: "OPENING_STATUS_TEMPORARILY_CLOSED";
    readonly PERMANENTLY_CLOSED: "OPENING_STATUS_PERMANENTLY_CLOSED";
};
export type LocalStoreOpeningStatus = typeof LocalStoreOpeningStatus[keyof typeof LocalStoreOpeningStatus];
