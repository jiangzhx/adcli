---
title: 出价模拟预估 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/bid_simulation/get
doc_id: tencent_ads_v3_0_docs_api_bid_simulation_get
source_id: tencent_ads_v3_0_docs_api_bid_simulation_get
---
# 出价模拟预估 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | bid_simulation/get |
| 请求方法 | GET |

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
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| req_type* | integer | 预估周期，0:小时级数据;1:天级数据, 当前投放小时曝光数>100 可提供天级预估服务 最小值 0，最大值 1 |
| optimization_goal_level* | integer | 优化目标层级，0:浅层转化出价;1:深层转化出价 最小值 0，最大值 1 |
| adgroup_id* | int64 | 广告 id |
| bid_list* | integer[] | 根据给定的出价序列进行模拟，单位为分 数组最小长度 1，最大长度 20 最小值 0，最大值 9999999 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/bid_simulation/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'adgroup_id=<ADGROUP_ID>' \
-d 'bid_list=[]'
curl -v -G 'https://api.e.qq.com/v3.0/bid_simulation/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'adgroup_id=<ADGROUP_ID>' \
-d 'bid_list=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| diag_bid_simulate | struct[] | 出价模拟结果列表 |
| bid | integer | 出价，单位为分 |
| expose_cnt | integer | 预估曝光 |
| click_cnt | integer | 预估点击 |
| conversion_cnt | integer | 预估转化 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "diag_bid_simulate": []
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
