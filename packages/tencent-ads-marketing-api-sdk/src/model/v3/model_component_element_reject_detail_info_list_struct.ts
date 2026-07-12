// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_component_element_reject_detail_info_list_struct.go
// Do not edit manually.

import type { CaptionInfoStruct, RejectInfoLocationListStruct, SiteSetInfoListStruct, VideoAsrInfoStruct, VideoOcrInfoStruct } from "../v3/index";

export interface ComponentElementRejectDetailInfoListStruct {
  reason?: string;
  site_set_list?: SiteSetInfoListStruct[];
  reject_info_location?: RejectInfoLocationListStruct[];
  video_asr_infos?: VideoAsrInfoStruct[];
  video_ocr_infos?: VideoOcrInfoStruct[];
  caption_infos?: CaptionInfoStruct[];
}

