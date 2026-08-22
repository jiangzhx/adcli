// Generated from github.com/bububa/kwai-marketing-api/api/comment/reply.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ReplyRequest, ReplyRequestInit, ReplyResult } from "../../model/comment";

export async function reply(client: SDKClient, accessToken: string, req: ReplyRequest | ReplyRequestInit, signal?: AbortSignal): Promise<ReplyResult[]> {
  const request = req instanceof ReplyRequest ? req : new ReplyRequest(req);
  const resp = await client.post<{ reply_result_list?: ReplyResult[] }>(accessToken, request, signal);
  return resp.reply_result_list ?? [];
}

export { reply as Reply };
