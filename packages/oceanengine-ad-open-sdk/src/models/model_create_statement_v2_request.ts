// 由 oceanengine/ad_open_sdk_go models/model_create_statement_v2_request.go 生成
// 不要手动编辑。

import type { CreateStatementV2Platform, CreateStatementV2TemplateType } from "../models/index";

export interface CreateStatementV2Request {
  account_id?: number | string;
  agent_ids: (number | string)[];
  contract_serial: string;
  file_id?: number | string;
  name?: string;
  platform: CreateStatementV2Platform;
  project_serial_list: string[];
  request_id: string;
  template_type: CreateStatementV2TemplateType;
}

