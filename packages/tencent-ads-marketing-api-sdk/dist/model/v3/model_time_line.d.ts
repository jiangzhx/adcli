export declare const TimeLine: {
    readonly REQUEST_TIME: "REQUEST_TIME";
    readonly REPORTING_TIME: "REPORTING_TIME";
    readonly ACTIVE_TIME: "ACTIVE_TIME";
};
export type TimeLine = typeof TimeLine[keyof typeof TimeLine];
