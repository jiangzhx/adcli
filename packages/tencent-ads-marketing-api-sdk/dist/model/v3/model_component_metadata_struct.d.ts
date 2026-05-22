import type { ComponentMetadataValueField, ComponentSubType, ComponentType } from "../v3/index";
export interface ComponentMetadataStruct {
    name?: string;
    component_type?: ComponentType;
    component_sub_type?: ComponentSubType;
    value_field?: ComponentMetadataValueField[];
    component_candidate_count?: number;
}
