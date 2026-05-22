export declare const BidStrategy: {
    readonly UNSUPPORTED: "BID_STRATEGY_UNSUPPORTED";
    readonly AVERAGE_COST: "BID_STRATEGY_AVERAGE_COST";
    readonly TARGET_COST: "BID_STRATEGY_TARGET_COST";
    readonly PRIORITY_LOW_COST: "BID_STRATEGY_PRIORITY_LOW_COST";
    readonly PRIORITY_CAP_COST: "BID_STRATEGY_PRIORITY_CAP_COST";
};
export type BidStrategy = typeof BidStrategy[keyof typeof BidStrategy];
