$(function () {
    $('.jqzoom').jqzoom({
        zoomType:'standard',
        lens:true,
        preloadImages:false,
        alwayOn:false,
        zoomWidth:340,
        zoomHeight:340,
        xOffset:10,
        yOffset:0,
        position:'right'
    })
});
$(function () {
    $('#jnProitem ul.imgList li a').click(function () {
        var imgSrc=$(this).find("img").attr('src');
        var i=imgSrc.lastIndexOf('.');
        var unit =imgSrc.substring(i);
        imgSrc=imgSrc.substring(0,i);
        var imgSrc_big=imgSrc+'_big'+unit;
        $('#thickImg').attr('href',imgSrc_big);
    });
});
$(function(){
    var $div_li =$("div.tab_menu ul li");
    $div_li.click(function(){
        $(this).addClass("selected")            //当前<li>元素高亮
            .siblings().removeClass("selected");  //去掉其他同辈<li>元素的高亮
        var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
        $("div.tab_box > div")   	//选取子节点。不选取子节点的话，会引起错误。如果里面还有div
            .eq(index).show()   //显示 <li>元素对应的<div>元素
            .siblings().hide(); //隐藏其他几个同辈的<div>元素
    }).hover(function(){
        $(this).addClass("hover");
    },function(){
        $(this).removeClass("hover");
    })
});
$(function () {
    $('.color_change ul li img').click(function () {
        $(this).addClass('hover')
            .parent().siblings().find('img').removeClass('hover');
        var imgSrc=$(this).attr('src');
        var i=imgSrc.lastIndexOf('.');
        var unit =imgSrc.substring(i);
        imgSrc=imgSrc.substring(0,i);
        var imgSrc_big=imgSrc+'_one_big'+unit;
        var imgSrc_small=imgSrc+'_one_small'+unit;
        $('#bigImg').attr('src',imgSrc_small);
        $('#thickImg').attr('href',imgSrc_big);
        var alt=$(this).attr('alt');
        $('.color_change strong').text(alt);
        var newImgSrc =imgSrc.replace('images/pro_img/','');
        $('#jnProitem .imgList li').hide();
        $('#jnProitem').find('.imgList').find('.imgList_'+newImgSrc).show();
        $('#jnProitem .imgList').find('.imgList_'+newImgSrc)
                                .eq(0).find('a').click();
    }).eq(0).click();
});
$(function () {
    $('.pro_size li').click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
            $(this).parents('ul').siblings('strong')
                .text($(this).text());
    }).eq(0).click();
});
$(function () {
    var $span=$('.pro_price strong');
    var price=$span.text();
    $('#num_sort').change(function () {
        var num =$(this).val();
        var amount=num*price;
        $span.text(amount);
    }).change();
});
$(function () {
    $('ul.rating li a').click(function () {
        var title=$(this).attr('title');
        alert('你给的商品的评价是'+title);
        var cl=$(this).parent().attr('class');
        $(this).parent().parent().removeClass().addClass('rating '+cl+'star');
        $(this).blur();
        return false;
    })
});
$(function () {
    var $product=$('.jnProDetail');
    $('#cart a').click(function () {
        var pro_name=$product.find('h4:first').text();
        var pro_size=$product.find('.pro_size strong').text();
        var pro_color=$('.color_change strong').text();
        var pro_num=$product.find('#num_sort').val();
        var pro_price=$product.find('.pro_price strong').text();
        var dialog="感谢你的购买.\n你购买的\n"+
                "产品是："+pro_name+";\n"+
                "尺寸是："+pro_size+";\n"+
                "颜色是："+pro_color+";\n"+
                "数量是："+pro_num+";\n"+
                "总价是："+pro_price+"元";
        alert(dialog);
        return false;
    })
});