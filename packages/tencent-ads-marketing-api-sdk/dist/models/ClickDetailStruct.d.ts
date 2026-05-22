import type { ClickEffectDataStruct, ClickEffectDataTrendsItem, ClickTargetingLabelContributionStruct } from "../models";
export interface ClickDetailStruct {
    effect_data?: ClickEffectDataStruct;
    effect_data_trends?: ClickEffectDataTrendsItem[];
    targeting_label_contribution?: ClickTargetingLabelContributionStruct;
}
