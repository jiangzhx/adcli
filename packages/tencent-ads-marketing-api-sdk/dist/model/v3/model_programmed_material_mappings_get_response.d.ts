import type { ApiErrorStruct, ProgrammedMaterialMappingsGetResponseData } from "../v3/index";
export interface ProgrammedMaterialMappingsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedMaterialMappingsGetResponseData;
}
