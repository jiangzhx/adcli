// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserDeliveryPkgSubmitV30RequestDeliveryPkgNecessaryCombine, AdvertiserDeliveryPkgSubmitV30RequestDeliveryPkgUnnecessaryCombinesInner } from "../models";

export interface AdvertiserDeliveryPkgSubmitV30RequestDeliveryPkg {
  config_id: number | string;
  necessary_combine?: AdvertiserDeliveryPkgSubmitV30RequestDeliveryPkgNecessaryCombine;
  pkg_id: number | string;
  product_name: string;
  unnecessary_combines?: AdvertiserDeliveryPkgSubmitV30RequestDeliveryPkgUnnecessaryCombinesInner[];
}

