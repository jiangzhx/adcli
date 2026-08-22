// Generated from github.com/bububa/kwai-marketing-api/model/wordinfo/update_status.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface UpdateStatusRequestInit {
  advertiser_id?: KuaishouId;
  word_info_ids?: KuaishouId[];
  put_status?: number;
}

export class UpdateStatusRequest implements PostRequest, UpdateStatusRequestInit {
  advertiser_id?: KuaishouId;
  word_info_ids?: KuaishouId[];
  put_status?: number;

  constructor(init: UpdateStatusRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.word_info_ids = init.word_info_ids;
    this.put_status = init.put_status;
  }

  path() {
    return "v2/word_info/update/status";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      word_info_ids: this.word_info_ids,
      put_status: this.put_status,
    });
  }
}

export interface UpdateStatusResponse {
  word_info_ids?: KuaishouId[];
}
