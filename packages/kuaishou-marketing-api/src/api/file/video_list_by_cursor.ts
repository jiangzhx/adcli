// Generated from github.com/bububa/kwai-marketing-api/api/file/video_list_by_cursor.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { VideoListByCursorRequest, VideoListByCursorRequestInit, VideoListByCursorResponse } from "../../model/file";

export async function videoListByCursor(client: SDKClient, accessToken: string, req: VideoListByCursorRequest | VideoListByCursorRequestInit, signal?: AbortSignal): Promise<VideoListByCursorResponse> {
  const request = req instanceof VideoListByCursorRequest ? req : new VideoListByCursorRequest(req);
  return client.post<VideoListByCursorResponse>(accessToken, request, signal);
}

export { videoListByCursor as VideoListByCursor };
