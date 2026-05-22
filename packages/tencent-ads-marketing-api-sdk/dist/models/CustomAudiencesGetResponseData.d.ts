import type { CustomAudienceStruct, PageInfo } from "../models";
export interface CustomAudiencesGetResponseData {
    list?: CustomAudienceStruct[];
    page_info?: PageInfo;
}
