import type { ApiErrorStruct, BidSimulationGetResponseData } from "../models";
export interface BidSimulationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidSimulationGetResponseData;
}
