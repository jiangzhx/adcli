import type { FeatureSpec } from "../models";
export interface CustomFeature {
    account_id?: number | string;
    feature_id?: number | string;
    name?: string;
    description?: string;
    feature_class_id?: number | string;
    feature_spec?: FeatureSpec;
    is_supported_time_window?: boolean;
    time_window?: number[];
    created_time?: string;
}
