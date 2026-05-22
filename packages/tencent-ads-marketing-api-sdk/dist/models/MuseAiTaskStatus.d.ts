export declare const MuseAiTaskStatus: {
    readonly WAITING: "MUSE_AI_TASK_WAITING";
    readonly SUCCESS: "MUSE_AI_TASK_SUCCESS";
    readonly FAIL: "MUSE_AI_TASK_FAIL";
};
export type MuseAiTaskStatus = typeof MuseAiTaskStatus[keyof typeof MuseAiTaskStatus];
