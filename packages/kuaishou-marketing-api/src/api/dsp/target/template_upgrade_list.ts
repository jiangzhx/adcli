// Generated from github.com/bububa/kwai-marketing-api/api/dsp/target/template_upgrade_list.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { TemplateUpgradeListRequest, TemplateUpgradeListRequestInit, TemplateUpgradeItem } from "../../../model/dsp/target";

export async function templateUpgradeList(client: SDKClient, accessToken: string, req: TemplateUpgradeListRequest | TemplateUpgradeListRequestInit, signal?: AbortSignal): Promise<TemplateUpgradeItem[]> {
  const request = req instanceof TemplateUpgradeListRequest ? req : new TemplateUpgradeListRequest(req);
  return client.post<TemplateUpgradeItem[]>(accessToken, request, signal);
}

export { templateUpgradeList as TemplateUpgradeList };
