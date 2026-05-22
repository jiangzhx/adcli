import type { ApiErrorStruct, ProfilesDeleteResponseData } from "../v3/index";
export interface ProfilesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProfilesDeleteResponseData;
}
