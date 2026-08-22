// Generated from github.com/bububa/kwai-marketing-api/api/dmp/population_accounts_push.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { PopulationAccountsPushRequest, PopulationAccountsPushRequestInit, PopulationAccountsPushResponse } from "../../model/dmp";

export async function populationAccountsPush(client: SDKClient, accessToken: string, req: PopulationAccountsPushRequest | PopulationAccountsPushRequestInit, signal?: AbortSignal): Promise<PopulationAccountsPushResponse> {
  const request = req instanceof PopulationAccountsPushRequest ? req : new PopulationAccountsPushRequest(req);
  return client.post<PopulationAccountsPushResponse>(accessToken, request, signal);
}

export { populationAccountsPush as PopulationAccountsPush };
