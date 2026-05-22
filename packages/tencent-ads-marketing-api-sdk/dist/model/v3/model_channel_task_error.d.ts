export declare const ChannelTaskError: {
    readonly NORMAL: "TASK_ERROR_NORMAL";
    readonly UNABLE_DOWNLOAD: "TASK_ERROR_UNABLE_DOWNLOAD";
    readonly MISMATCH_PACKAGENAME: "TASK_ERROR_MISMATCH_PACKAGENAME";
    readonly ILLEGAL_VERSION: "TASK_ERROR_ILLEGAL_VERSION";
    readonly DUPLICATE_PACKAGE: "TASK_ERROR_DUPLICATE_PACKAGE";
    readonly PARSE_FAIL: "TASK_ERROR_PARSE_FAIL";
    readonly MISS_YSDK: "TASK_ERROR_MISS_YSDK";
    readonly UPLOAD_FAIL: "TASK_ERROR_UPLOAD_FAIL";
    readonly SUBMIT_FAIL: "TASK_ERROR_SUBMIT_FAIL";
    readonly SERVER_ERROR: "TASK_ERROR_SERVER_ERROR";
};
export type ChannelTaskError = typeof ChannelTaskError[keyof typeof ChannelTaskError];
