// Generated from oceanengine/ad_open_sdk_go models/model_shared_wallet_watch_rule_submit_v3_0_request_rule.go
// Do not edit manually.

import type { SharedWalletWatchRuleSubmitV30RequestRuleBalanceAlertRulesInner, SharedWalletWatchRuleSubmitV30RequestRuleBudgetAlertRulesInner, SharedWalletWatchRuleSubmitV30RequestRuleBudgetUsageAlertRulesInner } from "../models/index";

export interface SharedWalletWatchRuleSubmitV30RequestRule {
  alert_emails?: string[];
  balance_alert_rules: SharedWalletWatchRuleSubmitV30RequestRuleBalanceAlertRulesInner[];
  budget_alert_rules: SharedWalletWatchRuleSubmitV30RequestRuleBudgetAlertRulesInner[];
  budget_usage_alert_rules: SharedWalletWatchRuleSubmitV30RequestRuleBudgetUsageAlertRulesInner[];
  wallet_id: number | string;
}

