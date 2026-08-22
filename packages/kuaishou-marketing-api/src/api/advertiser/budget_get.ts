// Generated from github.com/bububa/kwai-marketing-api/api/advertiser/budget_get.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { BudgetGetRequest, BudgetGetRequestInit, Budget } from "../../model/advertiser";

export async function budgetGet(client: SDKClient, accessToken: string, advertiserID: KuaishouId, signal?: AbortSignal): Promise<Budget> {
  const req = new BudgetGetRequest({
    advertiser_id: advertiserID,
  });
  return client.post<Budget>(accessToken, req, signal);
}

export { budgetGet as BudgetGet };
