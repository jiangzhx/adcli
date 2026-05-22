// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StardeliveryTaskAuthorVideoDetailV30FilteringExcludeMaterialAssessment, StardeliveryTaskAuthorVideoDetailV30FilteringStarMaterialPurchaseMethod, StardeliveryTaskAuthorVideoDetailV30FilteringStarVideoDeliveryStatus, StardeliveryTaskAuthorVideoDetailV30FilteringStarVideoMaterialAssessment } from "../models";

export interface StardeliveryTaskAuthorVideoDetailV30Filtering {
  aweme_ids?: string[];
  exclude_aweme_ids?: string[];
  exclude_material_assessment?: StardeliveryTaskAuthorVideoDetailV30FilteringExcludeMaterialAssessment[];
  material_ids?: number | string[];
  star_material_purchase_method?: StardeliveryTaskAuthorVideoDetailV30FilteringStarMaterialPurchaseMethod;
  star_video_delivery_status?: StardeliveryTaskAuthorVideoDetailV30FilteringStarVideoDeliveryStatus;
  star_video_material_assessment?: StardeliveryTaskAuthorVideoDetailV30FilteringStarVideoMaterialAssessment[];
  video_publish_end_time?: string;
  video_publish_start_time?: string;
}

