import type { QualificationExpandFieldType } from "../models";
export interface ExpandFieldDefinition {
    field_name?: string;
    field_name_cn?: string;
    field_type?: QualificationExpandFieldType;
    required?: boolean;
    max_length?: number;
    options?: string[];
}
