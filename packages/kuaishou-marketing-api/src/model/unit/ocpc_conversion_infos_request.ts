// Generated from github.com/bububa/kwai-marketing-api/model/unit/ocpc_conversion_infos_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface OcpcConversionInfosRequestInit {
  advertiser_id?: KuaishouId;
  campaign_type?: number;
  app_id?: KuaishouId;
}

export class OcpcConversionInfosRequest implements GetRequest, OcpcConversionInfosRequestInit {
  advertiser_id?: KuaishouId;
  campaign_type?: number;
  app_id?: KuaishouId;

  constructor(init: OcpcConversionInfosRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_type = init.campaign_type;
    this.app_id = init.app_id;
  }

  path() {
    return "v1/ad_unit/ocpc/conversion_infos";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
      campaign_type: this.campaign_type == null ? undefined : String(this.campaign_type),
      app_id: this.app_id == null ? undefined : String(this.app_id),
    });
  }
}
