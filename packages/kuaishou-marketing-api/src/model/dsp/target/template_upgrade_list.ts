// Generated from github.com/bububa/kwai-marketing-api/model/dsp/target/template_upgrade_list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface TemplateUpgradeListRequestInit {
  return?: "gw/dsp/target/template/upgrade_list";
}

export class TemplateUpgradeListRequest implements PostRequest, TemplateUpgradeListRequestInit {
  return?: "gw/dsp/target/template/upgrade_list";

  constructor(init: TemplateUpgradeListRequestInit = {}) {
    this.return = init.return;
  }

  path() {
    return "gw/dsp/target/template/upgrade_list";
  }

  encode() {
    return jsonMarshal({
      return: this.return,
    });
  }
}

export interface TemplateUpgradeItem {
  target_change_vo?: TargetChangeVO;
  template_name?: string;
  template_id?: KuaishouId;
  unit_count?: number;
}

export interface TargetChangeVO {
  celebrity?: boolean;
  behavior_interest?: boolean;
  inteli_extend_option?: boolean;
}
