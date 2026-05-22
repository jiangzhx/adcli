import type { AdParamListStruct } from "../v3/index";
export interface AdParamGetResponseData {
    system_ad_param_list?: AdParamListStruct[];
    product_ad_param_list?: AdParamListStruct[];
    dynamic_content_ad_param_list?: AdParamListStruct[];
}
