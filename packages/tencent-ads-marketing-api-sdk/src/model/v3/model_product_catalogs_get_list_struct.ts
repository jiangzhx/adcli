// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_product_catalogs_get_list_struct.go
// Do not edit manually.

import type { CatalogStatus, CatalogVertical, DeepLinkEnabled, DpaApiCatalogType, ProductRecommendMethod } from "../v3/index";

export interface ProductCatalogsGetListStruct {
  product_catalog_id?: number | string;
  product_catalog_name?: string;
  product_catalog_type?: DpaApiCatalogType;
  product_catalog_vertical?: CatalogVertical;
  product_catalog_status?: CatalogStatus;
  product_recommend_methods?: ProductRecommendMethod[];
  deep_link_enabled?: DeepLinkEnabled;
}

