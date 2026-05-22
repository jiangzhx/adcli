import type { Gift } from "../v3/index";
export interface ActGiftInfo {
    act_id?: string;
    act_name?: string;
    act_type?: number;
    gift_list?: Gift[];
    gift_bypass?: string;
}
