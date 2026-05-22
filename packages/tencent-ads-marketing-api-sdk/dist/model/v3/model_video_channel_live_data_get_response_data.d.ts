import type { LiveInfoListStruct, VideoChannelPageInfoStruct } from "../v3/index";
export interface VideoChannelLiveDataGetResponseData {
    living_info_list?: LiveInfoListStruct[];
    page_info?: VideoChannelPageInfoStruct;
}
