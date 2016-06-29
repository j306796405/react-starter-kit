import React, { Component } from 'react'
import classes from './helpDetail.scss'
import { Link } from 'react-router'

export default class extends Component{
  render(){
    return (
      <div className={classes.con}>
        <h1 className={classes.maintitle}>常见问题</h1>
        <div className={classes.info}>
          <h4>1、你们支持哪些网站购买？</h4>
          <p>答：Hai360海外购定位全球海外购，只要客户有需求，我们会想尽一切办法满足，目前可支持美国亚马逊（美亚第三方商家除外）、6PM、Vitacost、GNC等商家购买，未来还会不断的增加……</p>
          <h4>2、如何保证你们网站的商品是国外正品？</h4>
          <p>答： Hai360海外购所有商品均通过正规渠道采购，知名海外电商直接供货，保证100%原装正品。</p>
          <h4>3、海外网站的优惠码可以在你们网站上使用吗？</h4>
          <p>答：非常抱歉，相比国内来说，商品已经非常优惠了，国外的优惠码暂时还不能在我们网站使用，我们网站也会不定期推出优惠活动，敬请关注。</p>
          <h4>4、为什么在搜索框中输入某些美国亚马逊或者其他网站的商品链接会提示不支持，或者库存不足？</h4>
          <p>答：目前美国亚马逊第三方商家的商品不支持购买，有些商品因国家海关限制暂时不能购买，如奢侈品，易燃物质（如火柴、碳），锂电池或蓄电池，香水制品等国家命令禁止的商品均无法购买。国外网站库存不足时（小于3个）我们会提示库存不足，如还有不明，可直接联系客服咨询。</p>
          <h4>5、国外服饰鞋履类商品的尺寸怎么比对换算？</h4>
          <p>答：因国内外尺码相差较大，一般可参照<Link title="尺码对照表" to="/help/size" target="_blank">尺码对照表</Link>，或者根据国外网站自带的<a href="http://www.6pm.com/cs/mmf-popop.zml">Size Chart</a>对照，如还有疑问可咨询客服。</p>
          <h4>6、收到包裹后，发现有缺损的状况，能申请赔偿吗？</h4>
          <p>答：买家签收时，请务必先开箱检查过商品，确认无误后再签收，委托亲友代签包裹亦是如此。签收包裹前，若发现少货状况，请尽快联系我们的客服，并提供相关照片和快递员签字证明少货商品；若发现破损状况，则可直接拒收，联系客服，提供破损的照片。</p>
          <h4>7、为什么在你们网站下单支付成功之后被告知需要取消？</h4>
          <p>答：您好，因海淘特有模式，您在Hai360海外购平台支付成功之后，我们会去外国相应网站去采购，只有采购成功之后，才算下单成功，因采购时间差可能会导致该商品缺货，涨价，或因商品限制购买，禁运等都可能会导致订单下单失败，订单在海外下单失败之后，我们会以物流日志提醒告知相关情况，取消订单后我们会在1-3个工作日内为您办理退款（因我们的商品都是从海外直接购买，不排除因某些原因导致下单不成功情况）。</p>
          <h4>8、为什么没有通知我就取消订单了？</h4>
          <p>答：遇海淘高峰期，单量较多，如检测到您购买的商品因涨价过高、限购、第三方等原因导致无法采购，系统会自动为您取消这些商品，并为您办理退款，给您带来不便请谅解，感谢您对我们的支持！</p>
          <h4>9、付款后，发现有一件商品不想买了，如何取消订单？</h4>
          <p>答：付款成功后，若海外商家还未确认订单，您可以联系客服取消订单，我们会尽快为您退款；海外商家确认订单后，不可取消订单。如您确实不想要某件商品，可以在收到商品7天内申请无理由退货（退货标准请参考<Link to="/help/return">退货服务政策</Link>相关说明）。</p>
          <h4>10、为什么需要上传身份证信息？</h4>
          <p>答：根据《中华人民共和国海关对进出境快件监管办法》，第二十二条规定：个人物品类进出境快件报关时， 运营人应当向海关提交《中华人民共和国海关进出境快件个人物品申报单》、每一进出境快件的分运单、进境快件收件人或出境快件发件人身份证件影印件和海关需要的其它证件。为配合海关完成清关，让您的货物能尽快送达，在Hai360通知您上传身份证后，请在1-2个工作日内提供您收件人身份证信息。详情请点击链接： <a href="http://www.customs.gov.cn/publish/portal0/tab517/info265077.htm">http://www.customs.gov.cn/publish/portal0/tab517/info265077.htm</a></p>
          <h4>11、我能查看到我的物流信息吗，通常我下单后多久可以收到？</h4>
          <p>答：下单成功之后，一般20个工作日内即可送达，具体到达时间主要取决于海外商家的发货速度以及海关的清关速度，我们会尽量将送达时间控制在20个工作日以内，具体物流信息查询只直接在我的订单—订单详情里进行查询，或者直接联系客服查询。</p>
          <h4>12、收到的商品不喜欢可以退换货吗?</h4>
          <p>答：您好，因海淘商品均是从海外直接发出，如产生退货，海外商家只承担海外的退货运费，不承担国际运输费用，因此如需退货需客户承担国际运费，暂不支持换货。</p>
          <h4>13、商品价格怎么跟外国网站价格不一致？</h4>
          <p>答：一般我们的价格都是实时与海外网站同步，但由于海外商家价格变动较频繁，可能会存在价格不一致的情况，如出现Hai360海外购价格与海外商家不一致的情况，请及时联系客服修改后再下单。</p>
          <h4>14、为什么下单时未提示需要关税，下单后又联系需缴纳关税？</h4>
          <p>答：您好，因我们走的是都是正规化的清关渠道，电子类产品海关均会被税，所以在您订购电子类产品后，客服会联系告知需缴纳一定数额的关税，带来的不便请谅解。</p>
        </div>
      </div>
    )
  }
}