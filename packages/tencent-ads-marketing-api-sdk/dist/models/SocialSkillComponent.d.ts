import type { SocialSkillSpec } from "../models";
export interface SocialSkillComponent {
    component_id?: number | string;
    value?: SocialSkillSpec;
    is_deleted?: boolean;
}
