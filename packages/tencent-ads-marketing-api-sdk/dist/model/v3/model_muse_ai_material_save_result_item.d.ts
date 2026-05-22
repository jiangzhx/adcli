import type { MuseAiMaterialPushStatus, TemplateType } from "../v3/index";
export interface MuseAiMaterialSaveResultItem {
    status?: MuseAiMaterialPushStatus;
    muse_material_id?: number | string;
    media_id?: string;
    material_type?: TemplateType;
}
