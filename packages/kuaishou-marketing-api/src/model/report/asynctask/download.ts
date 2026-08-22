// Generated from github.com/bububa/kwai-marketing-api/model/report/asynctask/download.go
// Do not edit manually.

import type { GetRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { encodeQuery } from "../../types";

export interface DownloadRequestInit {
  advertiser_id?: KuaishouId;
  task_id?: KuaishouId;
}

export class DownloadRequest implements GetRequest, DownloadRequestInit {
  advertiser_id?: KuaishouId;
  task_id?: KuaishouId;

  constructor(init: DownloadRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.task_id = init.task_id;
  }

  path() {
    return "v1/async_task/download";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
      task_id: this.task_id == null ? undefined : String(this.task_id),
    });
  }
}
