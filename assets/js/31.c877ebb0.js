(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{596:function(e,t,_){"use strict";_.r(t);var v=_(9),r=Object(v.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("本文用来记录平常工作学习过程中踩的坑或者一些疑难杂症")]),e._v(" "),_("h2",{attrs:{id:"js"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[e._v("#")]),e._v(" js")]),e._v(" "),_("h3",{attrs:{id:"对象属性是按什么顺序输出的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对象属性是按什么顺序输出的"}},[e._v("#")]),e._v(" 对象属性是按什么顺序输出的")]),e._v(" "),_("p",[e._v("在刷"),_("code",[e._v("LeetCode")]),e._v("的过程中遇到一个奇怪的问题，key自定义为数值从大到小，但是遍历的时候发现是从小到大遍历的，遂想到是不是因为key是数字的原因，但是转换成字符串之后发现仍然没有解决。")]),e._v(" "),_("p",[e._v("经查找资料发现")]),e._v(" "),_("p",[e._v("根据"),_("code",[e._v("ECMA-262（ECMAScript")]),e._v("第三版中描述，"),_("code",[e._v("for-in")]),e._v("语句的属性遍历的顺序是由对象定义时属性的书写顺序决定的。")]),e._v(" "),_("p",[e._v("关于"),_("code",[e._v("ECMA-262（ECMAScript）")]),e._v("第三版中"),_("code",[e._v("for-in")]),e._v("语句的更多信息，请参考 "),_("a",{attrs:{href:"http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECMA-262 3rd Edition"),_("OutboundLink")],1),e._v(" 中 12.6.4 The for-in Statement。")]),e._v(" "),_("p",[e._v("在现有最新的"),_("code",[e._v("ECMA-262（ECMAScript）")]),e._v("第五版规范中，对"),_("code",[e._v("for-in")]),e._v("语句的遍历机制又做了调整，属性遍历的顺序是没有被规定的。")]),e._v(" "),_("p",[e._v("关于 ECMA-262（ECMAScript）第五版中"),_("code",[e._v("for-in")]),e._v("语句的更多信息，请参考 "),_("a",{attrs:{href:"http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECMA-262 5rd Edition"),_("OutboundLink")],1),e._v(" 中 12.6.4 The for-in Statement。")]),e._v(" "),_("p",[e._v("新版本中的属性遍历顺序说明与早期版本不同，这将导致遵循"),_("code",[e._v("ECMA-262")]),e._v("第三版规范内容实现的"),_("code",[e._v("JavaScript")]),e._v("解析引擎在处理"),_("code",[e._v("for-in")]),e._v("语句时，与遵循第五版规范实现的解析引擎，对属性的遍历顺序存在不一致的问题。")]),e._v(" "),_("h4",{attrs:{id:"结论"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[e._v("#")]),e._v(" 结论")]),e._v(" "),_("p",[e._v("Chrome Opera 中使用 for-in 语句遍历对象属性时会遵循一个规律：")]),e._v(" "),_("p",[e._v("它们会先提取所有 key 的 parseFloat 值为非负整数的属性，然后根据数字顺序对属性排序首先遍历出来，然后按照对象定义的顺序遍历余下的所有属性。")]),e._v(" "),_("h4",{attrs:{id:"解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[e._v("#")]),e._v(" 解决方案")]),e._v(" "),_("p",[e._v("for-in 语句无法保证遍历顺序，应尽量避免编写依赖对象属性顺序的代码。如果想顺序遍历一组数据，请使用数组并使用 for 语句遍历。如果想按照定义的次序遍历对象属性，请参考本文针对各浏览器编写特殊代码。")]),e._v(" "),_("h2",{attrs:{id:"css"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[e._v("#")]),e._v(" CSS")]),e._v(" "),_("h3",{attrs:{id:"adblock引发的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#adblock引发的问题"}},[e._v("#")]),e._v(" AdBlock引发的问题")]),e._v(" "),_("p",[e._v("在项目开发的过程中遇到一个奇怪的问题，同事开发的页面，在他电脑上显示正常，在我电脑上一片空白，查看样式发现，被注入了一大堆"),_("code",[e._v("ad-")]),e._v("开头的类名，并设置了"),_("code",[e._v("display: none")]),e._v("。其他几个开发同事也没这个问题，绞尽脑汁不得其因，只能先放过。")]),e._v(" "),_("p",[e._v("后来项目提测后，在一个产品的电脑上发现了跟我一模一样的问题，对比发现，正如标题所示，我俩都装了"),_("code",[e._v("AdBlock")]),e._v("屏蔽广告插件。")]),e._v(" "),_("p",[e._v("原来"),_("code",[e._v("AdBlock")]),e._v("会将"),_("code",[e._v("ad-")]),e._v("开头的类名当做广告给屏蔽掉，修改了类名前缀，问题迎刃而解~")]),e._v(" "),_("p",[e._v("思考：")]),e._v(" "),_("p",[e._v("那我要投放广告，标签的类名不写"),_("code",[e._v("ad-")]),e._v("开头的不就屏蔽不掉了吗？"),_("code",[e._v("AdBlock")]),e._v("插件的屏蔽机制是否过于简单了？当然是否还有其他的检测机制，我就不得而知了，暂时就发现这一个问题")])])}),[],!1,null,null,null);t.default=r.exports}}]);