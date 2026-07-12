import type { CaptionInfoStruct, RejectInfoLocationListStruct, SiteSetInfoListStruct, VideoAsrInfoStruct, VideoOcrInfoStruct } from "../v3/index";
export interface ComponentElementRejectDetailInfoListStruct {
    reason?: string;
    site_set_list?: SiteSetInfoListStruct[];
    reject_info_location?: RejectInfoLocationListStruct[];
    video_asr_infos?: VideoAsrInfoStruct[];
    video_ocr_infos?: VideoOcrInfoStruct[];
    caption_infos?: CaptionInfoStruct[];
}
