// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { EventManagerEventConfigsGetV2DataEventConfigsDebuggingStatus, EventManagerEventConfigsGetV2DataEventConfigsTrackTypes, EventManagerEventConfigsGetV2ResponseDataEventConfigsInnerAttributionConfiguration, EventManagerEventConfigsGetV2ResponseDataEventConfigsInnerPropertiesInner } from "../models";

export interface EventManagerEventConfigsGetV2ResponseDataEventConfigsInner {
  attribution_configuration?: EventManagerEventConfigsGetV2ResponseDataEventConfigsInnerAttributionConfiguration;
  create_time?: string;
  debugging_status?: EventManagerEventConfigsGetV2DataEventConfigsDebuggingStatus;
  event_cn_name?: string;
  event_id?: number;
  event_type?: string;
  properties?: EventManagerEventConfigsGetV2ResponseDataEventConfigsInnerPropertiesInner[];
  track_types?: EventManagerEventConfigsGetV2DataEventConfigsTrackTypes[];
}

