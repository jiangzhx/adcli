import type { ConversionEffectDataStruct, ConversionEffectDataTrendsItem, ConversionTargetingLabelContributionStruct } from "../model/index";
export interface ConversionDetailStruct {
    effect_data?: ConversionEffectDataStruct;
    effect_data_trends?: ConversionEffectDataTrendsItem[];
    targeting_label_contribution?: ConversionTargetingLabelContributionStruct;
}
