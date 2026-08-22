// Generated from github.com/bububa/kwai-marketing-api/model/track/activate_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import { encodeQuery } from "../types";

export interface ActivateRequestInit {
  callback?: string;
  event_type?: number;
  event_time?: number;
  purchase_amount?: number;
  user_tags_age?: number;
  user_tags_insurance?: number;
  weighted_purchase_amount?: number;
  action_reason?: number;
  key_action_category?: number;
  key_action_threshold?: number;
  is_direct_match?: boolean;
  debug?: boolean;
}

export class ActivateRequest implements GetRequest, ActivateRequestInit {
  callback?: string;
  event_type?: number;
  event_time?: number;
  purchase_amount?: number;
  user_tags_age?: number;
  user_tags_insurance?: number;
  weighted_purchase_amount?: number;
  action_reason?: number;
  key_action_category?: number;
  key_action_threshold?: number;
  is_direct_match?: boolean;
  debug?: boolean;

  constructor(init: ActivateRequestInit = {}) {
    this.callback = init.callback;
    this.event_type = init.event_type;
    this.event_time = init.event_time;
    this.purchase_amount = init.purchase_amount;
    this.user_tags_age = init.user_tags_age;
    this.user_tags_insurance = init.user_tags_insurance;
    this.weighted_purchase_amount = init.weighted_purchase_amount;
    this.action_reason = init.action_reason;
    this.key_action_category = init.key_action_category;
    this.key_action_threshold = init.key_action_threshold;
    this.is_direct_match = init.is_direct_match;
    this.debug = init.debug;
  }

  path() {
    return "";
  }

  encode() {
    return encodeQuery({
      callback: this.callback == null ? undefined : String(this.callback),
      event_type: this.event_type == null ? undefined : String(this.event_type),
      event_time: this.event_time == null ? undefined : String(this.event_time),
      purchase_amount: this.purchase_amount == null ? undefined : String(this.purchase_amount),
      user_tags_age: this.user_tags_age == null ? undefined : String(this.user_tags_age),
      user_tags_insurance: this.user_tags_insurance == null ? undefined : String(this.user_tags_insurance),
      weighted_purchase_amount: this.weighted_purchase_amount == null ? undefined : String(this.weighted_purchase_amount),
      action_reason: this.action_reason == null ? undefined : String(this.action_reason),
      key_action_category: this.key_action_category == null ? undefined : String(this.key_action_category),
      key_action_threshold: this.key_action_threshold == null ? undefined : String(this.key_action_threshold),
      is_direct_match: this.is_direct_match == null ? undefined : String(this.is_direct_match),
      debug: this.debug == null ? undefined : String(this.debug),
    });
  }
}
