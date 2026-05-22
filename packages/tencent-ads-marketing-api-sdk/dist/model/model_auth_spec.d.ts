import type { Certification, PromotedObjectAuthRelationship, WechatAuthScope } from "../model/index";
export interface AuthSpec {
    certification_list?: Certification[];
    relationship?: PromotedObjectAuthRelationship;
    auth_scope?: WechatAuthScope;
}
