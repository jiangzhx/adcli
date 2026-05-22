import type { ComponentMetadataFieldType, ComponentMetadataValueFieldStructureField, ComponentMetadataValueValid } from "../v3/index";
export interface ComponentMetadataValueField {
    name?: string;
    type?: ComponentMetadataFieldType;
    structure?: ComponentMetadataValueFieldStructureField[];
    is_array?: boolean;
    valid?: ComponentMetadataValueValid;
    label?: string;
}
