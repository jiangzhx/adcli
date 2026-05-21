// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AdvertiserDeliveryPkgGetV30DataDeliveryPkgStatus, AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgNecessaryCombine, AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgPermission, AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgUnnecessaryCombinesInner } from "../models";

export interface AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkg {
  config_id: number;
  industry_id: number[];
  industry_name: string[];
  necessary_combine?: AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgNecessaryCombine;
  permission: AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgPermission;
  pkg_id?: number;
  product_name: string;
  status: AdvertiserDeliveryPkgGetV30DataDeliveryPkgStatus;
  unnecessary_combines?: AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgUnnecessaryCombinesInner[];
}

