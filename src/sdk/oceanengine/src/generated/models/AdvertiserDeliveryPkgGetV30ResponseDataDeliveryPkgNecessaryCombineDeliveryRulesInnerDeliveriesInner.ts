// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AdvertiserDeliveryPkgGetV30DataDeliveryPkgNecessaryCombineDeliveryRulesDeliveriesStatus, AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgNecessaryCombineDeliveryRulesInnerDeliveriesInnerAttachmentsInner } from "../models";

export interface AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgNecessaryCombineDeliveryRulesInnerDeliveriesInner {
  attachments: AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgNecessaryCombineDeliveryRulesInnerDeliveriesInnerAttachmentsInner[];
  qual_type: number;
  qual_type_name: string;
  qualification_id?: number;
  reject_reason?: string;
  status: AdvertiserDeliveryPkgGetV30DataDeliveryPkgNecessaryCombineDeliveryRulesDeliveriesStatus;
}

