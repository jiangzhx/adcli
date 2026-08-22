// Generated from github.com/bububa/kwai-marketing-api/api/dmp/population_delete.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { PopulationDeleteRequest, PopulationDeleteRequestInit } from "../../model/dmp";

export async function populationDelete(client: SDKClient, accessToken: string, req: PopulationDeleteRequest | PopulationDeleteRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof PopulationDeleteRequest ? req : new PopulationDeleteRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { populationDelete as PopulationDelete };
