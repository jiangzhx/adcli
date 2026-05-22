// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_customer_profile_struct.go
// Do not edit manually.

import type { CustomerProfileAgeStruct, CustomerProfileIncomeStruct, LocalStoreCustomerProfileGender } from "../v3/index";

export interface CustomerProfileStruct {
  gender?: LocalStoreCustomerProfileGender;
  age?: CustomerProfileAgeStruct[];
  income?: CustomerProfileIncomeStruct[];
  vehicle?: string[];
}

