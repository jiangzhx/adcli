import type { ApiErrorStruct, ProfilesAddResponseData } from "../models";
export interface ProfilesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProfilesAddResponseData;
}
