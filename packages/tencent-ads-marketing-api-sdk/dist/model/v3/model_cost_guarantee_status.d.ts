export declare const CostGuaranteeStatus: {
    readonly NONE: "COST_GUARANTEE_STATUS_NONE";
    readonly EFFECTIVE: "COST_GUARANTEE_STATUS_EFFECTIVE";
    readonly FAILED: "COST_GUARANTEE_STATUS_FAILED";
    readonly FINISHED: "COST_GUARANTEE_STATUS_FINISHED";
    readonly CONFIRMING: "COST_GUARANTEE_STATUS_CONFIRMING";
    readonly SUCCEEDED: "COST_GUARANTEE_STATUS_SUCCEEDED";
    readonly FROZEN: "COST_GUARANTEE_STATUS_FROZEN";
};
export type CostGuaranteeStatus = typeof CostGuaranteeStatus[keyof typeof CostGuaranteeStatus];
