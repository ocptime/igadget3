$("./body") {
	//add_class("_product")
	add_class("mw_product")

	$(".//div[@id='LayoutColumn1']") {
		$("./div[@id='SideNewProducts']") {
			remove() 
		}
	}

	$(".//div[@id='LayoutColumn2']") {

		$("./div[@id='ProductReviews']/a") {
			remove() 
		}


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

		$(".//ul[@class='ProductList']") {
			name("div")
			$("./li") {
				name("div")
				attribute("class", "_item-wrap")
				attribute("style","")
				$("./div[@class='ProductCompareButton']") {
					remove()
				}
				insert_top("div", class: "_item-left") {
					move_here("../div[@class='ProductImage']")
				}
				insert_bottom("div", class: "_item-right") {
					move_here("../div[@class='ProductDetails' or @class='ProductPriceRating' or @class='ProductActionAdd']")
					$("./div[@class='ProductActionAdd']") {
						$('./a') {
							inner_wrap("div", class: "_cart-button")
						}
					}
					$("./div[@class='ProductPriceRating']/span") {
						name("div")
					}
				}	
			}
		}

	}

}