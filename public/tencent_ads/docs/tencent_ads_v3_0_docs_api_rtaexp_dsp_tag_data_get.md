---
title: dsp_tag 数据查询 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/rtaexp_dsp_tag_data/get
doc_id: tencent_ads_v3_0_docs_api_rtaexp_dsp_tag_data_get
source_id: tencent_ads_v3_0_docs_api_rtaexp_dsp_tag_data_get
---
# dsp_tag 数据查询 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | rtaexp_dsp_tag_data/get |
| 请求方法 | POST |
| Content-Type | application/json |

## 全局参数

全局参数是指每一个接口都需要使用到的参数。详情[参考](https://developers.e.qq.com/v3.0/pages/send_request)，代码案例[参考](https://developers.e.qq.com/v3.0/pages/send_request)。

| 参数名称 | 参数类型 |
| --- | --- |
| access_token | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/docs/start/authorization)章节 |
| timestamp | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。 MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2017-05-15 17:21:59 |
| nonce | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性 |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| data* | struct | dsp_tag 数据查询信息 |
| Granularity | string | 时间粒度，仅支持：hour,day，分别是小时、天。粒度对应的查询范围不同：小时粒度的支持 3 天内的数据查询（起止时间跨度不超过 6 小时）；天粒度数据支持 15 天内数据查询（起止时间跨度不超过 3 天） |
| BeginTime* | integer | 开始时间，格式 2022030100，闭区间，Granularity 为 day 的时候，只取日期值 |
| EndTime* | integer | 结束时间，格式 2022030123，闭区间，Granularity 为 day 的时候，只取日期值 |
| DspTag* | integer[] | 查询的 dsp_tag_id 列表，最多 10 个 |
| FUId | integer[] | 账号 id 列表，最多 10 个 |
| OuterTargetId | string[] | 外部策略 id 列表，最多 10 个 |
| GroupBy | string[] | 展开字段列表，按这里传的字段聚合，最多 4 个，仅支持 FUId,OuterTargetId,DspTag |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/rtaexp_dsp_tag_data/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "data": {
        "DspTag": [],
        "FUId": [],
        "OuterTargetId": [],
        "GroupBy": []
    }
}'
curl 'https://api.e.qq.com/v3.0/rtaexp_dsp_tag_data/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "data": {
        "DspTag": [],
        "FUId": [],
        "OuterTargetId": [],
        "GroupBy": []
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| Records | struct[] | dsp_tag 数据列表 |
| Date | integer | 时间，天粒度 |
| DateHour | integer | 时间，小时粒度 |
| FUId | integer | 账号 id，仅 GroupBy 传了才返回 |
| DspTag | integer | dsp_tag_id，仅 GroupBy 传了才返回 |
| OuterTargetId | string | 外部策略 id，仅 GroupBy 传了才返回 |
| Cost | integer | 消耗，除以 10 的 4 次方转为单位分 |
| ConversionCount | integer | 转化量 |
| SecondConversionCount | integer | 转化量，第二目标 |
| ValidExposureCount | integer | 有效曝光数 |
| ValidClickCount | integer | 有效点击数 |
| MdCheoutFD | integer | 首日付费金额 |
| MdCheoutTD | integer | 3 日付费金额 |
| MdCheoutOW | integer | 7 日付费金额 |
| MdMgPurchaseVal1 | integer | 小游戏注册首日付费金额 |
| MdMgPurchaseVal3 | integer | 小游戏 3 日付费金额 |
| MdMgPurchaseVal7 | integer | 小游戏 7 日付费金额 |
| MdMgRegUV | integer | 小游戏注册人数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "Records": []
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
