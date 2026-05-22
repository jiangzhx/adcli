// Generated from oceanengine/ad_open_sdk_go models/model_event_manager_available_events_get_v2_response_data_event_configs_inner.go
// Do not edit manually.

import type { EventManagerAvailableEventsGetV2DataEventConfigsTrackTypes, EventManagerAvailableEventsGetV2ResponseDataEventConfigsInnerPropertiesInner } from "../models/index";

export interface EventManagerAvailableEventsGetV2ResponseDataEventConfigsInner {
  description?: string;
  event_cn_name?: string;
  event_id?: number | string;
  event_type?: string;
  properties?: EventManagerAvailableEventsGetV2ResponseDataEventConfigsInnerPropertiesInner[];
  track_types?: EventManagerAvailableEventsGetV2DataEventConfigsTrackTypes[];
}

