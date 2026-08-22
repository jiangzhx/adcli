// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/app/create_android.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { App, AppPrivacyInfo, PackageInfo } from "./app";

export interface CreateAndroidRequestInit {
  advertiser_id?: KuaishouId;
  app_info?: App;
  app_privacy_info?: AppPrivacyInfo;
  package_info?: PackageInfo;
}

export class CreateAndroidRequest implements PostRequest, CreateAndroidRequestInit {
  advertiser_id?: KuaishouId;
  app_info?: App;
  app_privacy_info?: AppPrivacyInfo;
  package_info?: PackageInfo;

  constructor(init: CreateAndroidRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.app_info = init.app_info;
    this.app_privacy_info = init.app_privacy_info;
    this.package_info = init.package_info;
  }

  path() {
    return "gw/dsp/appcenter/app/create/android";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      app_info: this.app_info,
      app_privacy_info: this.app_privacy_info,
      package_info: this.package_info,
    });
  }
}
