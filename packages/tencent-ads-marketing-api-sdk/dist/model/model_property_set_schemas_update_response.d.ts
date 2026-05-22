import type { ApiErrorStruct } from "../model/index";
export interface PropertySetSchemasUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
