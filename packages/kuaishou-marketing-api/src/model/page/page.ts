// Generated from github.com/bububa/kwai-marketing-api/model/page/page.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface Page {
  id?: KuaishouId;
  url?: string;
  type?: number;
  name?: string;
  page_component_type?: number[];
  audit_status?: number;
  fiction_id?: KuaishouId;
  biz_type?: number;
  create_time?: string;
  update_time?: string;
  conversion_type?: string[];
  details?: unknown;
  cover_img_url?: string;
  comps?: Component[];
}

export interface Component {
  id?: KuaishouId;
  type?: number;
  name?: string;
  sub_type?: number;
  props?: Record<string, unknown>;
  wechat_game_id?: KuaishouId;
  button_text?: string;
  game_name?: string;
  description?: string;
}
