// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { EventManagerTrackUrlCreateV2RequestTrackUrlGroupsInner } from "../models";

export interface EventManagerTrackUrlCreateV2Request {
  advertiser_id: number | string;
  assets_id: number | string;
  download_url?: string;
  track_url_groups: EventManagerTrackUrlCreateV2RequestTrackUrlGroupsInner[];
}

