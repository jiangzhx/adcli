// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { SharedWalletWatchRuleGetV30ResponseDataRuleBalanceAlertRulesInner, SharedWalletWatchRuleGetV30ResponseDataRuleBudgetAlertRulesInner, SharedWalletWatchRuleGetV30ResponseDataRuleBudgetUsageAlertRulesInner } from "../models";

export interface SharedWalletWatchRuleGetV30ResponseDataRule {
  alert_emails?: string[];
  balance_alert_rules?: SharedWalletWatchRuleGetV30ResponseDataRuleBalanceAlertRulesInner[];
  budget_alert_rules?: SharedWalletWatchRuleGetV30ResponseDataRuleBudgetAlertRulesInner[];
  budget_usage_alert_rules?: SharedWalletWatchRuleGetV30ResponseDataRuleBudgetUsageAlertRulesInner[];
  wallet_id?: number;
}

