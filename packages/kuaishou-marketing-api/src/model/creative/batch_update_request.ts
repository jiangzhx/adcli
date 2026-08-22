// Generated from github.com/bububa/kwai-marketing-api/model/creative/batch_update_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { Creative } from "./creative";

export interface BatchUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  click_track_url?: string;
  impression_url?: string;
  ad_photo_played_t3s_url?: string;
  actionbar_click_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  creatives?: Creative[];
}

export class BatchUpdateRequest implements PostRequest, BatchUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  click_track_url?: string;
  impression_url?: string;
  ad_photo_played_t3s_url?: string;
  actionbar_click_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  creatives?: Creative[];

  constructor(init: BatchUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_id = init.unit_id;
    this.click_track_url = init.click_track_url;
    this.impression_url = init.impression_url;
    this.ad_photo_played_t3s_url = init.ad_photo_played_t3s_url;
    this.actionbar_click_url = init.actionbar_click_url;
    this.creative_category = init.creative_category;
    this.creative_tag = init.creative_tag;
    this.creatives = init.creatives;
  }

  path() {
    return "v2/creative/batch/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_id: this.unit_id,
      click_track_url: this.click_track_url,
      impression_url: this.impression_url,
      ad_photo_played_t3s_url: this.ad_photo_played_t3s_url,
      actionbar_click_url: this.actionbar_click_url,
      creative_category: this.creative_category,
      creative_tag: this.creative_tag,
      creatives: this.creatives,
    });
  }
}
