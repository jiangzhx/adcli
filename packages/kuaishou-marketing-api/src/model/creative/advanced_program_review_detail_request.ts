// Generated from github.com/bububa/kwai-marketing-api/model/creative/advanced_program_review_detail_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal, encodeQuery } from "../types";

export interface AdvancedProgramReviewDetailRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];
}

export class AdvancedProgramReviewDetailRequest implements GetRequest, AdvancedProgramReviewDetailRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];

  constructor(init: AdvancedProgramReviewDetailRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_ids = init.unit_ids;
  }

  path() {
    return "v2/creative/advanced/program/review_detail";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
      unit_ids: this.unit_ids?.length ? new TextDecoder().decode(jsonMarshal(this.unit_ids)) : undefined,
    });
  }
}
