---
title: 基本信息查询 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/rta_info/get
doc_id: tencent_ads_v3_0_docs_api_rta_info_get
source_id: tencent_ads_v3_0_docs_api_rta_info_get
---
# 基本信息查询 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | rta_info/get |
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
| RtaId | integer | 广告主在腾讯 RTA 的唯一客户 id，不用传，仅供文档展示使用 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/rta_info/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '[]'
curl 'https://api.e.qq.com/v3.0/rta_info/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| RtaId | integer | 广告主在腾讯 RTA 的唯一客户 id，与 bidurl 唯一对应，由 RTA 系统生成 |
| RtaName | string | 服务注册时提交的 RTA 简称 |
| RtaCompanyName | string | 服务注册时提交的 RTA 全称 |
| QpsLimit | integer | 当前腾讯下发请求执行的 QPS 上限值 |
| CacheTime | integer | 缓存时间 |
| Enable | integer | RTA 服务可用状态，0-停用； 1-可用 |
| rules | struct[] | 流量限制规则列表 |
| RuleType | integer | 流量限制类型，1 => '站点集',2 => '站点',3 => '场景',4 => '规格',5 => '操作系统',6 => '网络环境',7 => '已安装',8 => '媒体 id' |
| RuleTypeName | string | 流量限制类型名称 |
| RuleValue | integer | 流量限制取值，不同 RuleType 对应的含义不同，具体参见 RuleDesc |
| RuleDesc | string | 流量限制描述 |
| bidurls | struct[] | 竞价链接列表 |
| RtaId | integer | 广告主在腾讯 RTA 的唯一客户 id，与 bidurl 唯一对应，由 RTA 系统生成 |
| BidUrl | string | 竞价链接 |
| QpsLimit | integer | qps 限制 |
| Phase | integer | Phase，2=> P2, 3=>P3 |
| AgencyIds | string | 代理商 id，多个英文逗号分隔 |
| IDCZone | string | IDC，tianjing/shanghai/shenzhen |
| ProxyURL | string | 代理链接 |
| IsHttp2 | integer | 是否 http2，0=> 否, 1=>是 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "rules": [],
        "bidurls": []
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
