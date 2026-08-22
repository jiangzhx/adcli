// Generated from github.com/bububa/kwai-marketing-api/model/native/user_list_response.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface UserListResponse {
  user_list?: UserProfileViewSnake[];
}

export interface UserProfileViewSnake {
  user_id?: KuaishouId;
  user_name?: string;
  user_sex?: string;
  head_url?: string;
  kol_user_type?: number;
}
