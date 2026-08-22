// Generated from github.com/bububa/kwai-marketing-api/api/creative/action_bar_text_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ActionBarTextListRequest, ActionBarTextListRequestInit } from "../../model/creative";

export async function actionBarTextList(client: SDKClient, accessToken: string, req: ActionBarTextListRequest | ActionBarTextListRequestInit, signal?: AbortSignal): Promise<string[]> {
  const request = req instanceof ActionBarTextListRequest ? req : new ActionBarTextListRequest(req);
  const resp = await client.get<{ action_bar_text?: string[] }>(accessToken, request, signal);
  return resp.action_bar_text ?? [];
}

export { actionBarTextList as ActionBarTextList };
