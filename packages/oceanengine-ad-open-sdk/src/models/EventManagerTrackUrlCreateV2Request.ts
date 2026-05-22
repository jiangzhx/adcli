// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { EventManagerTrackUrlCreateV2RequestTrackUrlGroupsInner } from "../models";

export interface EventManagerTrackUrlCreateV2Request {
  advertiser_id: number;
  assets_id: number;
  download_url?: string;
  track_url_groups: EventManagerTrackUrlCreateV2RequestTrackUrlGroupsInner[];
}

