// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CreativeProceduralCreativeUpdateV2CreativeImageMaterialsImageMode, CreativeProceduralCreativeUpdateV2RequestCreativeImageMaterialsInnerImageInfoInner, CreativeProceduralCreativeUpdateV2RequestCreativeImageMaterialsInnerTemplateImage } from "../models";

export interface CreativeProceduralCreativeUpdateV2RequestCreativeImageMaterialsInner {
  image_info?: CreativeProceduralCreativeUpdateV2RequestCreativeImageMaterialsInnerImageInfoInner[];
  image_mode?: CreativeProceduralCreativeUpdateV2CreativeImageMaterialsImageMode;
  material_id?: number | string;
  template_image?: CreativeProceduralCreativeUpdateV2RequestCreativeImageMaterialsInnerTemplateImage;
}

