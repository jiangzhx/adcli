import type { CampaignsGetListStruct, ConfPageSize500 } from "../model/index";
export interface CampaignsGetResponseData {
    list?: CampaignsGetListStruct[];
    page_info?: ConfPageSize500;
}
