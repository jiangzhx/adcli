// Generated from github.com/bububa/kwai-marketing-api/model/oauth/approval_list.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface ApprovalListRequestInit {
  secret?: string;
  access_token?: string;
  app_id?: KuaishouId;
  page_no?: number;
  page_size?: number;
}

export class ApprovalListRequest implements PostRequest, ApprovalListRequestInit {
  secret?: string;
  access_token?: string;
  app_id?: KuaishouId;
  page_no?: number;
  page_size?: number;

  constructor(init: ApprovalListRequestInit = {}) {
    this.secret = init.secret;
    this.access_token = init.access_token;
    this.app_id = init.app_id;
    this.page_no = init.page_no;
    this.page_size = init.page_size;
  }

  path() {
    return "oauth2/authorize/approval/list";
  }

  encode() {
    return jsonMarshal({
      secret: this.secret,
      access_token: this.access_token,
      app_id: this.app_id,
      page_no: this.page_no,
      page_size: this.page_size,
    });
  }
}

export interface ApprovalListResponse {
  details?: number[];
  isEnd?: boolean;
}
