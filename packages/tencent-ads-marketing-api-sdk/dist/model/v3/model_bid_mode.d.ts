export declare const BidMode: {
    readonly CPC: "BID_MODE_CPC";
    readonly CPA: "BID_MODE_CPA";
    readonly CPS: "BID_MODE_CPS";
    readonly CPM: "BID_MODE_CPM";
    readonly CPT: "BID_MODE_CPT";
    readonly CPO: "BID_MODE_CPO";
    readonly OCPC: "BID_MODE_OCPC";
    readonly OCPA: "BID_MODE_OCPA";
    readonly OCPM: "BID_MODE_OCPM";
    readonly YUNXUAN_CPS: "BID_MODE_YUNXUAN_CPS";
};
export type BidMode = typeof BidMode[keyof typeof BidMode];
