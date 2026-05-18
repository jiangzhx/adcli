---
title: 系统推荐定向/排除人群包
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2666&menuId=3394
doc_id: kuaishou_2666
source_id: kuaishou_2666
---
# 系统推荐定向/排除人群包

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2666 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T02:39:46.021Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/tool/population/system/recommend |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 0 | 广告主ID |  |
| type | Integer | 是 | 1 | 系统人群包类型，1:定向，2:排除 |  |
| population_source | Integer |  | 0 | 人群包的覆盖数：0：主站人群覆盖数；1:联盟人群覆盖数 |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 135940,
    "type":1
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 处理状态码 |  |
| message | String |  | 成功 | 处理状态信息 |  |
| data | AdDmpSystemRecoView1 |  |  | 系统推荐人群包信息 |  |
| - industry_target | AdDmpPopulationView2[] |  | [] | 行业人群 |  |
| - orientation_id | Long |  | 1 | 1 |  |
| - orientation_name | String |  | 1 | 1 |  |
| - account_id | Long |  | 1 | 1 |  |
| - type | Integer |  | 1 | 1 |  |
| - population_type | Integer |  | 1 | 1 |  |
| - population_type_name | String |  | 1 | 1 |  |
| - record_size | Long |  | 1 | 1 |  |
| - match_size | Long |  | 1 | 1 |  |
| - cover_num | Long |  | 1 | 1 |  |
| - status | Integer |  | 1 | 1 |  |
| - src_id | Long |  | 1 | 1 |  |
| - create_time | Long |  | 1 | 1 |  |
| - verify_time | Long |  | 1 | 1 |  |
| - profile_tags | String |  | 1 | 1 |  |
| - unbind | String |  | 1 | 1 |  |
| - unbind_type | String |  | 1 | 1 |  |
| - success_unbind | String |  | 1 | 1 |  |
| - fail_unbind | String |  | 1 | 1 |  |
| - tp_code | Integer |  | 1 | 1 |  |
| - is_exclude_population | Boolean |  | 1 | 1 |  |
| - update_time | Long |  | 1 | 1 |  |
| - category_type | Integer |  | 1 | 1 |  |
| - can_exclude | Integer |  | 1 | 1 |  |
| - can_target | Integer |  | 1 | 1 |  |
| - src_type | Integer |  | 0 | 人群包来源 | 0：DMP平台（磁力万象）；1：MAPI平台；2：CDP平台（磁力方舟）；3：CDP投放共建类型 |
| - consume_target | AdDmpPopulationView2[] |  | [] | 店铺消费者人群 |  |
| - orientation_id | Long |  | 1 | 1 |  |
| - orientation_name | String |  | 1 | 1 |  |
| - account_id | Long |  | 1 | 1 |  |
| - type | Integer |  | 1 | 1 |  |
| - population_type | Integer |  | 1 | 1 |  |
| - population_type_name | String |  | 1 | 1 |  |
| - record_size | Long |  | 1 | 1 |  |
| - match_size | Long |  | 1 | 1 |  |
| - cover_num | Long |  | 1 | 1 |  |
| - status | Integer |  | 1 | 1 |  |
| - src_id | Long |  | 1 | 1 |  |
| - create_time | Long |  | 1 | 1 |  |
| - verify_time | Long |  | 1 | 1 |  |
| - profile_tags | String |  | 1 | 1 |  |
| - unbind | String |  | 1 | 1 |  |
| - unbind_type | String |  | 1 | 1 |  |
| - success_unbind | String |  | 1 | 1 |  |
| - fail_unbind | String |  | 1 | 1 |  |
| - tp_code | Integer |  | 1 | 1 |  |
| - is_exclude_population | Boolean |  | 1 | 1 |  |
| - update_time | Long |  | 1 | 1 |  |
| - category_type | Integer |  | 1 | 1 |  |
| - can_exclude | Integer |  | 1 | 1 |  |
| - can_target | Integer |  | 1 | 1 |  |
| - src_type | Integer |  | 0 | 人群包来源 | 0：DMP平台（磁力万象）；1：MAPI平台；2：CDP平台（磁力方舟）；3：CDP投放共建类型 |
| - react_target | AdDmpPopulationView2[] |  | [] | 店铺内互动人群 |  |
| - orientation_id | Long |  | 1 | 1 |  |
| - orientation_name | String |  | 1 | 1 |  |
| - account_id | Long |  | 1 | 1 |  |
| - type | Integer |  | 1 | 1 |  |
| - population_type | Integer |  | 1 | 1 |  |
| - population_type_name | String |  | 1 | 1 |  |
| - record_size | Long |  | 1 | 1 |  |
| - match_size | Long |  | 1 | 1 |  |
| - cover_num | Long |  | 1 | 1 |  |
| - status | Integer |  | 1 | 1 |  |
| - src_id | Long |  | 1 | 1 |  |
| - create_time | Long |  | 1 | 1 |  |
| - verify_time | Long |  | 1 | 1 |  |
| - profile_tags | String |  | 1 | 1 |  |
| - unbind | String |  | 1 | 1 |  |
| - unbind_type | String |  | 1 | 1 |  |
| - success_unbind | String |  | 1 | 1 |  |
| - fail_unbind | String |  | 1 | 1 |  |
| - tp_code | Integer |  | 1 | 1 |  |
| - is_exclude_population | Boolean |  | 1 | 1 |  |
| - update_time | Long |  | 1 | 1 |  |
| - category_type | Integer |  | 1 | 1 |  |
| - can_exclude | Integer |  | 1 | 1 |  |
| - can_target | Integer |  | 1 | 1 |  |
| - src_type | Integer |  | 0 | 人群包来源 | 0：DMP平台（磁力万象）；1：MAPI平台；2：CDP平台（磁力方舟）；3：CDP投放共建类型 |
| - interest_target | AdDmpPopulationView2[] |  | [] | 店铺外兴趣人群 |  |
| - orientation_id | Long |  | 1 | 1 |  |
| - orientation_name | String |  | 1 | 1 |  |
| - account_id | Long |  | 1 | 1 |  |
| - type | Integer |  | 1 | 1 |  |
| - population_type | Integer |  | 1 | 1 |  |
| - population_type_name | String |  | 1 | 1 |  |
| - record_size | Long |  | 1 | 1 |  |
| - match_size | Long |  | 1 | 1 |  |
| - cover_num | Long |  | 1 | 1 |  |
| - status | Integer |  | 1 | 1 |  |
| - src_id | Long |  | 1 | 1 |  |
| - create_time | Long |  | 1 | 1 |  |
| - verify_time | Long |  | 1 | 1 |  |
| - profile_tags | String |  | 1 | 1 |  |
| - unbind | String |  | 1 | 1 |  |
| - unbind_type | String |  | 1 | 1 |  |
| - success_unbind | String |  | 1 | 1 |  |
| - fail_unbind | String |  | 1 | 1 |  |
| - tp_code | Integer |  | 1 | 1 |  |
| - is_exclude_population | Boolean |  | 1 | 1 |  |
| - update_time | Long |  | 1 | 1 |  |
| - category_type | Integer |  | 1 | 1 |  |
| - can_exclude | Integer |  | 1 | 1 |  |
| - can_target | Integer |  | 1 | 1 |  |
| - src_type | Integer |  | 0 | 人群包来源 | 0：DMP平台（磁力万象）；1：MAPI平台；2：CDP平台（磁力方舟）；3：CDP投放共建类型 |
| - negative_exclude | AdDmpPopulationView2[] |  | [] | LA负反馈人群 |  |
| - orientation_id | Long |  | 1 | 1 |  |
| - orientation_name | String |  | 1 | 1 |  |
| - account_id | Long |  | 1 | 1 |  |
| - type | Integer |  | 1 | 1 |  |
| - population_type | Integer |  | 1 | 1 |  |
| - population_type_name | String |  | 1 | 1 |  |
| - record_size | Long |  | 1 | 1 |  |
| - match_size | Long |  | 1 | 1 |  |
| - cover_num | Long |  | 1 | 1 |  |
| - status | Integer |  | 1 | 1 |  |
| - src_id | Long |  | 1 | 1 |  |
| - create_time | Long |  | 1 | 1 |  |
| - verify_time | Long |  | 1 | 1 |  |
| - profile_tags | String |  | 1 | 1 |  |
| - unbind | String |  | 1 | 1 |  |
| - unbind_type | String |  | 1 | 1 |  |
| - success_unbind | String |  | 1 | 1 |  |
| - fail_unbind | String |  | 1 | 1 |  |
| - tp_code | Integer |  | 1 | 1 |  |
| - is_exclude_population | Boolean |  | 1 | 1 |  |
| - update_time | Long |  | 1 | 1 |  |
| - category_type | Integer |  | 1 | 1 |  |
| - can_exclude | Integer |  | 1 | 1 |  |
| - can_target | Integer |  | 1 | 1 |  |
| - src_type | Integer |  | 0 | 人群包来源 | 0：DMP平台（磁力万象）；1：MAPI平台；2：CDP平台（磁力方舟）；3：CDP投放共建类型 |
| - common_exclude | AdDmpPopulationView2[] |  | [] | 通用排除人群 |  |
| - orientation_id | Long |  | 1 | 1 |  |
| - orientation_name | String |  | 1 | 1 |  |
| - account_id | Long |  | 1 | 1 |  |
| - type | Integer |  | 1 | 1 |  |
| - population_type | Integer |  | 1 | 1 |  |
| - population_type_name | String |  | 1 | 1 |  |
| - record_size | Long |  | 1 | 1 |  |
| - match_size | Long |  | 1 | 1 |  |
| - cover_num | Long |  | 1 | 1 |  |
| - status | Integer |  | 1 | 1 |  |
| - src_id | Long |  | 1 | 1 |  |
| - create_time | Long |  | 1 | 1 |  |
| - verify_time | Long |  | 1 | 1 |  |
| - profile_tags | String |  | 1 | 1 |  |
| - unbind | String |  | 1 | 1 |  |
| - unbind_type | String |  | 1 | 1 |  |
| - success_unbind | String |  | 1 | 1 |  |
| - fail_unbind | String |  | 1 | 1 |  |
| - tp_code | Integer |  | 1 | 1 |  |
| - is_exclude_population | Boolean |  | 1 | 1 |  |
| - update_time | Long |  | 1 | 1 |  |
| - category_type | Integer |  | 1 | 1 |  |
| - can_exclude | Integer |  | 1 | 1 |  |
| - can_target | Integer |  | 1 | 1 |  |
| - src_type | Integer |  | 0 | 人群包来源 | 0：DMP平台（磁力万象）；1：MAPI平台；2：CDP平台（磁力方舟）；3：CDP投放共建类型 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "interest_target": [],
        "industry_target": [
            {
                "fail_unbind": null,
                "src_id": 0,
                "can_target": 1,
                "create_time": 1679241600000,
                "orientation_id": 146256970,
                "unbind_type": null,
                "orientation_name": "品牌触达(R1)人群",
                "record_size": 0,
                "category_type": 2,
                "success_unbind": null,
                "tp_code": null,
                "type": 0,
                "verify_time": 0,
                "update_time": 1679241600000,
                "population_type_name": null,
                "account_id": 9795489,
                "unbind": null,
                "match_size": 0,
                "can_exclude": 1,
                "cover_num": 28121231,
                "src_type": 2,
                "profile_tags": "",
                "status": 4,
                "population_type": 65
            }
        ],
        "negative_exclude": [],
        "react_target": [],
        "consume_target": [],
        "common_exclude": []
    },
    "message": "OK",
    "request_id": "EMmAgICg8o6OChi4AiDWmtSj8DAoy4Pk4gE="
}
```
