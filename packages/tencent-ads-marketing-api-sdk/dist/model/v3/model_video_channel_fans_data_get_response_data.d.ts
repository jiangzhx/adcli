import type { FansInfoListStruct, VideoChannelPageInfoStruct } from "../v3/index";
export interface VideoChannelFansDataGetResponseData {
    fans_info_list?: FansInfoListStruct[];
    page_info?: VideoChannelPageInfoStruct;
}
