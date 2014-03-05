
$("./body") {
	add_class("mw_category")

	$("//div[contains(concat(' ',normalize-space(@class),' '), 'QuickView')]") {
		remove_class('QuickView')
	}

	/*$(".//div[@id='CategoryHeading']") {
		$("./div/h2") {
			add_class("_page-title")
		}
		$("./div[@class='BlockContent']/ul") {
			// change the scopped ul to div
			name("div")
			$("./li") {
				// li to div
				name("div")
				attribute("class", "_item-wrap")
				attribute("style","")
				$("./div[@class='ProductActionAdd']") {
					$('./a') {
						inner_wrap("div", class: "_cart-button")
					}
				}
			}
		}
	}*/

	$(".//div[@class='Content ']") {
		
        $("./div[@id='CategoryHeading']") {
        	$("./div/h2") {
				add_class("_page-title")
			}
        }

        //[@id = 'frmCompare']/ul
        $("//*[@id='frmCompare']/ul") {
        	// change the scopped ul to div
			name("div")
			$("./li") {
				// li to div
				name("div")
				attribute("class", "_item-wrap")
				attribute("style","")
				$("./div[@class='ProductActionAdd']") {
					$('./a') {
						inner_wrap("div", class: "_cart-button")
					}
				}
			}
				
		}
    }

}		