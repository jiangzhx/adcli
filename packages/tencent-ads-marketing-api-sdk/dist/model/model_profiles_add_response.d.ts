import type { ApiErrorStruct, ProfilesAddResponseData } from "../model/index";
export interface ProfilesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProfilesAddResponseData;
}
