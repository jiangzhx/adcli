// Generated from github.com/bububa/kwai-marketing-api/model/tool/operation_record_list_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface OperationRecordListRequestInit {
  advertiser_id?: KuaishouId;
  operation_type?: number;
  operation_target?: number;
  role_type?: number;
  page?: number;
  page_size?: number;
  start_date?: string;
  end_date?: string;
}

export class OperationRecordListRequest implements PostRequest, OperationRecordListRequestInit {
  advertiser_id?: KuaishouId;
  operation_type?: number;
  operation_target?: number;
  role_type?: number;
  page?: number;
  page_size?: number;
  start_date?: string;
  end_date?: string;

  constructor(init: OperationRecordListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.operation_type = init.operation_type;
    this.operation_target = init.operation_target;
    this.role_type = init.role_type;
    this.page = init.page;
    this.page_size = init.page_size;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
  }

  path() {
    return "v1/tool/operation_record/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      operation_type: this.operation_type,
      operation_target: this.operation_target,
      role_type: this.role_type,
      page: this.page,
      page_size: this.page_size,
      start_date: this.start_date,
      end_date: this.end_date,
    });
  }
}
