// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/app/retry_build_sub_package.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface RetryBuildSubPackageRequestInit {
  advertiser_id?: KuaishouId;
  app_id?: KuaishouId[];
}

export class RetryBuildSubPackageRequest implements PostRequest, RetryBuildSubPackageRequestInit {
  advertiser_id?: KuaishouId;
  app_id?: KuaishouId[];

  constructor(init: RetryBuildSubPackageRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.app_id = init.app_id;
  }

  path() {
    return "gw/dsp/appcenter/app/retryBuildSubPackage";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      app_id: this.app_id,
    });
  }
}

export interface RetryBuildSubPackageResponse {
  retry_cnt?: number;
}
