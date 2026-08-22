// Generated from github.com/bububa/kwai-marketing-api/model/report/word_info_report_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface WordInfoReportRequestInit {
  unit_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  word_ids?: KuaishouId[];
  extend_info?: string[];
}

export class WordInfoReportRequest implements PostRequest, WordInfoReportRequestInit {
  unit_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  word_ids?: KuaishouId[];
  extend_info?: string[];

  constructor(init: WordInfoReportRequestInit = {}) {
    this.unit_id = init.unit_id;
    this.unit_ids = init.unit_ids;
    this.word_ids = init.word_ids;
    this.extend_info = init.extend_info;
  }

  path() {
    return "gw/dsp/v1/report/word_info_report";
  }

  encode() {
    return jsonMarshal({
      unit_id: this.unit_id,
      unit_ids: this.unit_ids,
      word_ids: this.word_ids,
      extend_info: this.extend_info,
    });
  }
}
