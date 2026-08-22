// Generated from github.com/bububa/kwai-marketing-api/model/dsp/target/template_delete.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface TemplateDeleteRequestInit {
  template_id?: KuaishouId;
}

export class TemplateDeleteRequest implements PostRequest, TemplateDeleteRequestInit {
  template_id?: KuaishouId;

  constructor(init: TemplateDeleteRequestInit = {}) {
    this.template_id = init.template_id;
  }

  path() {
    return "gw/dsp/target/template/delete";
  }

  encode() {
    return jsonMarshal({
      template_id: this.template_id,
    });
  }
}

export interface TemplateDeleteResponse {
  template_id?: KuaishouId;
}
