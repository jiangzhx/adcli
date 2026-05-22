import type { CustomFileFeatureSpec, FeatureDataSourceType, PropertyDataFeatureSpec } from "../model/index";
export interface FeatureSpec {
    data_source_type?: FeatureDataSourceType;
    property_data_feature_spec?: PropertyDataFeatureSpec;
    custom_file_feature_spec?: CustomFileFeatureSpec;
}
