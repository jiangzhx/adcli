export declare const GroupRiskLevel: {
    readonly PASS: "PASS";
    readonly PROBABLE_PASS: "PROBABLE_PASS";
    readonly PROBABLE_REJECT: "PROBABLE_REJECT";
    readonly REJECT: "REJECT";
};
export type GroupRiskLevel = typeof GroupRiskLevel[keyof typeof GroupRiskLevel];
