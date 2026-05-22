import type { ApiErrorStruct, MuseAudiosGetResponseData } from "../v3/index";
export interface MuseAudiosGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseAudiosGetResponseData;
}
