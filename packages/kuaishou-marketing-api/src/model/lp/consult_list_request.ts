// Generated from github.com/bububa/kwai-marketing-api/model/lp/consult_list_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import { jsonMarshal } from "../types";

export interface ConsultListRequestInit {
  page?: number;
  page_size?: number;
}

export class ConsultListRequest implements PostRequest, ConsultListRequestInit {
  page?: number;
  page_size?: number;

  constructor(init: ConsultListRequestInit = {}) {
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v2/lp/consult/list";
  }

  encode() {
    return jsonMarshal({
      page: this.page,
      page_size: this.page_size,
    });
  }
}
