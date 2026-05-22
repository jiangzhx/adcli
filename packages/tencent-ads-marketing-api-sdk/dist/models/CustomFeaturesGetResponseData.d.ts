import type { CustomFeature, PageInfo } from "../models";
export interface CustomFeaturesGetResponseData {
    list?: CustomFeature[];
    page_info?: PageInfo;
}
