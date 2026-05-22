// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_ecommerce_order_update_request.go
// Do not edit manually.

import type { ExpressCompany } from "../v3/index";

export interface EcommerceOrderUpdateRequest {
  account_id?: number | string;
  ecommerce_order_id?: string;
  delivery_tracking_number?: string;
  express_company?: ExpressCompany;
}

