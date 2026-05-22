// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { DeliverySpec, EcommerceOrderStatus } from "../models";

export interface EcommerceOrderListStruct {
  account_id?: number | string;
  ecommerce_order_id?: string;
  customized_page_name?: string;
  commodity_package_detail?: string;
  quantity?: number;
  price?: number;
  total_price?: number;
  ecommerce_order_time?: string;
  ecommerce_order_status?: EcommerceOrderStatus;
  user_name?: string;
  user_phone?: string;
  user_province?: string;
  user_city?: string;
  user_area?: string;
  user_address?: string;
  user_ip?: string;
  user_message?: string;
  destination_url?: string;
  adgroup_id?: number | string;
  adgroup_name?: string;
  from_account_id?: number | string;
  delivery_spec?: DeliverySpec;
}

