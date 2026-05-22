import type { ApiErrorStruct, PropertySetSchemasGetResponseData } from "../models";
export interface PropertySetSchemasGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PropertySetSchemasGetResponseData;
}
