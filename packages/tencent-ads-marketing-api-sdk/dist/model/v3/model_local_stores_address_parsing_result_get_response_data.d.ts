import type { SuccessPoiInfoStruct } from "../v3/index";
export interface LocalStoresAddressParsingResultGetResponseData {
    success_list?: SuccessPoiInfoStruct[];
    fail_list?: string[];
    sensitive_list?: string[];
}
