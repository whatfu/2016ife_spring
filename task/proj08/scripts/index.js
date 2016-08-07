$(function () {
    $('#inputSearch').focus(function () {
        $(this).addClass('focus');
        if($(this).val()== this.defaultValue){
            $(this).val('');
        }
    }).blur(function () {
        $(this).removeClass('focus');
        if($(this).val()==''){
            $(this).val(this.defaultValue);
        }
    }).keyup(function (e) {
        if(e.which==13){
            alert('回车提交表单!')
        }
    })
});
$(function () {
    var $li=$('#skin li');
    $li.click(function () {
        switchSkin(this.id);
    });
    var cookie_skin=$.cookie("MyCssSkin");
    if(cookie_skin){
        switchSkin(cookie_skin);
    }
});
function  switchSkin(skinName) {
    $('#'+skinName).addClass('selected')
        .siblings().removeClass('selected');
    $('#cssfile').attr('href','styles/skin/'+skinName+'.css');
    $.cookie('MyCssSkin',skinName,{path:'/',expires:10});

}
$(function () {
    $('#nav li').hover(function () {
        $(this).find('.jnNav').show();
    },function () {
        $(this).find('.jnNav').hide();
    })
});

$(function () {
    $('.jnCatainfo .promoted').append('<i class="hot"></i>')
});
$(function () {
    var $imgrolls=$('#jnImageroll div a');
    $imgrolls.css('opacity','0.7');
    var len =$imgrolls.length;
    var index=0;
    var adTimer=null;
    $imgrolls.mouseover(function () {
        index=$imgrolls.index(this);
        showImg(index);
    }).eq(0).mouseover();

    $('#jnImageroll').hover(function () {
        if (adTimer){
            clearInterval(adTimer);
        }
    },function () {
        adTimer=setInterval(function () {
            showImg(index);
            index++;
            if(index==len){index=0;}
        },3000);
        }).trigger('mouseleave')
});
function showImg(index) {
    var $rollobj=$('#jnImageroll');
    var $rolllist=$rollobj.find('div a');
    var newhref=$rolllist.eq(index).attr('href');
    $('#JS_imgWrap').attr('href',newhref)
        .find('img').eq(index).stop(true,true).fadeIn()
        .siblings().fadeOut();
    $rolllist.removeClass('chos').css('opacity','0.7')
        .eq(index).addClass('chos').css('opacity','1');
}
$(function () {
    var x=10,y=20;
    $('a.tooltip').mouseover(function (e) {
        this.myTitle=this.title;
        this.title='';
        var tooltip='<div id="tooltip">'+this.myTitle+'</div>';
        $('body').append(tooltip);
        $('#tooltip')
            .css({
                'top':(e.pageY+y)+'px',
                'left':(e.pageX+x)+'px'
            }).show('fast');
    }).mouseout(function () {
        this.title=this.myTitle;
        $('#tooltip').remove();
    }).mousemove(function (e) {
        $('#tooltip')
            .css({
                'top':(e.pageY+y)+'px',
                'left':(e.pageX+x)+'px'
            });
    });
});
$(function () {
    $('#jnBrandTab li a').click(function () {
        $(this).parent().addClass('chos')
            .siblings().removeClass('chos');
        var idx =$('#jnBrandTab li a').index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
});
function showBrandList(index){
    var $rollobj =$('#jnBrandList');
    var rollWidth=$rollobj.find('li').outerWidth();
    rollWidth=rollWidth*4;
    $rollobj.stop(true,false).animate({left: -rollWidth*index},1000);
}
$(function () {
    $('#jnBrandList li').each(function () {
        var $img=$(this).find('img');
        var img_w=$img.width();
        var img_h=$img.height();
        var spanHtml='<span style="position:absolute;top:0:left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
        $(spanHtml).appendTo(this);
    });
    $("#jnBrandList ").find('.imageMask').live('hover',function () {
        $(this).toggleClass('imageOver');
    })
});