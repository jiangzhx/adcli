import type { ApiErrorStruct, AudienceGrantRelationsGetResponseData } from "../v3/index";
export interface AudienceGrantRelationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AudienceGrantRelationsGetResponseData;
}
