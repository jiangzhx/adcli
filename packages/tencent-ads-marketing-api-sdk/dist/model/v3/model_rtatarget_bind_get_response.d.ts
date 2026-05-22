import type { ApiErrorStruct, RtatargetBindGetResponseData } from "../v3/index";
export interface RtatargetBindGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtatargetBindGetResponseData;
}
