import type { ApiErrorStruct, ProfilesGetResponseData } from "../models";
export interface ProfilesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProfilesGetResponseData;
}
