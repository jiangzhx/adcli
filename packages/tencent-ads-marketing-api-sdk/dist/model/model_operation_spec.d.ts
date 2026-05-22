import type { BidAmountSpec, ConfigureStatusSpec, DateSpec, TimeSeriesSpec } from "../model/index";
export interface OperationSpec {
    configure_status_spec?: ConfigureStatusSpec;
    bid_amount_spec?: BidAmountSpec;
    date_spec?: DateSpec;
    time_series_spec?: TimeSeriesSpec;
}
