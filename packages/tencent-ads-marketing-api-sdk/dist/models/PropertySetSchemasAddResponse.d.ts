import type { ApiErrorStruct } from "../models";
export interface PropertySetSchemasAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
