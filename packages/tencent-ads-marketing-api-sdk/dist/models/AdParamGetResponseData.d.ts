import type { AdParamListStruct } from "../models";
export interface AdParamGetResponseData {
    system_ad_param_list?: AdParamListStruct[];
    product_ad_param_list?: AdParamListStruct[];
    dynamic_content_ad_param_list?: AdParamListStruct[];
}
