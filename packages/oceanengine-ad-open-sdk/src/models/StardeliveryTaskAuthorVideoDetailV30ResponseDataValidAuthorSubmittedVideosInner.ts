// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { StardeliveryTaskAuthorVideoDetailV30DataValidAuthorSubmittedVideosImageMode, StardeliveryTaskAuthorVideoDetailV30DataValidAuthorSubmittedVideosStarMaterialPurchaseMethod, StardeliveryTaskAuthorVideoDetailV30DataValidAuthorSubmittedVideosStarVideoDeliveryStatus, StardeliveryTaskAuthorVideoDetailV30DataValidAuthorSubmittedVideosStarVideoReviewResult, StardeliveryTaskAuthorVideoDetailV30DataValidAuthorSubmittedVideosStarVideoStatus, StardeliveryTaskAuthorVideoDetailV30ResponseDataValidAuthorSubmittedVideosInnerMaterialProperties } from "../models";

export interface StardeliveryTaskAuthorVideoDetailV30ResponseDataValidAuthorSubmittedVideosInner {
  aweme_id?: string;
  aweme_name?: string;
  duration?: number;
  image_mode?: StardeliveryTaskAuthorVideoDetailV30DataValidAuthorSubmittedVideosImageMode;
  isv_id?: number;
  isv_name?: string;
  item_id?: number;
  material_id?: number;
  material_properties?: StardeliveryTaskAuthorVideoDetailV30ResponseDataValidAuthorSubmittedVideosInnerMaterialProperties;
  star_material_creative_orient?: string;
  star_material_display_format?: string;
  star_material_purchase_method?: StardeliveryTaskAuthorVideoDetailV30DataValidAuthorSubmittedVideosStarMaterialPurchaseMethod;
  star_video_ban_reason_detail?: string;
  star_video_cus_approval_time?: string;
  star_video_delivery_status?: StardeliveryTaskAuthorVideoDetailV30DataValidAuthorSubmittedVideosStarVideoDeliveryStatus;
  star_video_publish_time?: string;
  star_video_relate_promotion_count?: number;
  star_video_review_result?: StardeliveryTaskAuthorVideoDetailV30DataValidAuthorSubmittedVideosStarVideoReviewResult;
  star_video_scheduled_publish_time?: string;
  star_video_status?: StardeliveryTaskAuthorVideoDetailV30DataValidAuthorSubmittedVideosStarVideoStatus;
  video_cover_id?: string;
  video_cover_url?: string;
  video_id?: string;
  video_play_link?: string;
  video_title?: string;
}

