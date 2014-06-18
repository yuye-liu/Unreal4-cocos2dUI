var designResolutionSize = new setDesignResolutionSize(1920,409);
var ContentScaleFactor = 1.0;


function addToArray(pic ,aArray)
{
    function picInfo(myPoint,width,height)
    {
        this.myPoint = myPoint;
        this.width = width;
        this.height = height;
    }

    var width = $(pic).width();
    var height = $(pic).height();

    var picInfo = new picInfo(pic,width,height);

    aArray.push(picInfo);
}
var picArray = new Array();
var menuArray = new Array();
function init()
{
    {
        var allMenu = document.getElementsByClassName("Img");
        for(var i = 0;i<allMenu.length;i++)
        {
            addToArray(allMenu[i],picArray);
        }
    }

    {
        var allMenu = document.getElementsByClassName("Menu");
        for(var i = 0;i<allMenu.length;i++)
        {
            addToArray(allMenu[i],menuArray);
        }
    }

    adjustObjectSize();
}

function setDesignResolutionSize(designResolutionSize_width,designResolutionSize_height)
{
    this.width = designResolutionSize_width;
    this.height = designResolutionSize_height;
}

var last_screen_width  = document.documentElement.clientWidth;
var last_screen_height  = document.documentElement.clientHeight;

function adjustObjectSize()
{
    var current_screen_width  = document.documentElement.clientWidth;
    var current_screen_height  = document.documentElement.clientHeight;

    if(current_screen_width==last_screen_width && last_screen_height != current_screen_height)
    {
        ContentScaleFactor = current_screen_height/last_screen_height;

        for(var i = 0, l = picArray.length; i < l; i++)
        {
            var picInfo = picArray[i];

            var pic = picInfo.myPoint;
            var origin_width = picInfo.width;
            var origin_height =  picInfo.height;


            $(pic).width($(pic).width()*ContentScaleFactor);
            $(pic).height($(pic).height()*ContentScaleFactor);
        }

        for(var i = 0, l = menuArray.length; i < l; i++)
        {
            var picInfo = menuArray[i];

            var pic = picInfo.myPoint;
            var origin_width = picInfo.width;
            var origin_height =  picInfo.height;


            $(pic).width($(pic).width()*ContentScaleFactor);
            $(pic).height($(pic).height()*ContentScaleFactor);
        }
    }
    else if(current_screen_width!=last_screen_width && last_screen_height == current_screen_height)
    {
        ContentScaleFactor = current_screen_width/last_screen_width;

        for(var i = 0, l = picArray.length; i < l; i++)
        {
            var picInfo = picArray[i];

            var pic = picInfo.myPoint;
            var origin_width = picInfo.width;
            var origin_height =  picInfo.height;


            $(pic).width($(pic).width()*ContentScaleFactor);
            $(pic).height($(pic).height()*ContentScaleFactor);
        }

        for(var i = 0, l = menuArray.length; i < l; i++)
        {
            var picInfo = menuArray[i];

            var pic = picInfo.myPoint;
            var origin_width = picInfo.width;
            var origin_height =  picInfo.height;


            $(pic).width($(pic).width()*ContentScaleFactor);
            $(pic).height($(pic).height()*ContentScaleFactor);
        }
    }
    else
    {
        if(designResolutionSize.width/current_screen_width>designResolutionSize.height/current_screen_height)
        {
            ContentScaleFactor = current_screen_width/designResolutionSize.width;
        }
        else
        {
            ContentScaleFactor = current_screen_height/designResolutionSize.height;
        }



        for(var i = 0, l = picArray.length; i < l; i++)
        {
            var picInfo = picArray[i];

            var pic = picInfo.myPoint;
            var origin_width = picInfo.width;
            var origin_height =  picInfo.height;

            $(pic).width(origin_width*ContentScaleFactor);
            $(pic).height(origin_height*ContentScaleFactor);
        }

        for(var i = 0, l = menuArray.length; i < l; i++)
        {
            var picInfo = menuArray[i];

            var pic = picInfo.myPoint;
            var origin_width = picInfo.width;
            var origin_height =  picInfo.height;


            $(pic).width(origin_width*ContentScaleFactor);
            $(pic).height(origin_height*ContentScaleFactor);
        }
    }




    last_screen_width = current_screen_width;
    last_screen_height = current_screen_height;
}

