---
title: 小店通转化数据报表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2954&menuId=3705
doc_id: kuaishou_2954
source_id: kuaishou_2954
---
# 小店通转化数据报表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2954 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:29:50.941Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/merchant/report/detail_report |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主 ID（注：非账户快手 ID），在获取 accessToken 时返回 |  |
| view_type | Integer |  |  | 数据类型：1：账户；2：广告计划；3：广告组；4：广告创意 |  |
| group_type | Integer |  |  | 汇总方式：1：天 （默认值）；2：小时 此时 start_date 只能是当天，end_date 只能是下一天 |  |
| start_date | String |  |  | 过滤筛选条件，格式 yyyy-MM-dd |  |
| end_date | String |  |  | 过滤筛选条件，格式 yyyy-MM-dd |  |
| campaign_ids | String |  |  | 计划 id 列表，以英文逗号分割，查询计划转化数据 viewType=2 时必填，否则不用填写 | （可选） |
| unit_ids | String |  |  | 单元 id 列表，以英文逗号分割，查询单元转化数据 viewType=3 时必填，否则不用填写 | （可选） |
| creative_ids | String |  |  | 创意 id 列表，以英文逗号分割，查询创意转化数据 viewType=4 时必填，否则不用填写 | （可选） |
| programmed_creative_ids | String |  |  | 程序化创意 id 列表，以英文逗号分割，查询程序化创意转化数据 viewType=4 时必填，，否则不用填写 | （可选） |
| page | Integer |  |  | 请求的页码，默认为 1 |  |
| page_size | Integer |  |  | 每页行数，默认为 20，最大支持 2000 |  |

## 请求样例

### 请求样例 (shell)

```
curl -H "Access-Token:d198a850da67a16279e30" \
-H "Content-Type:application/json" \
-d '

{
   	"start_date": "2021-03-01",
   	"end_date": "2021-03-07",
   	"advertiser_id": 486,
       "view_type": 2,
       "campaign_ids": "111,222",
      	"page_size": 2,
   	"page": 1
}
' https://ad.e.kuaishou.com/rest/openapi/v1/merchant/report/detailReport
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码/错误码 |  |
| message | String |  |  | 返回信息/错误信息 |  |
| data | ReportDetailReportData |  |  | 返回数据 |  |
| - total_count | Integer |  |  | 数据的总行数 |  |
| - details | ReportDetailReportDetail |  |  | 数据明细信息 |  |
| - report_date | String |  |  | 日期 |  |
| - report_hour | Integer |  |  | 小时 |  |
| - report_date_hour | String |  |  | 日期+小时 |  |
| - campaign_name | String |  |  | 计划名称 |  |
| - campaign_id | String |  |  | 计划 ID |  |
| - unit_name | String |  |  | 广告组名称 |  |
| - unit_id | String |  |  | 广告组 ID |  |
| - creative_name | String |  |  | 创意名称 |  |
| - creative_id | String |  |  | 创意 id |  |
| - cost_total | Long |  |  | 花费 |  |
| - impression | Long |  |  | 封面曝光数 |  |
| - photo_click | Long |  |  | 封面点击数 |  |
| - photo_click_ratio | Double |  |  | 封面点击率 |  |
| - click | Long |  |  | 素材曝光数 |  |
| - actionbar_click | Long |  |  | 行为数 |  |
| - action_ratio | Double |  |  | 行为率 |  |
| - merchant_photo_impression_1k_cost | Double |  |  | 平均千次封面曝光花费(元) |  |
| - merchant_photo_click_cost | Double |  |  | 平均封面点击单价(元) |  |
| - merchant_impression_1k_cost | Double |  |  | 平均千次素材曝光花费(元) |  |
| - merchant_click_cost | Double |  |  | 平均行为单价(元) |  |
| - play_3s_ratio | Double |  |  | 3s 播放率 |  |
| - play_5s_ratio | Double |  |  | 5s 播放率 |  |
| - play_end_ratio | Double |  |  | 完播率 |  |
| - share | Long |  |  | 分享数 |  |
| - comment | Long |  |  | 评论数 |  |
| - likes | Long |  |  | 点赞数 |  |
| - report | Long |  |  | 举报数 |  |
| - block | Long |  |  | 拉黑数 |  |
| - negative | Long |  |  | 减少此类作品数 |  |
| - merchant_reco_fans | Long |  |  | 涨粉量 |  |
| - reco_fans_cost | Double |  |  | 涨粉成本（元） |  |
| - paied_order | Long |  |  | 支付订单数 |  |
| - order_cost | Double |  |  | 下单成本 |  |
| - gmv | Double |  |  | GMV |  |
| - t0_gmv | Long |  |  | 当日累计 GMV |  |
| - t1_gmv | Long |  |  | 投后 1 日累计 GMV |  |
| - t3_gmv | Long |  |  | 投后 3 日累计 GMV |  |
| - t7_gmv | Long |  |  | 投后 7 日累计 GMV |  |
| - t15_gmv | Long |  |  | 投后 15 日累计 GMV |  |
| - t30_gmv | Long |  |  | 投后 30 日累计 GMV |  |
| - roi | Double |  |  | ROI |  |
| - t0Roi | Double |  |  | 当日累计 ROI |  |
| - t1Roi | Double |  |  | 投后 1 日累计 ROI |  |
| - t3Roi | Double |  |  | 投后 3 日累计 ROI |  |
| - t7Roi | Double |  |  | 投后 7 日累计 ROI |  |
| - t15Roi | Double |  |  | 投后 15 日累计 ROI |  |
| - t30Roi | Double |  |  | 投后 30 日累计 ROI |  |
| - t7_retention | Long |  |  | 投后 7 日涨粉留存量 |  |
| - t30_retention | Long |  |  | 投后 30 日涨粉留存量 |  |
| - t7_retention_ratio | Double |  |  | 投后 7 日涨粉留存率 |  |
| - t30_retention_ratio | Double |  |  | 投后 30 日涨粉留存率 |  |
| - t0_order_cnt | Long |  |  | 当日累计订单成交量 |  |
| - t1_order_cnt | Long |  |  | 投后 1 日累计订单成交量 |  |
| - t3_order_cnt | Long |  |  | 投后 3 日累计订单成交量 |  |
| - t7_order_cnt | Long |  |  | 投后 7 日累计订单成交量 |  |
| - t15_order_cnt | Long |  |  | 投后 15 日累计订单成交量 |  |
| - t30_order_cnt | Long |  |  | 投后 30 日累计订单成交量 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
	"code": 0,
	"message": "OK",
	"data": {
		"total_count": 1,
		"details": [{
			"report_date": "2021-03-05",
			"report_hour": 0,
			"campaign_id": 36700091,
			"campaign_name": "直播推广_20210305_11:45",
			"unit_id": 0,
			"unit_name": "",
			"creative_id": 0,
			"creative_name": "",
			"put_status": 1,
			"unit_create_time": 0,
			"campaign_create_time": 1614915941428,
			"creative_create_time": 0,
			"cost_total": 0,
			"paied_order": 0,
			"gmv": 0.0,
			"t1_retention": 0,
			"t7_retention": 0,
			"t30_retention": 0,
			"t0_order_cnt": 0,
			"t1_order_cnt": 0,
			"t3_order_cnt": 0,
			"t7_order_cnt": 0,
			"t15_order_cnt": 0,
			"t30_order_cnt": 0,
			"t0_gmv": 0,
			"t1_gmv": 0,
			"t3_gmv": 0,
			"t7_gmv": 0,
			"t15_gmv": 0,
			"t30_gmv": 0,
			"merchant_photo_impression_1k_cost": 0.0,
			"merchant_photo_click_cost": 0.0,
			"merchant_impression_1k_cost": 0.0,
			"merchant_click_cost": 0.0,
			"order_cost": 0.0,
			"roi": 0.0,
			"t1_retention_ratio": 0.0,
			"t7_retention_ratio": 0.0,
			"t30_retention_ratio": 0.0,
			"t0_roi": 0.0,
			"t1_roi": 0.0,
			"t3_roi": 0.0,
			"t7_roi": 0.0,
			"t15_roi": 0.0,
			"t30_roi": 0.0,
			"impression": 0,
			"photo_click": 0,
			"photo_click_ratio": 0.0,
			"click": 0,
			"actionbar_click": 0,
			"action_ratio": 0.0,
			"play_3s_ratio": 0.0,
			"play_5s_ratio": 0.0,
			"play_end_ratio": 0.0,
			"share": 0,
			"comment": 0,
			"likes": 0,
			"report": 0,
			"block": 0,
			"negative": 0.0,
			"merchant_reco_fans": 0,
			"reco_fans_cost": 0.0,
			"played_three_seconds": 0,
			"played_five_seconds": 0,
			"played_end": 0,
			"live_played_3s": 0,
			"live_event_goods_view": 0,
			"live_reward": 0,
			"live_comment": 0,
			"live_share": 0,
			"conversion_live_play_3_s_cost": 0.0,
			"conversion_live_event_goods_view_cost": 0.0,
			"live_event_goods_view_ratio": 0.0,
			"reportDateHour": "2021-03-05 00:00"
		}]
	},
	"request_id": "5ec6d47de07345ada69eee1b34586afc"
}
```
