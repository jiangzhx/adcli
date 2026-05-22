import type { BarrageStruct } from "../models";
export interface BarrageComponent {
    component_id?: number | string;
    value?: BarrageStruct;
    is_deleted?: boolean;
}
