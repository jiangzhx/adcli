import type { ApiErrorStruct, AudienceGrantRelationsGetResponseData } from "../model/index";
export interface AudienceGrantRelationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AudienceGrantRelationsGetResponseData;
}
