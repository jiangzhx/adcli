export declare const FeatureValueDataType: {
    readonly CATEGORICAL: "CATEGORICAL";
    readonly DISCRETE_NUMERICAL: "DISCRETE_NUMERICAL";
    readonly CONTINUOUS_NUMERICAL: "CONTINUOUS_NUMERICAL";
};
export type FeatureValueDataType = typeof FeatureValueDataType[keyof typeof FeatureValueDataType];
