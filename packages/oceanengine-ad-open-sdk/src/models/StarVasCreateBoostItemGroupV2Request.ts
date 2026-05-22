// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarVasCreateBoostItemGroupV2BoostAction, StarVasCreateBoostItemGroupV2BoostType, StarVasCreateBoostItemGroupV2RequestCustomAudienceTag } from "../models";

export interface StarVasCreateBoostItemGroupV2Request {
  bid_amount?: number;
  boost_action: StarVasCreateBoostItemGroupV2BoostAction;
  boost_amount: number;
  boost_hours?: number;
  boost_type: StarVasCreateBoostItemGroupV2BoostType;
  custom_audience_tag?: StarVasCreateBoostItemGroupV2RequestCustomAudienceTag;
  item_ids?: number | string[];
  name: string;
  order_ids?: number | string[];
  pack_id?: number | string;
  star_id: number | string;
}

