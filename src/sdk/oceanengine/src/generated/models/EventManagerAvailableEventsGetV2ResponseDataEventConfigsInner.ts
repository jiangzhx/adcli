// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { EventManagerAvailableEventsGetV2DataEventConfigsTrackTypes, EventManagerAvailableEventsGetV2ResponseDataEventConfigsInnerPropertiesInner } from "../models";

export interface EventManagerAvailableEventsGetV2ResponseDataEventConfigsInner {
  description?: string;
  event_cn_name?: string;
  event_id?: number;
  event_type?: string;
  properties?: EventManagerAvailableEventsGetV2ResponseDataEventConfigsInnerPropertiesInner[];
  track_types?: EventManagerAvailableEventsGetV2DataEventConfigsTrackTypes[];
}

