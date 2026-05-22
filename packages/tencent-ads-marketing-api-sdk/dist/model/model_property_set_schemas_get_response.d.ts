import type { ApiErrorStruct, PropertySetSchemasGetResponseData } from "../model/index";
export interface PropertySetSchemasGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PropertySetSchemasGetResponseData;
}
