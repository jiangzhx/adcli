// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LiveRoomComponentStatusUpdateRequest, LiveRoomComponentStatusUpdateResponseData } from "../models";

export interface V3LiveRoomComponentStatusApiUpdateRequest {
  data: LiveRoomComponentStatusUpdateRequest;
}


export class V3LiveRoomComponentStatusApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: V3LiveRoomComponentStatusApiUpdateRequest): Promise<LiveRoomComponentStatusUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3LiveRoomComponentStatusApiUpdateRequest): Promise<ApiResponse<LiveRoomComponentStatusUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<LiveRoomComponentStatusUpdateResponseData>({
      method: "POST",
      path: "/live_room_component_status/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


