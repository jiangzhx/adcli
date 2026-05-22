import type { ComponentMetadataFieldType, ComponentMetadataValueValid } from "../v3/index";
export interface ComponentMetadataValueFieldStructureFieldSub {
    name?: string;
    type?: ComponentMetadataFieldType;
    is_array?: boolean;
    valid?: ComponentMetadataValueValid;
}
