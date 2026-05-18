---
title: 魔力建站获取数据报表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2653&menuId=3378
doc_id: kuaishou_2653
source_id: kuaishou_2653
---
# 魔力建站获取数据报表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2653 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 魔力建站 |
| createTime | 2024-07-04T12:24:25.063Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/report/summary |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 账号ID |  |
| end_time | String | 是 |  | 结束时间 | 查询落地页列表接口获取。如果您想要获取全部落地页的信息，应当将page_id设置为0 |
| start_time | String | 是 |  | 开始时间 | 数据报表的统计开始时间（东八区），格式为yyyy-MM-dd hh:mm:ss |
| page_id | Long | 是 |  | 落地页ID | 数据报表的统计结束时间（东八区），格式为yyyy-MM-dd hh:mm:ss |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": "123456",
    "start_time": "2023-12-20 00:00:00",
    "end_time": "2023-12-20 23:59:59",
    "page_id": "0"
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | code码 |  |
| message | String |  |  | 提示信息 |  |
| data | GetDataSummaryReportResp |  |  | 数据 |  |
| - date | Long |  |  | 日期 |  |
| - page_id | Long |  |  | 页面ID |  |
| - component_id | Long |  |  | 组件ID |  |
| - pv | Long |  |  | PV |  |
| - uv | Long |  |  | UV |  |
| - conversion | Long |  |  | 转化数 |  |
| - conversion_rate | Double |  |  | 转化率(百分率) |  |
| - above_bounce_rate | Double |  |  | 首屏跳失率(百分率) |  |
| - avg_stay_duration | Double |  |  | 平均停留时长(秒) |  |
| - avg_view_rate | Double |  |  | 平均流量比例(百分数) |  |
| - form_submit_count | Long |  |  | 表单提交数 |  |
| - customer_service_click_count | Long |  |  | 咨询组件点击数 |  |
| - customer_service_conversion_click_count | Long |  |  | 有效咨询数 |  |
| - making_calls_count | Long |  |  | 电话组件点击数 |  |
| - button_click_count | Long |  |  | 电话组件点击数 |  |
| - add_wechat_count | Long |  |  | 微信调起数 |  |
| - click_wechat_count | Long |  |  | 微信点击数 |  |
| - copy_wechat_count | Long |  |  | 添加微信数 |  |
| - consultation_valid_retained_count | Long |  |  | 咨询留咨数 |  |
| - out_bound_call_count | Long |  |  | 电话拨打数 |  |
| - phone_get_through_count | Long |  |  | 电话接通数 |  |
| - download_click_count | Long |  |  | 下载组件点击数 |  |
| - button_deeplink_invoked_rate | Double |  |  | 按钮唤端率 |  |
| - deeplink_invoked_success_rate | Double |  |  | 唤醒成功率 |  |
| - event_form_submit_fill_count | Long |  |  | 表单填写量 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "date": 0,
        "avg_view_rate": 0.0,
        "pv": 0,
        "button_deeplink_invoked_rate": 0.0,
        "copy_wechat_count": 0,
        "page_id": 0,
        "phone_get_through_count": 0,
        "avg_stay_duration": 0,
        "conversion_rate": 0.0,
        "conversion": 0,
        "uv": 0,
        "event_form_submit_fill_count": 0,
        "component_id": 0,
        "making_calls_count": 0,
        "consultation_valid_retained_count": 0,
        "download_click_count": 0,
        "customer_service_click_count": 0,
        "deeplink_invoked_success_rate": 0.0,
        "customer_service_conversion_click_count": 0,
        "out_bound_call_count": 0,
        "click_wechat_count": 0,
        "add_wechat_count": 0,
        "form_submit_count": 0,
        "above_bounce_rate": 0.0,
        "button_click_count": 0
    },
    "message": "OK",
    "request_id": "d16c5c13738b427788c6df9e1a01db18"
}
```
