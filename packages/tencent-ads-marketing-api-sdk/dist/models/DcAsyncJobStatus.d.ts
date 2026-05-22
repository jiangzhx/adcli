export declare const DcAsyncJobStatus: {
    readonly PENDING: "DC_ASYNC_JOB_STATUS_PENDING";
    readonly FAIL: "DC_ASYNC_JOB_STATUS_FAIL";
    readonly SUCCESS: "DC_ASYNC_JOB_STATUS_SUCCESS";
    readonly SYSTEM_ERROR: "DC_ASYNC_JOB_STATUS_SYSTEM_ERROR";
    readonly PROCESSING: "DC_ASYNC_JOB_STATUS_PROCESSING";
    readonly RETRYING: "DC_ASYNC_JOB_STATUS_RETRYING";
    readonly DERIVE_SUCCESS: "DC_ASYNC_JOB_STATUS_DERIVE_SUCCESS";
};
export type DcAsyncJobStatus = typeof DcAsyncJobStatus[keyof typeof DcAsyncJobStatus];
