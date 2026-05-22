import type { ApiErrorStruct, PropertyFileSessionsAddResponseData } from "../models";
export interface PropertyFileSessionsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PropertyFileSessionsAddResponseData;
}
