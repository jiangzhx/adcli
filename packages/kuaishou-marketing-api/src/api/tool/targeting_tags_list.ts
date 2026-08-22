// Generated from github.com/bububa/kwai-marketing-api/api/tool/targeting_tags_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { TargetingTagsListRequest, TargetingTagsListRequestInit, TargetingTag } from "../../model/tool";

export async function targetingTagsList(client: SDKClient, accessToken: string, req: TargetingTagsListRequest | TargetingTagsListRequestInit, signal?: AbortSignal): Promise<TargetingTag> {
  const request = req instanceof TargetingTagsListRequest ? req : new TargetingTagsListRequest(req);
  return client.get<TargetingTag>(accessToken, request, signal);
}

export { targetingTagsList as TargetingTagsList };
