export declare const RiskLevel: {
    readonly PASS: "PASS";
    readonly PROBABLE_PASS: "PROBABLE_PASS";
    readonly PROBABLE_PART_REJECT: "PROBABLE_PART_REJECT";
    readonly PROBABLE_REJECT: "PROBABLE_REJECT";
    readonly PART_REJECT: "PART_REJECT";
    readonly REJECT: "REJECT";
};
export type RiskLevel = typeof RiskLevel[keyof typeof RiskLevel];
