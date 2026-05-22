import type { ConversionEffectDataStruct, ConversionEffectDataTrendsItem, ConversionTargetingLabelContributionStruct } from "../models";
export interface ConversionDetailStruct {
    effect_data?: ConversionEffectDataStruct;
    effect_data_trends?: ConversionEffectDataTrendsItem[];
    targeting_label_contribution?: ConversionTargetingLabelContributionStruct;
}
