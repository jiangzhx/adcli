// Generated from tencentad/marketing-api-go-sdk pkg/model/model_dynamic_adcreative_spec.go
// Do not edit manually.

import type { AdNum, LandingPageUrlType, ProductItemsQuantity } from "../model/index";

export interface DynamicAdcreativeSpec {
  product_catalog_id?: number | string;
  product_mode?: AdNum;
  product_source?: string;
  product_exposure_quantity_mode?: ProductItemsQuantity;
  landing_page_url_type?: LandingPageUrlType;
}

