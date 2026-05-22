import type { ComponentMetadataFieldType, ComponentMetadataValueFieldStructureFieldSub, ComponentMetadataValueValid } from "../v3/index";
export interface ComponentMetadataValueFieldStructureField {
    name?: string;
    type?: ComponentMetadataFieldType;
    structure?: ComponentMetadataValueFieldStructureFieldSub[];
    is_array?: boolean;
    valid?: ComponentMetadataValueValid;
}
