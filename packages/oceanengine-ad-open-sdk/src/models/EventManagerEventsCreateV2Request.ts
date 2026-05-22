// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { EventManagerEventsCreateV2TrackTypes } from "../models";

export interface EventManagerEventsCreateV2Request {
  advertiser_id: number | string;
  asset_id: number | string;
  event_id: number | string;
  track_types: EventManagerEventsCreateV2TrackTypes[];
}

