import type { SocialSkillSpec } from "../v3/index";
export interface SocialSkillComponent {
    component_id?: number | string;
    value?: SocialSkillSpec;
    is_deleted?: boolean;
}
