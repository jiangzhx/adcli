export declare const AppealStatus: {
    readonly COMPLETED: "APPEAL_STATUS_COMPLETED";
    readonly PENDING: "APPEAL_STATUS_PENDING";
    readonly CANCEL: "APPEAL_STATUS_CANCEL";
};
export type AppealStatus = typeof AppealStatus[keyof typeof AppealStatus];
