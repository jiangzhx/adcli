// Generated from oceanengine/ad_open_sdk_go models/model_event_manager_track_url_update_v2_request.go
// Do not edit manually.

import type { EventManagerTrackUrlUpdateV2RequestTrackUrlGroup } from "../models/index";

export interface EventManagerTrackUrlUpdateV2Request {
  advertiser_id: number | string;
  asset_id: number | string;
  download_url?: string;
  track_url_group: EventManagerTrackUrlUpdateV2RequestTrackUrlGroup;
}

