export declare const TaskDetailResultType: {
    readonly PENDING: "TASK_DETAIL_RESULT_TYPE_PENDING";
    readonly FAIL: "TASK_DETAIL_RESULT_TYPE_FAIL";
    readonly SUCCESS: "TASK_DETAIL_RESULT_TYPE_SUCCESS";
    readonly SYSTEM_ERROR: "TASK_DETAIL_RESULT_TYPE_SYSTEM_ERROR";
};
export type TaskDetailResultType = typeof TaskDetailResultType[keyof typeof TaskDetailResultType];
