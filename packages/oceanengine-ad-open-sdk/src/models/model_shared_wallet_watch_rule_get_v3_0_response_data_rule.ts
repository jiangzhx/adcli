// Generated from oceanengine/ad_open_sdk_go models/model_shared_wallet_watch_rule_get_v3_0_response_data_rule.go
// Do not edit manually.

import type { SharedWalletWatchRuleGetV30ResponseDataRuleBalanceAlertRulesInner, SharedWalletWatchRuleGetV30ResponseDataRuleBudgetAlertRulesInner, SharedWalletWatchRuleGetV30ResponseDataRuleBudgetUsageAlertRulesInner } from "../models/index";

export interface SharedWalletWatchRuleGetV30ResponseDataRule {
  alert_emails?: string[];
  balance_alert_rules?: SharedWalletWatchRuleGetV30ResponseDataRuleBalanceAlertRulesInner[];
  budget_alert_rules?: SharedWalletWatchRuleGetV30ResponseDataRuleBudgetAlertRulesInner[];
  budget_usage_alert_rules?: SharedWalletWatchRuleGetV30ResponseDataRuleBudgetUsageAlertRulesInner[];
  wallet_id?: number | string;
}

