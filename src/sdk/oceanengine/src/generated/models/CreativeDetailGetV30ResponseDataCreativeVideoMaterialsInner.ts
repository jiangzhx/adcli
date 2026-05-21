// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { CreativeDetailGetV30DataCreativeVideoMaterialsDpaVideoTemplateType, CreativeDetailGetV30DataCreativeVideoMaterialsImageMode, CreativeDetailGetV30ResponseDataCreativeVideoMaterialsInnerImageInfo, CreativeDetailGetV30ResponseDataCreativeVideoMaterialsInnerVideoInfo } from "../models";

export interface CreativeDetailGetV30ResponseDataCreativeVideoMaterialsInner {
  aweme_item_id?: number;
  dpa_video_task_ids?: string[];
  dpa_video_template_type?: CreativeDetailGetV30DataCreativeVideoMaterialsDpaVideoTemplateType;
  image_info?: CreativeDetailGetV30ResponseDataCreativeVideoMaterialsInnerImageInfo;
  image_mode?: CreativeDetailGetV30DataCreativeVideoMaterialsImageMode;
  video_info?: CreativeDetailGetV30ResponseDataCreativeVideoMaterialsInnerVideoInfo;
}

