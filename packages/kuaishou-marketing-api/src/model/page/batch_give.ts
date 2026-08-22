// Generated from github.com/bububa/kwai-marketing-api/model/page/batch_give.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface BatchGiveRequestInit {
  advertiser_id?: KuaishouId;
  give_account_ids?: KuaishouId[];
  page_ids?: KuaishouId[];
}

export class BatchGiveRequest implements PostRequest, BatchGiveRequestInit {
  advertiser_id?: KuaishouId;
  give_account_ids?: KuaishouId[];
  page_ids?: KuaishouId[];

  constructor(init: BatchGiveRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.give_account_ids = init.give_account_ids;
    this.page_ids = init.page_ids;
  }

  path() {
    return "gw/magicsite/v1/page/batchGive";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      give_account_ids: this.give_account_ids,
      page_ids: this.page_ids,
    });
  }
}

export interface BatchGiveResponse {
  code?: number;
  error_msg?: string;
}
