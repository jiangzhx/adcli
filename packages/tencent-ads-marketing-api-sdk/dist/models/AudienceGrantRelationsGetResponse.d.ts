import type { ApiErrorStruct, AudienceGrantRelationsGetResponseData } from "../models";
export interface AudienceGrantRelationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AudienceGrantRelationsGetResponseData;
}
