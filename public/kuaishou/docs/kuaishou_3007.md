---
title: 批量获取广告组出价建议
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3007&menuId=3754
doc_id: kuaishou_3007
source_id: kuaishou_3007
---
# 批量获取广告组出价建议

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3007 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:13:09.763Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/unit/suggestBid/detail |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 1 | 广告主ID |  |
| suggest_bid_param | GateSuggestBidUnitParam[] |  |  | 出价建议入参 |  |
| - bid_type | Long | 是 | 10 | 出价类型 | 1：CPM，2：CPC，6：OCPC(使用 OCPC 代表 OCPX)，10：OCPM，20：eCPC |
| - unit_id | Long | 是 | 3362790 | 广告单元id | 新建时该值为0，编辑时该值为广告组id |
| - campaign_id | Long |  | 24207565 | 广告创意id |  |
| - predict_cpa_bid | Long | 是 | 22000 | 预测cpa出价 | 保持和current_cpa_bid一致即可。 |
| - current_cpa_bid | Long | 是 | 22000 | 当前cpa出价 | 新建广告组时，该值为0；编辑广告组时，该值为用户原来填写的浅度出价。单位厘 |
| - ocpx_action_type | Integer | 是 | 62 | ocpx类型 | 0：未知，2：点击转化链接，10：曝光，11：点击，31：下载完成，53：提交线索，109：电话卡激活，137：量房，180：激活，190：付费，191：首日ROI，348：有效线索，383：授信，384：完件，715：微信复制，739：7日付费次数 |
| - deep_conversion_type | Integer |  | null | 深度转化类型 | 3：付费，7：次日留存，10：完件，11：授信 ，0：无 |
| - predict_deep_conv_bid | Long |  | 50000 | 要预估的新深度出价 | 保持和curr_deep_bid一致即可 |
| - curr_deep_bid | Long |  | 22000 | 老深度出价，单位厘 | 单位厘。新建广告组时，该值为0；编辑广告组时，该值为用户原来填写的深度出价 |
| - device_os_type | Integer |  | 1 | 操作系统，0:不限，1:ios, 2:android | 0：不限，1：ios，2：Android |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id":12970515,
    "suggest_bid_param":[{
        "bid_type":10,
        "campaign_id":596467876,
        "current_cpa_bid":298560,
        "current_deep_bid":0,
        "deep_conversion_type":null,
        "ocpx_action_type":53,
        "predict_cpa_bid":0,
        "predict_deep_bid":0,
        "unit_id":1177725596
    }]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 状态码 |  |
| message | String |  | ok | 返回信息 |  |
| data | SuggestBidUnits |  |  | 出价建议列表 |  |
| - suggest_bid | GateSuggestBidUnit[] |  |  | 出价建议列表 |  |
| - can_suggest | Boolean |  | true | 是否展示出价建议 |  |
| - suggest_bid | Integer |  | 42556 | 浅度出价建议值 |  |
| - suggest_bid_min | Integer |  | 0 | 建议区间最小值 |  |
| - suggest_bid_max | Integer |  | 0 | 建议区间最大值 |  |
| - unit_id | Long |  | 3362790 | 广告单元id |  |
| - suggest_deep_bid | Integer |  | 42556 | 深度出价建议值 |  |
| - can_percent | Boolean |  | true | 是否展示分位值 |  |
| - bid_percentile | GateBidPercentileModel |  |  | 浅度出价分位值 |  |
| - suggest_bid_percentile | Integer |  | 60 | 建议出价所处分位值 |  |
| - percentile | GatePercentileModel[] |  | [ { "percentile_num":10, "bid":288730 }, { "percentile_num":60, "bid":304878 }, { "percentile_num":90, "bid":312522 } ] | 不同出价与分位值的对应 |  |
| - percentile_num | Integer |  | 60 | 出价对应分位值 |  |
| - bid | Integer |  | 10000 | 出价 |  |
| - deep_bid_percentile | GateBidPercentileModel |  |  | 深度出价分位值 |  |
| - suggest_bid_percentile | Integer |  | 60 | 建议出价所处分位值 |  |
| - percentile | GatePercentileModel[] |  | [ { "percentile_num":10, "bid":288730 }, { "percentile_num":60, "bid":304878 }, { "percentile_num":90, "bid":312522 } ] | 不同出价与分位值的对应 |  |
| - percentile_num | Integer |  | 60 | 出价对应分位值 |  |
| - bid | Integer |  | 10000 | 出价 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "data": {
    "suggest_bid": [
      {
        "suggest_bid_max": 0,
        "can_percent": true,
        "suggest_bid": 126823,
        "suggest_bid_min": 0,
        "deep_bid_percentile": {
          "percentile": [],
          "suggest_bid_percentile": 0
        },
        "suggest_deep_bid": 0,
        "bid_percentile": {
          "percentile": [
            {
              "percentile_num": 10,
              "bid": 120550
            },
            {
              "percentile_num": 60,
              "bid": 126630
            },
            {
              "percentile_num": 90,
              "bid": 128580
            }
          ],
          "suggest_bid_percentile": 82
        },
        "unit_id": 1177725596,
        "can_suggest": true
      }
    ]
  },
  "message": "OK",
  "request_id": "63261cc2b8d947478c304b61249701b7"
}
```
