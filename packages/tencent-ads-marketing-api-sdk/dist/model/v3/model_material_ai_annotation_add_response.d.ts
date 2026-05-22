import type { ApiErrorStruct, MaterialAiAnnotationAddResponseData } from "../v3/index";
export interface MaterialAiAnnotationAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialAiAnnotationAddResponseData;
}
