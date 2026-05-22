import type { ComponentMetadataFieldType, CreativeComponentValueValid, CreativeComponentValueValidStructureField } from "../models";
export interface CreativeComponentValueField {
    name?: string;
    desc?: string;
    type?: ComponentMetadataFieldType;
    structure?: CreativeComponentValueValidStructureField[];
    valid?: CreativeComponentValueValid;
}
