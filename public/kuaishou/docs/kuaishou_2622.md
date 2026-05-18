---
title: 商品库报表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2622&menuId=3346
doc_id: kuaishou_2622
source_id: kuaishou_2622
---
# 商品库报表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2622 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:30:39.244Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/report |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| library_id | Long | 是 | 0 | 商品库ID |  |
| start_date | String | 是 | YYYY-MM-DD | 起始时间 | startDate和endDate相差不能超过半年 |
| end_date | String | 是 | YYYY-MM-DD | 截止时间 | startDate和endDate相差不能超过半年 |
| page | Integer |  | 1 | 页码 |  |
| page_size | Integer |  | 20 | 页大小 |  |
| advertiser_id | Long | 是 | 0 | 投放账号ID |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/report' \
--header 'Access-Token: c94bb7778ad1614dd77a9c446d28c1bd' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 900015068,
    "library_id": 1,
    "start_date": "2022-01-01",
    "end_date": "2022-04-01"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 结果状态码 |  |
| message | String |  |  | 错误结果信息 |  |
| data | AdGatewayDpaReportView |  |  | 商品库报表查询结果 |  |
| - result_list | AdDpaReportViewSnake[] |  |  | 单商品报表数据集 |  |
| - advertiser_id | Long |  | 0 | 投放账号ID |  |
| - ad_item_action_cost | Double |  | 0.0 | 行为成本 |  |
| - ad_item_action_ratio | Double |  | 0.0 | 行为率 |  |
| - ad_item_click | Long |  | 0 | 行为数 |  |
| - dpa_cost_total | Long |  | 0 | 花费 |  |
| - create_time | Long |  | 0 | 商品创建时间 |  |
| - update_time | Long |  | 0 | 商品最后更新时间 |  |
| - dpa_impression1k_cost | Double |  | 0.0 | 商品千次曝光成本 |  |
| - dpa_impression_num | Long |  | 0 | 商品曝光数 |  |
| - product_name | String |  |  | 商品名称 |  |
| - put_status | Integer |  | 0 | 商品投放状态: 0-关, 1-开 |  |
| - total_conversion_cost | Double |  | 0.0 | 转化成本 |  |
| - total_conversion_num | Double |  | 0.0 | 总的转化数 |  |
| - total_conversion_ratio | Double |  | 0.0 | 转化率 |  |
| - library_id | Long |  | 0 | 商品库ID |  |
| - outer_id | String |  |  | 商品ID |  |
| - sub_industry_name | String |  |  | 商品类型 |  |
| - title | String |  |  | 商品标题 |  |
| - category | String |  |  | 商品类目 |  |
| - theme | String |  |  | 商品题材 |  |
| - ad_show | Long |  |  | 广告曝光 |  |
| - impression | Long |  |  | 封面曝光数 |  |
| - photo_click | Long |  |  | 封面点击数 |  |
| - photo_click_ratio | Double |  |  | 封面点击率 |  |
| - click | Long |  |  | 素材曝光数 |  |
| - action_ratio | Double |  |  | 素材点击率 |  |
| - download_started | Long |  |  | 安卓下载开始数 |  |
| - download_completed_cost | Double |  |  | 安卓下载完成单价 |  |
| - download_started_ratio | Long |  |  | 安卓开始下载率 |  |
| - download_completed | Long |  |  | 安卓下载完成数 |  |
| - download_completed_ratio | Double |  |  | 安卓下载完成率 |  |
| - conversion | Long |  |  | 激活数 |  |
| - conversion_cost | Double |  |  | 激活单价 |  |
| - event_new_user_pay | Long |  |  | 新增付费人数 |  |
| - event_new_user_pay_cost | Double |  |  | 新增付费人数成本 |  |
| - event_new_user_pay_ratio | Double |  |  | 新增付费人数率 |  |
| - event_pay_first_day | Long |  |  | 首日付费次数 |  |
| - event_pay_first_day_cost | Double |  |  | 首日付费次数成本 |  |
| - event_pay_purchase_amount_first_day | Long |  |  | 激活当日付费金额 |  |
| - event_pay_first_day_roi | Double |  |  | 激活当日ROI |  |
| - impression_1k_cost | Double |  |  | 平均千次封面曝光花费(元) |  |
| - click_1k_cost | Double |  |  | 平均千次素材曝光花费 |  |
| - photo_click_cost | Double |  |  | 平均封面点击单价 |  |
| - download_conversion_ratio | Double |  |  | 下载完成激活率 |  |
| - event_24h_stay_by_conversion_cost | Double |  |  | 激活后24h次日留存成本（激活时间） |  |
| - event_24h_stay | Long |  |  | 激活后24h次日留存数（激活时间） |  |
| - event_24h_stay_ratio | Double |  |  | 激活后24h次日留存率（激活时间） |  |
| - event_pay_purchase_amount_one_day_by_conversion | Double |  |  | 激活后24h付费金额(激活时间) |  |
| - event_pay_purchase_amount_one_day_by_conversion_roi | Double |  |  | 激活后24h-ROI(激活时间) |  |
| - event_next_day_stay | Double |  |  | 自然日次日留存数（回传时间） |  |
| - event_next_day_stay_cost | Long |  |  | 自然日次日留存成本（回传时间 |  |
| - event_next_day_stay_ratio | Double |  |  | 自然日次日留存率（回传时间） |  |
| - sum | AdDpaReportViewSnake[] |  |  | 全局汇总 |  |
| - advertiser_id | Long |  | 0 | 投放账号ID |  |
| - ad_item_action_cost | Double |  | 0.0 | 行为成本 |  |
| - ad_item_action_ratio | Double |  | 0.0 | 行为率 |  |
| - ad_item_click | Long |  | 0 | 行为数 |  |
| - dpa_cost_total | Long |  | 0 | 花费 |  |
| - create_time | Long |  | 0 | 商品创建时间 |  |
| - update_time | Long |  | 0 | 商品最后更新时间 |  |
| - dpa_impression1k_cost | Double |  | 0.0 | 商品千次曝光成本 |  |
| - dpa_impression_num | Long |  | 0 | 商品曝光数 |  |
| - product_name | String |  |  | 商品名称 |  |
| - put_status | Integer |  | 0 | 商品投放状态: 0-关, 1-开 |  |
| - total_conversion_cost | Double |  | 0.0 | 转化成本 |  |
| - total_conversion_num | Double |  | 0.0 | 总的转化数 |  |
| - total_conversion_ratio | Double |  | 0.0 | 转化率 |  |
| - library_id | Long |  | 0 | 商品库ID |  |
| - outer_id | String |  |  | 商品ID |  |
| - sub_industry_name | String |  |  | 商品类型 |  |
| - title | String |  |  | 商品标题 |  |
| - category | String |  |  | 商品类目 |  |
| - theme | String |  |  | 商品题材 |  |
| - ad_show | Long |  |  | 广告曝光 |  |
| - impression | Long |  |  | 封面曝光数 |  |
| - photo_click | Long |  |  | 封面点击数 |  |
| - photo_click_ratio | Double |  |  | 封面点击率 |  |
| - click | Long |  |  | 素材曝光数 |  |
| - action_ratio | Double |  |  | 素材点击率 |  |
| - download_started | Long |  |  | 安卓下载开始数 |  |
| - download_completed_cost | Double |  |  | 安卓下载完成单价 |  |
| - download_started_ratio | Long |  |  | 安卓开始下载率 |  |
| - download_completed | Long |  |  | 安卓下载完成数 |  |
| - download_completed_ratio | Double |  |  | 安卓下载完成率 |  |
| - conversion | Long |  |  | 激活数 |  |
| - conversion_cost | Double |  |  | 激活单价 |  |
| - event_new_user_pay | Long |  |  | 新增付费人数 |  |
| - event_new_user_pay_cost | Double |  |  | 新增付费人数成本 |  |
| - event_new_user_pay_ratio | Double |  |  | 新增付费人数率 |  |
| - event_pay_first_day | Long |  |  | 首日付费次数 |  |
| - event_pay_first_day_cost | Double |  |  | 首日付费次数成本 |  |
| - event_pay_purchase_amount_first_day | Long |  |  | 激活当日付费金额 |  |
| - event_pay_first_day_roi | Double |  |  | 激活当日ROI |  |
| - impression_1k_cost | Double |  |  | 平均千次封面曝光花费(元) |  |
| - click_1k_cost | Double |  |  | 平均千次素材曝光花费 |  |
| - photo_click_cost | Double |  |  | 平均封面点击单价 |  |
| - download_conversion_ratio | Double |  |  | 下载完成激活率 |  |
| - event_24h_stay_by_conversion_cost | Double |  |  | 激活后24h次日留存成本（激活时间） |  |
| - event_24h_stay | Long |  |  | 激活后24h次日留存数（激活时间） |  |
| - event_24h_stay_ratio | Double |  |  | 激活后24h次日留存率（激活时间） |  |
| - event_pay_purchase_amount_one_day_by_conversion | Double |  |  | 激活后24h付费金额(激活时间) |  |
| - event_pay_purchase_amount_one_day_by_conversion_roi | Double |  |  | 激活后24h-ROI(激活时间) |  |
| - event_next_day_stay | Double |  |  | 自然日次日留存数（回传时间） |  |
| - event_next_day_stay_cost | Long |  |  | 自然日次日留存成本（回传时间 |  |
| - event_next_day_stay_ratio | Double |  |  | 自然日次日留存率（回传时间） |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "page_info": {
            "total_count": 0,
            "current_page": 1,
            "page_size": 20
        },
        "result_list": [],
        "sum": []
    },
    "message": "OK",
    "request_id": "334dafd35cd3453ab4371b794811abdb"
}
```
