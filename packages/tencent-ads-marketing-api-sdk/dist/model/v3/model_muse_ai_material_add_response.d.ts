import type { ApiErrorStruct, MuseAiMaterialAddResponseData } from "../v3/index";
export interface MuseAiMaterialAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseAiMaterialAddResponseData;
}
