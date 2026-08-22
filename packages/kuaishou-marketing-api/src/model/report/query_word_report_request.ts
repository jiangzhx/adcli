// Generated from github.com/bububa/kwai-marketing-api/model/report/query_word_report_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface QueryWordReportRequestInit {
  unit_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  word_ids?: KuaishouId[];
  query?: string;
  extend_info?: string[];
}

export class QueryWordReportRequest implements PostRequest, QueryWordReportRequestInit {
  unit_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  word_ids?: KuaishouId[];
  query?: string;
  extend_info?: string[];

  constructor(init: QueryWordReportRequestInit = {}) {
    this.unit_id = init.unit_id;
    this.unit_ids = init.unit_ids;
    this.word_ids = init.word_ids;
    this.query = init.query;
    this.extend_info = init.extend_info;
  }

  path() {
    return "gw/dsp/v1/report/query_word_report";
  }

  encode() {
    return jsonMarshal({
      unit_id: this.unit_id,
      unit_ids: this.unit_ids,
      word_ids: this.word_ids,
      query: this.query,
      extend_info: this.extend_info,
    });
  }
}
