# $('./body') {
#   insert_top("header", class: "_header") {
#     Move stuff here
#   }
# }

$(".//div[@id='Header']") {
	//remove()
	 attribute("data-ur-set", "toggler")

	$(".//div[@id='SearchForm']/form//input[@type='image']") {
		wrap("div", class: "mw_search_btn sprites-search")
		attribute("style", "opacity:0;")
		attribute("display", "none")
	}

	# Move top menu into #Logo container
	$("./div[@id='Logo']") {
		move_here("../../../div[@id='TopMenu']", "top") {
			# Remove unwanted top menu items from upper menu
			remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
			$("./ul/li[@class='First']/a") {
				text("")
				insert("div", class: "sprites-user")
			}
			$("./ul/li[@class='CartLink']/a") {
				text("")
				insert("div", class: "sprites-cart")
			}
		}
	}

	# Insert HTML for bottom of header
	insert("div", class: "mw_header_bottom") {
	  insert("div", class: "mw_search")
	  insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
	}

	# Fill search HTML
	$("..//div[@class='mw_search']") {
	  # Move search form into container element
	  move_here("//div[@id='SearchForm']", "bottom") {
	    remove("./p")

	    $("./form") {
	      remove("./label")
	      # Change search button background image
	      $("./input[@type='image']") {
	        wrap("div", class: "mw_search_btn sprites-search")
	      }
	      $("./input[@type='text']") {
	        attribute("placeholder", "Search...")
	      }
	    }

	  }
	}

	# Move menu items into header
	move_here("../div[@id='Menu']", "bottom") {
	  attribute("data-ur-toggler-component", "content")
	  # Move "Category List" element on bottom of #Menu element
	  move_here("../../div[@id='Wrapper']/div[@class='Left']", "bottom")
	  $$("li") {
	    add_class("mw_bar2")
	  }
	}

	$("//br") {
		remove()
	}

	$("./div[@id='Menu']/ul") {
		remove();
	}

	$(".//div[@id='LayoutColumn1']") {
		$("./div[@id='SideCategoryList']/div") {
			unwrap()
		}

		$("./div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice' or @id='SideCategoryList']") {
			attribute("data-ur-set","toggler")
			$("./h2") {
				add_class("mw_bar1")
				attribute("data-ur-toggler-component", "button")
				insert("div", class: "mw_indicator")
			}
			$("./div") {
				attribute("data-ur-toggler-component", "content")
				$("./ul/li/a") {
					inner_wrap("div", class: "mw_li-a-inner-wrap") {
						insert("div", class: "mw_arrow")
					}
				}
			}
		}

	}


}
