(function($) {
    $.fn.shorten = function (settings) {
        var config = {
            showChars: 130,
            ellipsesText: "...",
            moreText: "Read More",
            lessText: "Read Less"
        };
 
        if (settings) {
            $.extend(config, settings);
        }
        
		
        $(document).off("click", '.morelink');
         
        $(document).on({click: function () {
 
                var $this = $(this);
                if ($this.hasClass('less')) {
                    $this.removeClass('less');
                    $this.html(config.moreText);
                } else {
                    $this.addClass('less');
                    $this.html(config.lessText);
                }
                $this.parent().prev().toggle();
                $this.prev().toggle();
                return false;
            }
        }, '.morelink');


        return this.each(function () {
            var $this = $(this);
            if($this.hasClass("shortened")) return;
            var content = "";
			 //console.log("content is null : "+content)
            
            content = $this.html().trim();
			//var trimContent = $.trim(content);
			
			//console.log("Content is "+content);
			//console.log("Content length is "+content.length);
			
            if (content.length > config.showChars) {
				//console.log("Trimmed content is "+trimContent);
				$this.addClass("shortened");
                var c = content.substr(0, config.showChars);
                var h = content.substr(config.showChars, content.length - config.showChars);
                var html = c + '<span class="moreellipses">' + config.ellipsesText + ' </span><span class="morecontent"><span>' + h + '</span> <a href="#" onclick="return false" class="morelink">' + config.moreText + '</a></span>';
                $this.html(html);
                $(".morecontent span").hide();
            }
			else{
				  //console.log("in else");
                  $this.html(content);
			}
        });
         
    };
 
 })(jQuery);