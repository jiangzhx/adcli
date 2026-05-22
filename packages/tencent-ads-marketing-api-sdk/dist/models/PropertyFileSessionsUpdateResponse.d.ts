import type { ApiErrorStruct, PropertyFileSessionsUpdateResponseData } from "../models";
export interface PropertyFileSessionsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PropertyFileSessionsUpdateResponseData;
}
