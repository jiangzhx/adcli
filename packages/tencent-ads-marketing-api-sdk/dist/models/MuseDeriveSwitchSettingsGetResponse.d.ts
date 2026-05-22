import type { ApiErrorStruct, MuseDeriveSwitchSettingsGetResponseData } from "../models";
export interface MuseDeriveSwitchSettingsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseDeriveSwitchSettingsGetResponseData;
}
