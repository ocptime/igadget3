log("--> Running ajax.ts")

# match($path) {
#   # Match the Ajax path
#   with(/foo/) {
#     html_fragment() {
#       log("--> Importing ajax/foo.ts in ajax.ts")
#       @import ajax/foo.ts
#     }
#   }
# }

# needed for product images
# replace("%24", "$")
# replace("&amp;", "&")

match($path) {
  with(/category/) {
    # Tritium I want to run on Ajax content with "category" in the URL.
  }
  with(/product/) {
    # Tritium I want to run on Ajax content with "product" in the URL.
  }
  else() {
    log("This Ajax content is unrecognized.")
  }
}