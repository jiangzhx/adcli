import type { ApiErrorStruct, ProfilesGetResponseData } from "../model/index";
export interface ProfilesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProfilesGetResponseData;
}
