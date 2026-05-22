import type { ApiErrorStruct, ProfilesGetResponseData } from "../v3/index";
export interface ProfilesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProfilesGetResponseData;
}
