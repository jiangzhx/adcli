import type { ApiErrorStruct, ProfilesDeleteResponseData } from "../model/index";
export interface ProfilesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProfilesDeleteResponseData;
}
