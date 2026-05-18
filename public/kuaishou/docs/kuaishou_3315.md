---
title: H5一键获取手机号接口【使用请联系行运提报】
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3315&menuId=4095
doc_id: kuaishou_3315
source_id: kuaishou_3315
---
# H5一键获取手机号接口【使用请联系行运提报】

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3315 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 魔力建站 |
| createTime | 2026-01-23T07:31:08.707Z |

## 概述

三方H5页面一键获取手机号

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/lp/get_customer_phone |
| httpMethod | POST |
| httpContentType | JSON |

## Header 参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| access-token | String |  |  | access-token,从开放平台获取到的token |  |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| diy_app_key | String |  |  | 运营商appKey | 运营商appKey，支持联盟渠道，必传。 快手运营分配 |
| diy_appid | String |  |  | 运营商appid | 运营商appid，支持联盟渠道，必传。快手运营分配 |
| source_type | Integer |  | 0 | 0-无组件，1-有前端组件 | 0-无组件，1-有前端组件，接入的是有前端组件版时必传 |
| user_information | String |  |  | JSSDK提供 | 用户信息,联盟流量必传 |
| user_remote_ip | Long | 是 |  | 客户提供 | 用户请求IP |
| app_version | String | 是 |  | JSSDK提供 | 版本号 |
| platform | Integer | 是 |  | JSSDK提供 | 6-ANDROID_PHONE_H5、7-IPHONE_H5 |
| client_id | Integer | 是 |  | JSSDK提供 | 1-IPHONE 2-ANDROID 3-WEB |
| flow_source | Integer | 是 |  | JSSDK提供 | 1-快手主站 2-联盟 3-快手极速版 |
| callback | String | 是 |  | 客户提供 | 广告参数 |
| isp_type | Integer | 是 |  | JSSDK提供 | 运营商类型 1-移动 2-联通 3-电信 |
| spt_token | String | 是 |  | JSSDK提供 | 手机号密钥 |
| app_id | String | 是 |  | 快手分配 | 应用ID ，gateway平台申请的应用id |

## 请求样例

### 示例标题 (jsonc)

```
{
  "advertiser_id": 123,
  "user_remote_ip": 11234,
  "app_id": "165903491",
  "spt_token": "atlDi3UY/GGhl0LqowlroJ5cuqboLTy4YHSb54d2Hyy/dcDybH14pdboh5PoSAjY/hZ5Innk1wZN2zXkFztOyKPlTwahm8naGxKM6zGm/cV9SVbDSVlI9+GKYukGVuau6Njt9Ok/m+UNA5YiSNpveSeEIxjoCSzOsVqe6SZgHjvZVm2Y50/o2uGJW0kYUvIymQJ4VvnkM3DXs7JIJdnnRFoezD+GaOKIqlCc9nv/X6eXBFtq8FdPAMVDCvO0aH78wJirwjBhehMnjQiDQsKoz9qeVOI9sc7TAcGC594ybtTjbLzzRtGrhZYuSzYRWCY8UDiUoC3F5VRSjCmTLwPPkw==",
  "isp_type": 2,
  "callback": "Bfpz7g4UwD6R5u34GXm7BEETw9rMoioK5wDdi7JCUjqLTR19iUb1M2LJmGb_ueEJSnNBedLuFvenWLjRG6LfOuikqaSO1MkZ9bP4ko8YKETytP8KbXVEX_aCJYGUsWbzxrcpCKfkphO3h6Fyg_haIV5n1bQ4OFRbOs1YjFCxhFozW_hGrap-BP5v32rCj8tuQE2Aozqk7fq9_MDYbKdo_7sehjAnf-8LATXBupSH4IIG2ZkEouW-9OtP7c9irNnEUc72p9bM46uxhTJq_Uv_mg",
  "flow_source": 1,
  "client_id": 1,
  "platform": 7,
  "app_version": "13.10.20.99999"
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PhoneEncrypt |  |  | 加密手机号 | 加密手机号 |
| - phone_encrypt | String |  |  | 1 | 加密手机号 |
| message | String |  |  | 状态描述 | 状态描述 |
| code | Integer |  |  | 状态码 | 状态码 |

## 返回样例

### 示例标题 (jsonc)

```
{
  "code": 4005,
  "data": {
    "phone_encrypt": ""
  },
  "message": "手机号获取服务异常",
  "request_id": "EL2AgIDw5pmOrAEYsQkgqPy5gqgzKI_3_9AP"
}
```

## 原始内容

```
H5一键获取手机号接口【使用请联系行运提报】 /rest/openapi/gw/magicsite/v1/lp/get_customer_phone { "advertiser_id": 123, "user_remote_ip": 11234, "app_id": "165903491", "spt_token": "atlDi3UY/GGhl0LqowlroJ5cuqboLTy4YHSb54d2Hyy/dcDybH14pdboh5PoSAjY/hZ5Innk1wZN2zXkFztOyKPlTwahm8naGxKM6zGm/cV9SVbDSVlI9+GKYukGVuau6Njt9Ok/m+UNA5YiSNpveSeEIxjoCSzOsVqe6SZgHjvZVm2Y50/o2uGJW0kYUvIymQJ4VvnkM3DXs7JIJdnnRFoezD+GaOKIqlCc9nv/X6eXBFtq8FdPAMVDCvO0aH78wJirwjBhehMnjQiDQsKoz9qeVOI9sc7TAcGC594ybtTjbLzzRtGrhZYuSzYRWCY8UDiUoC3F5VRSjCmTLwPPkw==", "isp_type": 2, "callback": "Bfpz7g4UwD6R5u34GXm7BEETw9rMoioK5wDdi7JCUjqLTR19iUb1M2LJmGb_ueEJSnNBedLuFvenWLjRG6LfOuikqaSO1MkZ9bP4ko8YKETytP8KbXVEX_aCJYGUsWbzxrcpCKfkphO3h6Fyg_haIV5n1bQ4OFRbOs1YjFCxhFozW_hGrap-BP5v32rCj8tuQE2Aozqk7fq9_MDYbKdo_7sehjAnf-8LATXBupSH4IIG2ZkEouW-9OtP7c9irNnEUc72p9bM46uxhTJq_Uv_mg", "flow_source": 1, "client_id": 1, "platform": 7, "app_version": "13.10.20.99999" } { "code": 4005, "data": { "phone_encrypt": "" }, "message": "手机号获取服务异常", "request_id": "EL2AgIDw5pmOrAEYsQkgqPy5gqgzKI_3_9AP" } diy_app_key String 运营商appKey diy_appid String 运营商appid source_type Integer 0-无组件，1-有前端组件 user_information String JSSDK提供 user_remote_ip Long 客户提供 app_version String JSSDK提供 platform Integer JSSDK提供 client_id Integer JSSDK提供 flow_source Integer JSSDK提供 callback String 客户提供 isp_type Integer JSSDK提供 spt_token String JSSDK提供 app_id String 快手分配 data PhoneEncrypt 加密手机号 phone_encrypt String 1 message String 状态描述 code Integer 状态码
```
