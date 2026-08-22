// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/app/ios_update.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface IosUpdateRequestInit {
  advertiser_id?: KuaishouId;
  app_id?: KuaishouId;
  ios_app_id?: KuaishouId;
  package_id?: KuaishouId;
}

export class IosUpdateRequest implements PostRequest, IosUpdateRequestInit {
  advertiser_id?: KuaishouId;
  app_id?: KuaishouId;
  ios_app_id?: KuaishouId;
  package_id?: KuaishouId;

  constructor(init: IosUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.app_id = init.app_id;
    this.ios_app_id = init.ios_app_id;
    this.package_id = init.package_id;
  }

  path() {
    return "gw/dsp/appcenter/app/ios/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      app_id: this.app_id,
      ios_app_id: this.ios_app_id,
      package_id: this.package_id,
    });
  }
}

export interface IosUpdateResponse {
  result?: boolean;
}
