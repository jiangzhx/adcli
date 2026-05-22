// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserDeliveryPkgGetV30DataDeliveryPkgStatus, AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgNecessaryCombine, AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgPermission, AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgUnnecessaryCombinesInner } from "../models";

export interface AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkg {
  config_id: number | string;
  industry_id: number | string[];
  industry_name: string[];
  necessary_combine?: AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgNecessaryCombine;
  permission: AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgPermission;
  pkg_id?: number | string;
  product_name: string;
  status: AdvertiserDeliveryPkgGetV30DataDeliveryPkgStatus;
  unnecessary_combines?: AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgUnnecessaryCombinesInner[];
}

