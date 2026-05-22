import type { ApiErrorStruct, VideomakerVideocapturesAddResponseData } from "../models";
export interface VideomakerVideocapturesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideomakerVideocapturesAddResponseData;
}
