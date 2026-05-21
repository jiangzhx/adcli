// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AdvertiserDeliveryPkgGetV30DataDeliveryPkgUnnecessaryCombinesDeliveryRulesDeliveriesStatus, AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgUnnecessaryCombinesInnerDeliveryRulesInnerDeliveriesInnerAttachmentsInner } from "../models";

export interface AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgUnnecessaryCombinesInnerDeliveryRulesInnerDeliveriesInner {
  attachments: AdvertiserDeliveryPkgGetV30ResponseDataDeliveryPkgUnnecessaryCombinesInnerDeliveryRulesInnerDeliveriesInnerAttachmentsInner[];
  qual_type: number;
  qual_type_name: string;
  qualification_id?: number;
  reject_reason?: string;
  status: AdvertiserDeliveryPkgGetV30DataDeliveryPkgUnnecessaryCombinesDeliveryRulesDeliveriesStatus;
}

