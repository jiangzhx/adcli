// Generated from github.com/bububa/kwai-marketing-api/model/dsp/unit/monitor_urls.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface GetMonitorURLsRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];
}

export class GetMonitorURLsRequest implements PostRequest, GetMonitorURLsRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];

  constructor(init: GetMonitorURLsRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_ids = init.unit_ids;
  }

  path() {
    return "gw/dsp/v3/unit/getMonitorUrls";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_ids: this.unit_ids,
    });
  }
}

export interface GetMonitorURLsResponse {
  unit_monitor_urls?: UnitMonitorURL[];
}

export interface BatchUpdateMonitorURLsRequestInit {
  advertiser_id?: KuaishouId;
  unit_monitor_urls?: UnitMonitorURL[];
}

export class BatchUpdateMonitorURLsRequest implements PostRequest, BatchUpdateMonitorURLsRequestInit {
  advertiser_id?: KuaishouId;
  unit_monitor_urls?: UnitMonitorURL[];

  constructor(init: BatchUpdateMonitorURLsRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_monitor_urls = init.unit_monitor_urls;
  }

  path() {
    return "gw/dsp/v3/unit/batchUpdateMonitorUrls";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_monitor_urls: this.unit_monitor_urls,
    });
  }
}

export interface UnitMonitorURL {
  unit_id?: KuaishouId;
  is_dpa?: boolean;
  exist_valid_creative?: boolean;
  actionbar_click_url?: string;
  click_url?: string;
  impression_url?: string;
  live_track_url?: string;
  ad_photo_played_t3s_url?: string;
  result?: boolean;
  message?: string;
}
