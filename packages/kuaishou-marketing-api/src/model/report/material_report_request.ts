// Generated from github.com/bububa/kwai-marketing-api/model/report/material_report_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface MaterialReportRequestInit {
  campaign_ids?: KuaishouId[];
  campaign_type?: number;
  unit_ids?: KuaishouId[];
  creative_ids?: KuaishouId[];
  photo_ids?: string[];
  cover_ids?: string[];
  creative_material_type?: number;
  view_type?: number;
}

export class MaterialReportRequest implements PostRequest, MaterialReportRequestInit {
  campaign_ids?: KuaishouId[];
  campaign_type?: number;
  unit_ids?: KuaishouId[];
  creative_ids?: KuaishouId[];
  photo_ids?: string[];
  cover_ids?: string[];
  creative_material_type?: number;
  view_type?: number;

  constructor(init: MaterialReportRequestInit = {}) {
    this.campaign_ids = init.campaign_ids;
    this.campaign_type = init.campaign_type;
    this.unit_ids = init.unit_ids;
    this.creative_ids = init.creative_ids;
    this.photo_ids = init.photo_ids;
    this.cover_ids = init.cover_ids;
    this.creative_material_type = init.creative_material_type;
    this.view_type = init.view_type;
  }

  path() {
    return "v1/report/material_report";
  }

  encode() {
    return jsonMarshal({
      campaign_ids: this.campaign_ids,
      campaign_type: this.campaign_type,
      unit_ids: this.unit_ids,
      creative_ids: this.creative_ids,
      photo_ids: this.photo_ids,
      cover_ids: this.cover_ids,
      creative_material_type: this.creative_material_type,
      view_type: this.view_type,
    });
  }
}

export interface MaterialReportResponse {
  code?: number;
  message?: string;
  request_id?: string;
}
