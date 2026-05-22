// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_delivery_spec.go
// Do not edit manually.

import type { DeliveryDetailStruct, ExpressCompany } from "../v3/index";

export interface DeliverySpec {
  delivery_tracking_number?: string;
  express_company?: ExpressCompany;
  delivery_info_list?: DeliveryDetailStruct[];
}

