import type { CurrencyType, ProductSeriesSpecFilteringFieldValueRange } from "../v3/index";
export interface ProductSeriesSpecFilteringValueStruct {
    field_value?: string;
    field_value_range?: ProductSeriesSpecFilteringFieldValueRange;
    currency_type?: CurrencyType;
}
