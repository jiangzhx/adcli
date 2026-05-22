import type { ExposureEffectDataStruct, ExposureEffectDataTrendsItem, ExposureTargetingLabelContributionStruct } from "../model/index";
export interface ExposureDetailStruct {
    effect_data?: ExposureEffectDataStruct;
    effect_data_trends?: ExposureEffectDataTrendsItem[];
    targeting_label_contribution?: ExposureTargetingLabelContributionStruct;
}
