import type { ApiErrorStruct, PropertyFileSessionsAddResponseData } from "../model/index";
export interface PropertyFileSessionsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PropertyFileSessionsAddResponseData;
}
