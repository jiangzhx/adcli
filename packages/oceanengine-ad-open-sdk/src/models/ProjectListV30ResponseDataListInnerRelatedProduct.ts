// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ProjectListV30DataListRelatedProductProductSetting, ProjectListV30ResponseDataListInnerRelatedProductProductsInner } from "../models";

export interface ProjectListV30ResponseDataListInnerRelatedProduct {
  product_id?: string;
  product_platform_id?: number | string;
  product_setting?: ProjectListV30DataListRelatedProductProductSetting;
  products?: ProjectListV30ResponseDataListInnerRelatedProductProductsInner[];
  unique_product_id?: number | string;
}

