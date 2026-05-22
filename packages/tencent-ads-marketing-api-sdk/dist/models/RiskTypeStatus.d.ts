export declare const RiskTypeStatus: {
    readonly CONSERVATIVE: "RISK_CONSERVATIVE";
    readonly STEADY: "RISK_STEADY";
    readonly BALANCE: "RISK_BALANCE";
    readonly RADICAL: "RISK_RADICAL";
    readonly OTHER: "RISK_OTHER";
};
export type RiskTypeStatus = typeof RiskTypeStatus[keyof typeof RiskTypeStatus];
