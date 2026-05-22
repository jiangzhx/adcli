export declare const TaskResultStatus: {
    readonly UNKNOWN: "TASK_RESULT_STATUS_UNKNOWN";
    readonly PENDING: "TASK_RESULT_STATUS_PENDING";
    readonly PROCESSING: "TASK_RESULT_STATUS_PROCESSING";
    readonly SUCCESS: "TASK_RESULT_STATUS_SUCCESS";
    readonly FAIL: "TASK_RESULT_STATUS_FAIL";
    readonly PARTIAL_FAIL: "TASK_RESULT_STATUS_PARTIAL_FAIL";
    readonly SYSTEM_ERROR: "TASK_RESULT_STATUS_SYSTEM_ERROR";
    readonly DELETED: "TASK_RESULT_STATUS_DELETED";
};
export type TaskResultStatus = typeof TaskResultStatus[keyof typeof TaskResultStatus];
