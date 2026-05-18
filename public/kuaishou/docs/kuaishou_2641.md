---
title: 查询账号共享视频库按钮是否开启
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2641&menuId=3365
doc_id: kuaishou_2641
source_id: kuaishou_2641
---
# 查询账号共享视频库按钮是否开启

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2641 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:40:05.233Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/video/queryAutoShareSwitch |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
  "advertiser_id": 7869843
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdMarketVideoQueryAutoShareSwitchView |  |  | 信息 |  |
| - switch_status | Boolean |  |  | 开关状态：true代表开启，false代表关闭 |  |
| - user_id | Long |  |  | 所属的user_id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "data": {
    "user_id": 1743291153,
    "switch_status": true
  },
  "message": "OK",
  "request_id": "EMyBgIDAlZWaChiGECClpZ3w6zEo0Jqx8A8="
}
```
