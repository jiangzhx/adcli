// Generated from oceanengine/ad_open_sdk_go models/model_event_manager_events_create_v2_request.go
// Do not edit manually.

import type { EventManagerEventsCreateV2TrackTypes } from "../models/index";

export interface EventManagerEventsCreateV2Request {
  advertiser_id: number | string;
  asset_id: number | string;
  event_id: number | string;
  track_types: EventManagerEventsCreateV2TrackTypes[];
}

