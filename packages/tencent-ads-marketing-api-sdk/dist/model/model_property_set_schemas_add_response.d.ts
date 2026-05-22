import type { ApiErrorStruct } from "../model/index";
export interface PropertySetSchemasAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
