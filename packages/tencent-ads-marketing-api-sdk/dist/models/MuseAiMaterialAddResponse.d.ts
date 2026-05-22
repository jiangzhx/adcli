import type { ApiErrorStruct, MuseAiMaterialAddResponseData } from "../models";
export interface MuseAiMaterialAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseAiMaterialAddResponseData;
}
