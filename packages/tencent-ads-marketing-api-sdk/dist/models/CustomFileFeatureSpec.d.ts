import type { FeatureValueDataType } from "../models";
export interface CustomFileFeatureSpec {
    data_type?: FeatureValueDataType;
    is_multi_valued?: boolean;
    possible_values_size?: number;
}
