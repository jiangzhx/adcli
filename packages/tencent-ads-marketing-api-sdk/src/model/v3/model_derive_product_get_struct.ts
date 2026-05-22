// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_derive_product_get_struct.go
// Do not edit manually.

import type { MaterialItemStruct } from "../v3/index";

export interface DeriveProductGetStruct {
  derive_component_id?: number | string;
  origin_component_id?: number | string;
  template_id?: number | string;
  derive_material?: MaterialItemStruct;
  origin_material?: MaterialItemStruct[];
}

