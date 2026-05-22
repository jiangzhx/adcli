import type { ComponentMetadataFieldType, CreativeComponentValueFieldStructureWithoutValueValidStructure, CreativeComponentValueValid } from "../v3/index";
export interface CreativeComponentValueValidStructureField {
    name?: string;
    desc?: string;
    type?: ComponentMetadataFieldType;
    structure?: CreativeComponentValueFieldStructureWithoutValueValidStructure;
    valid?: CreativeComponentValueValid;
}
