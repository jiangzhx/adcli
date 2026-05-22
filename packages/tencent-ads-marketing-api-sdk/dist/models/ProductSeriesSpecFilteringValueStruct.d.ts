import type { CurrencyType, ProductSeriesSpecFilteringFieldValueRange } from "../models";
export interface ProductSeriesSpecFilteringValueStruct {
    field_value?: string;
    field_value_range?: ProductSeriesSpecFilteringFieldValueRange;
    currency_type?: CurrencyType;
}
