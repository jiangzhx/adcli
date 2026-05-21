// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAwemeVideoGetV10DataVideoListIsImage, QianchuanAwemeVideoGetV10DataVideoListIsRecommend, QianchuanAwemeVideoGetV10ResponseDataVideoListInnerProductInfo } from "../models";

export interface QianchuanAwemeVideoGetV10ResponseDataVideoListInner {
  aweme_item_id?: number;
  comment_cnt?: number;
  create_time?: string;
  duration?: number;
  height?: number;
  img_url?: string[];
  is_ai_create?: boolean;
  is_image?: QianchuanAwemeVideoGetV10DataVideoListIsImage;
  is_recommend?: QianchuanAwemeVideoGetV10DataVideoListIsRecommend;
  labels?: string[];
  like_cnt?: number;
  product_info?: QianchuanAwemeVideoGetV10ResponseDataVideoListInnerProductInfo;
  share_cnt?: number;
  title?: string;
  url?: string;
  video_cover_url?: string;
  view_cnt?: number;
  width?: number;
}

