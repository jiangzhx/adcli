// Generated from github.com/bububa/kwai-marketing-api/api/dmp/population_push.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { PopulationPushRequest, PopulationPushRequestInit } from "../../model/dmp";

export async function populationPush(client: SDKClient, accessToken: string, req: PopulationPushRequest | PopulationPushRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof PopulationPushRequest ? req : new PopulationPushRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { populationPush as PopulationPush };
