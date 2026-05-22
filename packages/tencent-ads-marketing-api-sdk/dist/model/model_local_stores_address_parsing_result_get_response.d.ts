import type { ApiErrorStruct, LocalStoresAddressParsingResultGetResponseData } from "../model/index";
export interface LocalStoresAddressParsingResultGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresAddressParsingResultGetResponseData;
}
