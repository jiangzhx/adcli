import type { CustomAudienceStruct, PageInfo } from "../v3/index";
export interface CustomAudiencesGetResponseData {
    list?: CustomAudienceStruct[];
    page_info?: PageInfo;
}
