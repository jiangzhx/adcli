export declare const ChannelTaskStatus: {
    readonly PENDING: "CHANNEL_TASK_STATUS_PENDING";
    readonly PROCESSING: "CHANNEL_TASK_STATUS_PROCESSING";
    readonly ERROR: "CHANNEL_TASK_STATUS_ERROR";
    readonly COMPLETED: "CHANNEL_TASK_STATUS_COMPLETED";
};
export type ChannelTaskStatus = typeof ChannelTaskStatus[keyof typeof ChannelTaskStatus];
