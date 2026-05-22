// Generated from oceanengine/ad_open_sdk_go models/model_event_manager_event_configs_get_v2_response_data_event_configs_inner.go
// Do not edit manually.

import type { EventManagerEventConfigsGetV2DataEventConfigsDebuggingStatus, EventManagerEventConfigsGetV2DataEventConfigsTrackTypes, EventManagerEventConfigsGetV2ResponseDataEventConfigsInnerAttributionConfiguration, EventManagerEventConfigsGetV2ResponseDataEventConfigsInnerPropertiesInner } from "../models/index";

export interface EventManagerEventConfigsGetV2ResponseDataEventConfigsInner {
  attribution_configuration?: EventManagerEventConfigsGetV2ResponseDataEventConfigsInnerAttributionConfiguration;
  create_time?: string;
  debugging_status?: EventManagerEventConfigsGetV2DataEventConfigsDebuggingStatus;
  event_cn_name?: string;
  event_id?: number | string;
  event_type?: string;
  properties?: EventManagerEventConfigsGetV2ResponseDataEventConfigsInnerPropertiesInner[];
  track_types?: EventManagerEventConfigsGetV2DataEventConfigsTrackTypes[];
}

