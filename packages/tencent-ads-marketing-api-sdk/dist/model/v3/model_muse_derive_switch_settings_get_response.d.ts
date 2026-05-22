import type { ApiErrorStruct, MuseDeriveSwitchSettingsGetResponseData } from "../v3/index";
export interface MuseDeriveSwitchSettingsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseDeriveSwitchSettingsGetResponseData;
}
