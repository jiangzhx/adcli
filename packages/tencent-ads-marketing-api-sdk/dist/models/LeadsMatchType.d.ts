export declare const LeadsMatchType: {
    readonly NONE: "NONE";
    readonly LEADSID: "LEADSID";
    readonly OUTERLEADSID: "OUTERLEADSID";
    readonly CONTACT: "CONTACT";
    readonly CLICKID: "CLICKID";
};
export type LeadsMatchType = typeof LeadsMatchType[keyof typeof LeadsMatchType];
