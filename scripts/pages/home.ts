# Place holder/example file

$("./body") {
	add_class("mw_home")

	$(".//div") {
		remove_class("QuickView")
	}

	$(".//div[@id='HomeFeaturedProducts' or @id='HomeNewProducts']") {
		$("./h2") {
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
	}

}




