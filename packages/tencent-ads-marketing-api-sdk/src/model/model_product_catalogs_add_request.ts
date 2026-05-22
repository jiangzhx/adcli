// Generated from tencentad/marketing-api-go-sdk pkg/model/model_product_catalogs_add_request.go
// Do not edit manually.

import type { CatalogIndustry, CatalogScale, CatalogType } from "../model/index";

export interface ProductCatalogsAddRequest {
  account_id?: number | string;
  catalog_name?: string;
  catalog_scale_type?: CatalogScale;
  catalog_type?: CatalogType;
  industry_type?: CatalogIndustry;
}

