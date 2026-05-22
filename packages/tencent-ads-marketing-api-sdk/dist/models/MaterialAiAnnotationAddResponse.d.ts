import type { ApiErrorStruct, MaterialAiAnnotationAddResponseData } from "../models";
export interface MaterialAiAnnotationAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialAiAnnotationAddResponseData;
}
