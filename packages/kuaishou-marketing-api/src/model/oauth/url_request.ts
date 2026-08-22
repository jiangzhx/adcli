// Generated from github.com/bububa/kwai-marketing-api/model/oauth/url_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal, encodeQuery } from "../types";

export interface UrlRequestInit {
  redirect_uri?: string;
  state?: string;
  oauth_type?: string;
  scope?: string[];
  app_id?: KuaishouId;
}

export class UrlRequest implements GetRequest, UrlRequestInit {
  redirect_uri?: string;
  state?: string;
  oauth_type?: string;
  scope?: string[];
  app_id?: KuaishouId;

  constructor(init: UrlRequestInit = {}) {
    this.redirect_uri = init.redirect_uri;
    this.state = init.state;
    this.oauth_type = init.oauth_type;
    this.scope = init.scope;
    this.app_id = init.app_id;
  }

  path() {
    return "tools/authorize";
  }

  encode() {
    return encodeQuery({
      redirect_uri: this.redirect_uri == null ? undefined : String(this.redirect_uri),
      state: this.state == null ? undefined : String(this.state),
      oauth_type: this.oauth_type == null ? undefined : String(this.oauth_type),
      scope: this.scope?.length ? new TextDecoder().decode(jsonMarshal(this.scope)) : undefined,
      app_id: this.app_id == null ? undefined : String(this.app_id),
    });
  }
}
