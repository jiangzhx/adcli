import type { SuccessPoiInfoStruct } from "../models";
export interface LocalStoresAddressParsingResultGetResponseData {
    success_list?: SuccessPoiInfoStruct[];
    fail_list?: string[];
    sensitive_list?: string[];
}
