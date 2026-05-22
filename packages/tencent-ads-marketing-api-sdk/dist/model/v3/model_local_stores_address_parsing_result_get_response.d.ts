import type { ApiErrorStruct, LocalStoresAddressParsingResultGetResponseData } from "../v3/index";
export interface LocalStoresAddressParsingResultGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresAddressParsingResultGetResponseData;
}
