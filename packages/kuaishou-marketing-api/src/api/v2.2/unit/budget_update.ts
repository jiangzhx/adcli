// Generated from github.com/bububa/kwai-marketing-api/api/v2.2/unit/budget_update.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import type { KuaishouId } from "../../../model";
import { BudgetUpdateRequest, BudgetUpdateRequestInit } from "../../../model/v2.2/unit";

export async function budgetUpdate(client: SDKClient, accessToken: string, req: BudgetUpdateRequest | BudgetUpdateRequestInit, signal?: AbortSignal): Promise<KuaishouId[]> {
  const request = req instanceof BudgetUpdateRequest ? req : new BudgetUpdateRequest(req);
  const resp = await client.post<{ unit_ids?: KuaishouId[] }>(accessToken, request, signal);
  return resp.unit_ids ?? [];
}

export { budgetUpdate as BudgetUpdate };
