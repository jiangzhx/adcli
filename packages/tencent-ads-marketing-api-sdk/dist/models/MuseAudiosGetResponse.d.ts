import type { ApiErrorStruct, MuseAudiosGetResponseData } from "../models";
export interface MuseAudiosGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseAudiosGetResponseData;
}
