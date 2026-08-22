// Generated from github.com/bububa/kwai-marketing-api/api/dmp/population_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { PopulationListRequest, PopulationListRequestInit, PopulationListResponse } from "../../model/dmp";

export async function populationList(client: SDKClient, accessToken: string, req: PopulationListRequest | PopulationListRequestInit, signal?: AbortSignal): Promise<PopulationListResponse> {
  const request = req instanceof PopulationListRequest ? req : new PopulationListRequest(req);
  return client.post<PopulationListResponse>(accessToken, request, signal);
}

export { populationList as PopulationList };
