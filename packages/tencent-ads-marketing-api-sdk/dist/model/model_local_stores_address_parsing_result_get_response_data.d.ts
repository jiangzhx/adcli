import type { SuccessPoiInfoStruct } from "../model/index";
export interface LocalStoresAddressParsingResultGetResponseData {
    success_list?: SuccessPoiInfoStruct[];
    fail_list?: string[];
    sensitive_list?: string[];
}
