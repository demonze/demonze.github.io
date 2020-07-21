(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{308:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("本文简单说下session和JWT两种身份认证方式的区别，详细可以看文末的两篇文章")]),e._v(" "),s("h2",{attrs:{id:"session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session","aria-hidden":"true"}},[e._v("#")]),e._v(" session")]),e._v(" "),s("p",[e._v("http协议本身是一种无状态的协议，而这就意味着如果用户向我们的应用提供了用户名和密码来进行用户认证，那么下一次请求时，用户还要再一次进行用户认证才行，因为根据http协议，我们并不能知道是哪个用户发出的请求，所以为了让我们的应用能识别是哪个用户发出的请求，我们只能在服务器存储一份用户登录的信息，这份登录信息会在响应时传递给浏览器，告诉其保存为cookie,以便下次请求时发送给我们的应用，这样我们的应用就能识别请求来自哪个用户了,这就是传统的基于session认证。")]),e._v(" "),s("p",[e._v("弊端：")]),e._v(" "),s("ol",[s("li",[e._v("每个用户经过我们的应用认证之后，我们的应用都要在服务端做一次记录，以方便用户下次请求的鉴别，通常而言session都是保存在内存中，而随着认证用户的增多，服务端的开销会明显增大。")]),e._v(" "),s("li",[e._v("用户认证之后，服务端做认证记录，如果认证的记录被保存在内存中的话，这意味着用户下次请求还必须要请求在这台服务器上,这样才能拿到授权的资源，这样在分布式的应用上，相应的限制了负载均衡器的能力。这也意味着限制了应用的扩展能力。")]),e._v(" "),s("li",[e._v("因为是基于cookie来进行用户识别的，cookie如果被截获，用户就会很容易受到跨站请求伪造的攻击。")])]),e._v(" "),s("h2",{attrs:{id:"jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt","aria-hidden":"true"}},[e._v("#")]),e._v(" JWT")]),e._v(" "),s("p",[e._v("JSON Web Token（JWT）是目前最流行的跨域身份验证解决方案。是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（(RFC 7519).该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。")]),e._v(" "),s("p",[e._v("JWT由三部分组成，每部分之间以“.”分隔。")]),e._v(" "),s("p",[e._v("第一部分包含了数据类型、加密算法，base64转码")]),e._v(" "),s("p",[e._v("第二部分包含了一些特定的字段用于识别身份（不可储存敏感信息，因为可解码），同样base64转码")]),e._v(" "),s("p",[e._v("第三部分用前两部分base64转码后的字符串，使用第一部分声明的加密算法、配以私钥进行加密。")]),e._v(" "),s("p",[e._v("本文简单的记录一下自己的理解，详细的内容可以查看下边的两篇参考文章。")]),e._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/576dbf44b2ae",target:"_blank",rel:"noopener noreferrer"}},[e._v("什么是 JWT -- JSON WEB TOKEN"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://baijiahao.baidu.com/s?id=1608021814182894637",target:"_blank",rel:"noopener noreferrer"}},[e._v("10分钟了解JSON Web令牌（JWT）"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);