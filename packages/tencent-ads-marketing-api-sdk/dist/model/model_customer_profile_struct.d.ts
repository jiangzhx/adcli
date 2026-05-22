import type { CustomerProfileAgeStruct, CustomerProfileIncomeStruct, LocalStoreCustomerProfileGender } from "../model/index";
export interface CustomerProfileStruct {
    gender?: LocalStoreCustomerProfileGender;
    age?: CustomerProfileAgeStruct[];
    income?: CustomerProfileIncomeStruct[];
    vehicle?: string[];
}
