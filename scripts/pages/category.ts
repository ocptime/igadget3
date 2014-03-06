
$("./body") {
	add_class("mw_category")

	$("//div[contains(concat(' ',normalize-space(@class),' '), 'QuickView')]") {
		remove_class('QuickView')
	}

	# Create Togglers
    $("./div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice']") {
      attribute("data-ur-set", "toggler")
      $("./h2") {
        attribute("data-ur-toggler-component", "button")
        insert("div", class: "mw_indicator")
      }
      $("./div") {
        attribute("data-ur-toggler-component", "content")
        $(".//li/a") {
          insert("div", class: "mw_arrow")
        }
      }
    }

	$(".//div[@class='Content ']") {
		
        $("./div[@id='CategoryHeading']") {
        	$("./div/h2") {
				add_class("_page-title")
			}

			$("./div[@class='BlockContent']") {
				$("./div[@class='FloatRight SortBox']") {
	              $("./form") {
	                wrap_text_children("span")
	              }
            	}

            	$("./h2") {
              		//move_to("../../../../div[@class='Left']", "bottom")
              		//remove()
            	}

			}

        }		

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