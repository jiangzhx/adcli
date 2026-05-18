---
title: MCP 简介
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/mcp_info
doc_id: tencent_ads_v3_0_pages_mcp_info
source_id: tencent_ads_v3_0_pages_mcp_info
---
# MCP 简介

## 腾讯广告 MCP

腾讯广告 MCP（Model Context Protocol）服务，助力开发者通过 AI 工具快速完成广告投放、创意创建、数据分析、工具调用，意在降低投放门槛，提升营销效率。

## MCP 鉴权配置

```
{
	"mcpServers": {
		"腾讯广告 MCP 工具": {
			"transportType": "streamable-http",
			"url": "<MCP URL>",
			"headers": {
				"Authorization": "Bearer <your_bearer_token>",
				"access_token": "<your_access_token>"
			}
		}
	}
},
```

MCP 服务间 KEY 鉴权："Authorization":"Bearer <your_bearer_token>" <your_bearer_token> 分配的访问密钥，联系运营人员获取

Marketing-API 鉴权 :"access_token":"<your_access_token>" <your_access_token> API 访问时通过 OAuth2.0 授权获取

MCP URL :"<MCP URL>" 腾讯广告 MCP 服务地址
