import type { ApiErrorStruct, ProgrammedMaterialMappingsGetResponseData } from "../models";
export interface ProgrammedMaterialMappingsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedMaterialMappingsGetResponseData;
}
