import type { LiveInfoListStruct, VideoChannelPageInfoStruct } from "../models";
export interface VideoChannelLiveDataGetResponseData {
    living_info_list?: LiveInfoListStruct[];
    page_info?: VideoChannelPageInfoStruct;
}
