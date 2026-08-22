// Generated from github.com/bububa/kwai-marketing-api/api/region/list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ListRequest, ListRequestInit, Record, Region } from "../../model/region";

export async function list(client: SDKClient, accessToken: string, signal?: AbortSignal): Promise<Record<string, Region>> {
  const req = new ListRequest({

  });
  return client.get<Record<string, Region>>(accessToken, req, signal);
}

export { list as List };
