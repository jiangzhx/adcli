import type { Certification, PromotedObjectAuthRelationship, WechatAuthScope } from "../models";
export interface AuthSpec {
    certification_list?: Certification[];
    relationship?: PromotedObjectAuthRelationship;
    auth_scope?: WechatAuthScope;
}
