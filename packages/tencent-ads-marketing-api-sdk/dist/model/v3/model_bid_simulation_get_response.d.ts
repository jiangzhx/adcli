import type { ApiErrorStruct, BidSimulationGetResponseData } from "../v3/index";
export interface BidSimulationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidSimulationGetResponseData;
}
