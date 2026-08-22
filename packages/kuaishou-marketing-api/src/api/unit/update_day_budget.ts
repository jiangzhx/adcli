// Generated from github.com/bububa/kwai-marketing-api/api/unit/update_day_budget.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { UpdateDayBudgetRequest, UpdateDayBudgetRequestInit } from "../../model/unit";

export async function updateDayBudget(client: SDKClient, accessToken: string, req: UpdateDayBudgetRequest | UpdateDayBudgetRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof UpdateDayBudgetRequest ? req : new UpdateDayBudgetRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { updateDayBudget as UpdateDayBudget };
