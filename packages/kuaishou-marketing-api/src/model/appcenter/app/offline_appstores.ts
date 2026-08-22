// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/app/offline_appstores.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface OfflineAppStoresRequestInit {
  advertiser_id?: KuaishouId;
  app_ids?: KuaishouId[];
  offline_stores?: string[];
}

export class OfflineAppStoresRequest implements PostRequest, OfflineAppStoresRequestInit {
  advertiser_id?: KuaishouId;
  app_ids?: KuaishouId[];
  offline_stores?: string[];

  constructor(init: OfflineAppStoresRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.app_ids = init.app_ids;
    this.offline_stores = init.offline_stores;
  }

  path() {
    return "gw/dsp/appcenter/app/offline/appstores";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      app_ids: this.app_ids,
      offline_stores: this.offline_stores,
    });
  }
}
