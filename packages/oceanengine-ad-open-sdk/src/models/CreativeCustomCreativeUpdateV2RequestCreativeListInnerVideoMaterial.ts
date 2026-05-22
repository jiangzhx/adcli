// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CreativeCustomCreativeUpdateV2CreativeListVideoMaterialDpaVideoTemplateType, CreativeCustomCreativeUpdateV2RequestCreativeListInnerVideoMaterialImageInfo, CreativeCustomCreativeUpdateV2RequestCreativeListInnerVideoMaterialVideoInfo } from "../models";

export interface CreativeCustomCreativeUpdateV2RequestCreativeListInnerVideoMaterial {
  aweme_item_id?: number | string;
  dpa_video_task_ids?: string[];
  dpa_video_template_type?: CreativeCustomCreativeUpdateV2CreativeListVideoMaterialDpaVideoTemplateType;
  image_info?: CreativeCustomCreativeUpdateV2RequestCreativeListInnerVideoMaterialImageInfo;
  video_info?: CreativeCustomCreativeUpdateV2RequestCreativeListInnerVideoMaterialVideoInfo;
}

