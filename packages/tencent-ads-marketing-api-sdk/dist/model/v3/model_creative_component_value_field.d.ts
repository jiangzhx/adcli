import type { ComponentMetadataFieldType, CreativeComponentValueValid, CreativeComponentValueValidStructureField } from "../v3/index";
export interface CreativeComponentValueField {
    name?: string;
    desc?: string;
    type?: ComponentMetadataFieldType;
    structure?: CreativeComponentValueValidStructureField[];
    valid?: CreativeComponentValueValid;
}
