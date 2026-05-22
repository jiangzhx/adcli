import type { FeatureValueDataType } from "../model/index";
export interface CustomFileFeatureSpec {
    data_type?: FeatureValueDataType;
    is_multi_valued?: boolean;
    possible_values_size?: number;
}
