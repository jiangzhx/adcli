// Generated from github.com/bububa/kwai-marketing-api/api/creative/advanced_program_review_detail.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdvancedProgramReviewDetailRequest, AdvancedProgramReviewDetailRequestInit, AdvancedProgramReviewDetail } from "../../model/creative";

export async function advancedProgramReviewDetail(client: SDKClient, accessToken: string, req: AdvancedProgramReviewDetailRequest | AdvancedProgramReviewDetailRequestInit, signal?: AbortSignal): Promise<AdvancedProgramReviewDetail> {
  const request = req instanceof AdvancedProgramReviewDetailRequest ? req : new AdvancedProgramReviewDetailRequest(req);
  return client.get<AdvancedProgramReviewDetail>(accessToken, request, signal);
}

export { advancedProgramReviewDetail as AdvancedProgramReviewDetail };
