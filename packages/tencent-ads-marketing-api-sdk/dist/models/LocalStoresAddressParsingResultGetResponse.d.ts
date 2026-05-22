import type { ApiErrorStruct, LocalStoresAddressParsingResultGetResponseData } from "../models";
export interface LocalStoresAddressParsingResultGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresAddressParsingResultGetResponseData;
}
