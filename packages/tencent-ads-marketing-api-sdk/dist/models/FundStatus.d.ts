export declare const FundStatus: {
    readonly NORMAL: "FUND_STATUS_NORMAL";
    readonly NOT_ENOUGH: "FUND_STATUS_NOT_ENOUGH";
    readonly CLOSED: "FUND_STATUS_CLOSED";
    readonly FROZEN: "FUND_STATUS_FROZEN";
};
export type FundStatus = typeof FundStatus[keyof typeof FundStatus];
