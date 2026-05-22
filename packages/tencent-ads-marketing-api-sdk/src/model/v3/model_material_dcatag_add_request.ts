// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_material_dcatag_add_request.go
// Do not edit manually.

import type { Dactag, ImageItem, MarketingAssetOuterSpecV1, MarketingTargetType, MediaItem } from "../v3/index";

export interface MaterialDcatagAddRequest {
  account_id?: number | string;
  image_list?: ImageItem[];
  media_list?: MediaItem[];
  marketing_asset_id?: number | string;
  marketing_target_type?: MarketingTargetType;
  marketing_asset_outer_spec?: MarketingAssetOuterSpecV1;
  dcatag_list?: Dactag[];
}

