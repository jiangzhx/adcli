// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/app/update_ios.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface UpdateIosRequestInit {
  advertiser_id?: KuaishouId;
  app_id?: KuaishouId;
  package_id?: KuaishouId;
  app_icon_url?: string;
  ios_download_url?: string;
}

export class UpdateIosRequest implements PostRequest, UpdateIosRequestInit {
  advertiser_id?: KuaishouId;
  app_id?: KuaishouId;
  package_id?: KuaishouId;
  app_icon_url?: string;
  ios_download_url?: string;

  constructor(init: UpdateIosRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.app_id = init.app_id;
    this.package_id = init.package_id;
    this.app_icon_url = init.app_icon_url;
    this.ios_download_url = init.ios_download_url;
  }

  path() {
    return "gw/dsp/appcenter/app/update/ios";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      app_id: this.app_id,
      package_id: this.package_id,
      app_icon_url: this.app_icon_url,
      ios_download_url: this.ios_download_url,
    });
  }
}
