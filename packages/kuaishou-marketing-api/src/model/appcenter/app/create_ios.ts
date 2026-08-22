// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/app/create_ios.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface CreateIosRequestInit {
  advertiser_id?: KuaishouId;
  app_icon_url?: string;
  ios_download_url?: string;
}

export class CreateIosRequest implements PostRequest, CreateIosRequestInit {
  advertiser_id?: KuaishouId;
  app_icon_url?: string;
  ios_download_url?: string;

  constructor(init: CreateIosRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.app_icon_url = init.app_icon_url;
    this.ios_download_url = init.ios_download_url;
  }

  path() {
    return "gw/dsp/appcenter/app/create/ios";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      app_icon_url: this.app_icon_url,
      ios_download_url: this.ios_download_url,
    });
  }
}
