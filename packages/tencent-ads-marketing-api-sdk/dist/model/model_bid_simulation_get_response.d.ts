import type { ApiErrorStruct, BidSimulationGetResponseData } from "../model/index";
export interface BidSimulationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidSimulationGetResponseData;
}
