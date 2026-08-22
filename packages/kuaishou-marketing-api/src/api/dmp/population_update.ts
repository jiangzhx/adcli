// Generated from github.com/bububa/kwai-marketing-api/api/dmp/population_update.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { PopulationUpdateRequest, PopulationUpdateRequestInit, Population } from "../../model/dmp";

export async function populationUpdate(client: SDKClient, accessToken: string, req: PopulationUpdateRequest | PopulationUpdateRequestInit, signal?: AbortSignal): Promise<Population> {
  const request = req instanceof PopulationUpdateRequest ? req : new PopulationUpdateRequest(req);
  return client.upload<Population>(accessToken, request, signal);
}

export { populationUpdate as PopulationUpdate };
