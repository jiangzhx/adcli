export declare const TaskStatus: {
    readonly PENDING: "TASK_STATUS_PENDING";
    readonly PROCESSING: "TASK_STATUS_PROCESSING";
    readonly EXPIRED: "TASK_STATUS_EXPIRED";
    readonly COMPLETED: "TASK_STATUS_COMPLETED";
    readonly CANCELLED: "TASK_STATUS_CANCELLED";
    readonly FAIL: "TASK_STATUS_FAIL";
    readonly DELETED: "TASK_STATUS_DELETED";
    readonly DRAFT: "TASK_STATUS_DRAFT";
};
export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];
