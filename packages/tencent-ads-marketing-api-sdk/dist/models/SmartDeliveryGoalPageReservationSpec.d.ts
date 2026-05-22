import type { SimpleSwitchStatus } from "../models";
export interface SmartDeliveryGoalPageReservationSpec {
    page_reservation_cost?: number;
    periodic_length?: number;
    auto_renew?: SimpleSwitchStatus;
}
