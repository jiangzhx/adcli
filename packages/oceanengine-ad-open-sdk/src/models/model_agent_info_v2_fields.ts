// 由 oceanengine/ad_open_sdk_go models/model_agent_info_v2_fields.go 生成
// 不要手动编辑。

export const AgentInfoV2Fields = {
  CREATE_TIME: "create_time",
  AGENT_ID: "agent_id",
  COMPANY_NAME: "company_name",
  ROLE: "role",
  COMPANY_ID: "company_id",
  AGENT_NAME: "agent_name",
  CUSTOMER_NAME: "customer_name",
  ACCOUNT_STATUS: "account_status",
  CUSTOMER_ID: "customer_id",
} as const;

export type AgentInfoV2Fields = typeof AgentInfoV2Fields[keyof typeof AgentInfoV2Fields];

