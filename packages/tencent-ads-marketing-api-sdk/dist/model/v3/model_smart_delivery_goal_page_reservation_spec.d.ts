import type { SimpleSwitchStatus } from "../v3/index";
export interface SmartDeliveryGoalPageReservationSpec {
    page_reservation_cost?: number;
    periodic_length?: number;
    auto_renew?: SimpleSwitchStatus;
}
