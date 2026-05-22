// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { CatalogScale, DpaApiCatalogType, DpaCatalogIndustry } from "../models";

export interface ProductCatalogsAddRequest {
  account_id?: number | string;
  catalog_name?: string;
  catalog_scale_type?: CatalogScale;
  catalog_type?: DpaApiCatalogType;
  industry_type?: DpaCatalogIndustry;
  catalog_version?: number;
  business_unit_id?: number | string;
}

