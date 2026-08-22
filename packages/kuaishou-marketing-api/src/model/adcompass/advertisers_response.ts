// Generated from github.com/bububa/kwai-marketing-api/model/adcompass/advertisers_response.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface AdvertisersResponse {
  details?: Advertiser[];
}

export interface Advertiser {
  corporation_name?: string;
  advertiser_name?: string;
  advertiser_id?: KuaishouId;
}
