$("./body") {
	//add_class("_product")
	add_class("mw_product")

	$(".//div[@id='LayoutColumn2']") {
		$("./div[@id='ProductDetails']/div[@class='BlockContent']") {
			$("./h2") {
				add_class("_page-title")
			}
		
			$("./div[contains(@class, 'AddThisButtonBox')]") {
				remove()
			}
				

			$(".//div[@class='ImageCarouselBox']") {
				remove();
			}

			$(".//div[@class='ProductThumbImage']") {
				attribute("style", "padding-left:50px; width:160px; height:160px;")

			}

			$(".//div[@class='ProductThumbImage']/a") {
				attribute("onclick") { 
					remove() 
				} 
				//remove("@attr")						
			}

			$(".//div[contains(@class, 'AddCartButton')]") {
				# Move Quanitity Select box out of this div
				$("./span") {
					move_to("../../div[contains(@class, 'QuantityInput')]")
				}	
				remove()
			}

			$(".//div[contains(@class, 'ProductAddToCart')]") {
				insert_bottom("button", class: "_cart-button", type: "submit") {
					text("Add To Cart")
				}
			}

			


		}
	}





}