// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { CustomerProfileAgeStruct, CustomerProfileIncomeStruct, LocalStoreCustomerProfileGender } from "../models";

export interface CustomerProfileStruct {
  gender?: LocalStoreCustomerProfileGender;
  age?: CustomerProfileAgeStruct[];
  income?: CustomerProfileIncomeStruct[];
  vehicle?: string[];
}

