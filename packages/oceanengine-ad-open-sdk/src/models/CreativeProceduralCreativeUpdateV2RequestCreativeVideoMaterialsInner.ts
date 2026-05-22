// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { CreativeProceduralCreativeUpdateV2CreativeVideoMaterialsDpaVideoTemplateType, CreativeProceduralCreativeUpdateV2CreativeVideoMaterialsImageMode, CreativeProceduralCreativeUpdateV2RequestCreativeVideoMaterialsInnerImageInfo, CreativeProceduralCreativeUpdateV2RequestCreativeVideoMaterialsInnerVideoInfo } from "../models";

export interface CreativeProceduralCreativeUpdateV2RequestCreativeVideoMaterialsInner {
  dpa_video_task_ids?: string[];
  dpa_video_template_type?: CreativeProceduralCreativeUpdateV2CreativeVideoMaterialsDpaVideoTemplateType;
  image_info?: CreativeProceduralCreativeUpdateV2RequestCreativeVideoMaterialsInnerImageInfo;
  image_mode?: CreativeProceduralCreativeUpdateV2CreativeVideoMaterialsImageMode;
  material_id?: number;
  video_info?: CreativeProceduralCreativeUpdateV2RequestCreativeVideoMaterialsInnerVideoInfo;
}

