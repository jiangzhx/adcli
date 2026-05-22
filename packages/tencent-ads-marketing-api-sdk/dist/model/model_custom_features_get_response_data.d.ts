import type { CustomFeature, PageInfo } from "../model/index";
export interface CustomFeaturesGetResponseData {
    list?: CustomFeature[];
    page_info?: PageInfo;
}
