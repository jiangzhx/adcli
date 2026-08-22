// Generated from github.com/bububa/kwai-marketing-api/api/report/asynctask/create.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { CreateRequest, CreateRequestInit, CreateResponse } from "../../../model/report/asynctask";

export async function create(client: SDKClient, accessToken: string, req: CreateRequest | CreateRequestInit, signal?: AbortSignal): Promise<CreateResponse> {
  const request = req instanceof CreateRequest ? req : new CreateRequest(req);
  return client.post<CreateResponse>(accessToken, request, signal);
}

export { create as Create };
