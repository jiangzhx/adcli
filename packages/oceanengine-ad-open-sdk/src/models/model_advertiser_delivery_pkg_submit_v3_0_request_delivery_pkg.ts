// Generated from oceanengine/ad_open_sdk_go models/model_advertiser_delivery_pkg_submit_v3_0_request_delivery_pkg.go
// Do not edit manually.

import type { AdvertiserDeliveryPkgSubmitV30RequestDeliveryPkgNecessaryCombine, AdvertiserDeliveryPkgSubmitV30RequestDeliveryPkgUnnecessaryCombinesInner } from "../models/index";

export interface AdvertiserDeliveryPkgSubmitV30RequestDeliveryPkg {
  config_id: number | string;
  necessary_combine?: AdvertiserDeliveryPkgSubmitV30RequestDeliveryPkgNecessaryCombine;
  pkg_id: number | string;
  product_name: string;
  unnecessary_combines?: AdvertiserDeliveryPkgSubmitV30RequestDeliveryPkgUnnecessaryCombinesInner[];
}

