export declare const FileProcessStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly ERROR: "ERROR";
    readonly SUCCESS: "SUCCESS";
};
export type FileProcessStatus = typeof FileProcessStatus[keyof typeof FileProcessStatus];
