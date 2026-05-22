export declare const MediaSystemStatus: {
    readonly VALID: "MEDIA_STATUS_VALID";
    readonly PENDING: "MEDIA_STATUS_PENDING";
    readonly ERROR: "MEDIA_STATUS_ERROR";
};
export type MediaSystemStatus = typeof MediaSystemStatus[keyof typeof MediaSystemStatus];
