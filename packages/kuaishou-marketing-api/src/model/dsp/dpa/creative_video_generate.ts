// Generated from github.com/bububa/kwai-marketing-api/model/dsp/dpa/creative_video_generate.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { CreativeTemplate } from "./creative_template_list";

export interface CreativeVideoGenerateRequestInit {
  outer_id?: string;
  templates?: CreativeTemplate[];
  advertiser_id?: KuaishouId;
  library_id?: KuaishouId;
  product_id?: KuaishouId;
}

export class CreativeVideoGenerateRequest implements PostRequest, CreativeVideoGenerateRequestInit {
  outer_id?: string;
  templates?: CreativeTemplate[];
  advertiser_id?: KuaishouId;
  library_id?: KuaishouId;
  product_id?: KuaishouId;

  constructor(init: CreativeVideoGenerateRequestInit = {}) {
    this.outer_id = init.outer_id;
    this.templates = init.templates;
    this.advertiser_id = init.advertiser_id;
    this.library_id = init.library_id;
    this.product_id = init.product_id;
  }

  path() {
    return "gw/dsp/v1/dpa/creative/video/generate";
  }

  encode() {
    return jsonMarshal({
      outer_id: this.outer_id,
      templates: this.templates,
      advertiser_id: this.advertiser_id,
      library_id: this.library_id,
      product_id: this.product_id,
    });
  }
}

export interface CreativeVideoGenerateResponse {
  video_infos?: GenerateVideoResult[];
}

export interface GenerateVideoResult {
  outer_id?: string;
  product_name?: string;
  video_url?: string;
  code?: string;
  message?: string;
  photo_id?: KuaishouId;
  template_id?: KuaishouId;
  product_id?: KuaishouId;
}
