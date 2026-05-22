import type { ComponentMetadataFieldType, ComponentMetadataValueValid } from "../models";
export interface ComponentMetadataValueFieldStructureFieldSub {
    name?: string;
    type?: ComponentMetadataFieldType;
    is_array?: boolean;
    valid?: ComponentMetadataValueValid;
}
