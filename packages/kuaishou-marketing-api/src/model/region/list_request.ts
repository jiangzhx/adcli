// Generated from github.com/bububa/kwai-marketing-api/model/region/list_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import { encodeQuery } from "../types";

export interface ListRequestInit {
  return?: "v1/region/list";
}

export class ListRequest implements GetRequest, ListRequestInit {
  return?: "v1/region/list";

  constructor(init: ListRequestInit = {}) {
    this.return = init.return;
  }

  path() {
    return "v1/region/list";
  }

  encode() {
    return encodeQuery({
      return: this.return == null ? undefined : String(this.return),
    });
  }
}
