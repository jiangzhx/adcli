import type { ComponentMetadataFieldType, CreativeComponentValueFieldStructureWithoutValueValidStructure, CreativeComponentValueValid } from "../models";
export interface CreativeComponentValueValidStructureField {
    name?: string;
    desc?: string;
    type?: ComponentMetadataFieldType;
    structure?: CreativeComponentValueFieldStructureWithoutValueValidStructure;
    valid?: CreativeComponentValueValid;
}
