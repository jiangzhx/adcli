import type { ApiErrorStruct, LabelAudiencesAddResponseData } from "../models";
export interface LabelAudiencesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LabelAudiencesAddResponseData;
}
