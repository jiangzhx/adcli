import type { ApiErrorStruct, ProfilesDeleteResponseData } from "../models";
export interface ProfilesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProfilesDeleteResponseData;
}
