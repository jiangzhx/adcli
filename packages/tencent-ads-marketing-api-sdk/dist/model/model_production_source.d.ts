export declare const ProductionSource: {
    readonly UGC: "PRODUCTION_SOURCE_UGC";
    readonly PGC: "PRODUCTION_SOURCE_PGC";
    readonly PUGC: "PRODUCTION_SOURCE_PUGC";
};
export type ProductionSource = typeof ProductionSource[keyof typeof ProductionSource];
