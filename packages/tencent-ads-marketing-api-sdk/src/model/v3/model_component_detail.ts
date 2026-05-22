// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_component_detail.go
// Do not edit manually.

import type { BrandDetail, ImageListItem, JumpInfoComponentDetail, VideoComponentDetailStruct } from "../v3/index";

export interface ComponentDetail {
  jump_info?: JumpInfoComponentDetail;
  image_list?: ImageListItem[];
  video_list?: VideoComponentDetailStruct[];
  brand?: BrandDetail;
}

