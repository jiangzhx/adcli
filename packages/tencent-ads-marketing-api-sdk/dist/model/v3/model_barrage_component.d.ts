import type { BarrageStruct } from "../v3/index";
export interface BarrageComponent {
    component_id?: number | string;
    value?: BarrageStruct;
    is_deleted?: boolean;
}
