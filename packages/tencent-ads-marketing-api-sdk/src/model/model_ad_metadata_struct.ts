// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ad_metadata_struct.go
// Do not edit manually.

import type { BidMode, ProductInfoStruct, PromotedObjectType } from "../model/index";

export interface AdMetadataStruct {
  product_infos?: ProductInfoStruct[];
  site_sets?: string[];
  automatic_site_enabled?: boolean;
  promoted_object_type?: PromotedObjectType;
  bid_mode?: BidMode;
}

