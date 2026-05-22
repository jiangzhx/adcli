import type { ApiErrorStruct, LabelAudiencesAddResponseData } from "../model/index";
export interface LabelAudiencesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LabelAudiencesAddResponseData;
}
