export declare const LearningStatus: {
    readonly PROCESSING: "LEARNING_STATUS_PROCESSING";
    readonly SUGGEST_CONTINUE: "LEARNING_STATUS_SUGGEST_CONTINUE";
    readonly SUGGEST_STOP: "LEARNING_STATUS_SUGGEST_STOP";
    readonly SUGGEST_IMPROVE: "LEARNING_STATUS_SUGGEST_IMPROVE";
    readonly UNKNOWN: "LEARNING_STATUS_UNKNOWN";
    readonly WIP: "LEARNING_STATUS_WIP";
    readonly FINISHED: "LEARNING_STATUS_FINISHED";
    readonly FAILED: "LEARNING_STATUS_FAILED";
};
export type LearningStatus = typeof LearningStatus[keyof typeof LearningStatus];
