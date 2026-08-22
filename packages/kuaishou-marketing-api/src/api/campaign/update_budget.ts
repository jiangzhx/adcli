// Generated from github.com/bububa/kwai-marketing-api/api/campaign/update_budget.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { UpdateBudgetRequest, UpdateBudgetRequestInit } from "../../model/campaign";

export async function updateBudget(client: SDKClient, accessToken: string, req: UpdateBudgetRequest | UpdateBudgetRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof UpdateBudgetRequest ? req : new UpdateBudgetRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { updateBudget as UpdateBudget };
