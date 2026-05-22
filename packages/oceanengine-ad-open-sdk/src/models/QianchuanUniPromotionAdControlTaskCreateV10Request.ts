// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanUniPromotionAdControlTaskCreateV10DeepExternalAction, QianchuanUniPromotionAdControlTaskCreateV10ExternalAction, QianchuanUniPromotionAdControlTaskCreateV10MaterialType, QianchuanUniPromotionAdControlTaskCreateV10RequestAudience, QianchuanUniPromotionAdControlTaskCreateV10Scene, QianchuanUniPromotionAdControlTaskCreateV10SmartBidType } from "../models";

export interface QianchuanUniPromotionAdControlTaskCreateV10Request {
  ad_id: number | string;
  advertiser_id: number | string;
  audience?: QianchuanUniPromotionAdControlTaskCreateV10RequestAudience;
  bid?: number;
  budget?: number;
  deep_external_action?: QianchuanUniPromotionAdControlTaskCreateV10DeepExternalAction;
  duration?: number;
  external_action?: QianchuanUniPromotionAdControlTaskCreateV10ExternalAction;
  material_ids?: number | string[];
  material_type?: QianchuanUniPromotionAdControlTaskCreateV10MaterialType;
  name?: string;
  roi2_goal?: number;
  room_material_id?: number | string;
  scene: QianchuanUniPromotionAdControlTaskCreateV10Scene;
  smart_bid_type?: QianchuanUniPromotionAdControlTaskCreateV10SmartBidType;
}

