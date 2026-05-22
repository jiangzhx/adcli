import type { Resource } from "../v3/index";
export interface Gift {
    gift_id?: string;
    gift_name?: string;
    gift_type?: number;
    resource_list?: Resource[];
}
