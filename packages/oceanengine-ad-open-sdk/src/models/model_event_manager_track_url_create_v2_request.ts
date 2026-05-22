// Generated from oceanengine/ad_open_sdk_go models/model_event_manager_track_url_create_v2_request.go
// Do not edit manually.

import type { EventManagerTrackUrlCreateV2RequestTrackUrlGroupsInner } from "../models/index";

export interface EventManagerTrackUrlCreateV2Request {
  advertiser_id: number | string;
  assets_id: number | string;
  download_url?: string;
  track_url_groups: EventManagerTrackUrlCreateV2RequestTrackUrlGroupsInner[];
}

