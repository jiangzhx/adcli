export declare const SplitTestStatus: {
    readonly NORMAL: "SPLIT_TEST_STATUS_NORMAL";
    readonly SUSPEND: "SPLIT_TEST_STATUS_SUSPEND";
    readonly PUBLISH: "SPLIT_TEST_STATUS_PUBLISH";
};
export type SplitTestStatus = typeof SplitTestStatus[keyof typeof SplitTestStatus];
