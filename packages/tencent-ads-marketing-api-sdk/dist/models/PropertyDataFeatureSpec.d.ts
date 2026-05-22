import type { FeatureValueDataType } from "../models";
export interface PropertyDataFeatureSpec {
    user_property_set_id?: number | string;
    property_data_key?: string;
    data_type?: FeatureValueDataType;
    is_multi_valued?: boolean;
    possible_values_size?: number;
}
