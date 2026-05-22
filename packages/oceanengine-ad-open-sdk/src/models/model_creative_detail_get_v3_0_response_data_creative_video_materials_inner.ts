// Generated from oceanengine/ad_open_sdk_go models/model_creative_detail_get_v3_0_response_data_creative_video_materials_inner.go
// Do not edit manually.

import type { CreativeDetailGetV30DataCreativeVideoMaterialsDpaVideoTemplateType, CreativeDetailGetV30DataCreativeVideoMaterialsImageMode, CreativeDetailGetV30ResponseDataCreativeVideoMaterialsInnerImageInfo, CreativeDetailGetV30ResponseDataCreativeVideoMaterialsInnerVideoInfo } from "../models/index";

export interface CreativeDetailGetV30ResponseDataCreativeVideoMaterialsInner {
  aweme_item_id?: number | string;
  dpa_video_task_ids?: string[];
  dpa_video_template_type?: CreativeDetailGetV30DataCreativeVideoMaterialsDpaVideoTemplateType;
  image_info?: CreativeDetailGetV30ResponseDataCreativeVideoMaterialsInnerImageInfo;
  image_mode?: CreativeDetailGetV30DataCreativeVideoMaterialsImageMode;
  video_info?: CreativeDetailGetV30ResponseDataCreativeVideoMaterialsInnerVideoInfo;
}

