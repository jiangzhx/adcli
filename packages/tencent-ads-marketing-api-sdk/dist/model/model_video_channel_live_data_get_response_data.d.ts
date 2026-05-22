import type { LiveInfoListStruct, VideoChannelPageInfoStruct } from "../model/index";
export interface VideoChannelLiveDataGetResponseData {
    living_info_list?: LiveInfoListStruct[];
    page_info?: VideoChannelPageInfoStruct;
}
