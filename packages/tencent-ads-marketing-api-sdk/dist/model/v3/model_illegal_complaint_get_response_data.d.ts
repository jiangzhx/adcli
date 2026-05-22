import type { AdvertiserIllegalComplaint, PageInfo } from "../v3/index";
export interface IllegalComplaintGetResponseData {
    page_info?: PageInfo;
    list?: AdvertiserIllegalComplaint[];
}
