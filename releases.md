# Release Notes

- [Shopwise 1.6](#version_1_6)
- [Shopwise 1.5](#version_1_5)
- [Shopwise 1.4](#version_1_4)
- [Shopwise 1.3](#version_1_3)
- [Shopwise 1.2](#version_1_2)
- [Shopwise 1.1](#version_1_1)
- [Shopwise 1.0.4](#version_1_0_4)
- [Shopwise 1.0.3](#version_1_0_3)
- [Shopwise 1.0.2](#version_1_0_2)
- [Shopwise 1.0.1](#version_1_0_1)
- [Shopwise 1.0](#version_1_0)

<a name="version_1_7"></a>
## Shopwise 1.7
### Mar 15, 2021
- Improve SSLCommerz payment gateway.
- Improve currency and display product quantity in the product listing.
- Update dashboard widgets for eCommerce purposes.
- Update email templates.
- Fix cart image when product variation has no image.
- Fix bug create order from the admin panel.
- Fix bug Serialization of 'GdImage' is not allowed.
- Fix Mollie payment when amount > 1000.
- Fix permission issues.
- Prevent process order many times.

<a name="version_1_6"></a>
## Shopwise 1.6
### Mar 01, 2021
- Added SSLCommerz payment gateway.
- New option to add custom JS in Admin -> Appearance -> Custom JS.
- Added setting in Admin -> Settings -> General to change login screen backgrounds.
- Change product SKU when changing product attribute.
- Improve dashboard widgets.
- Improve payment gateways.
- Improve order tracking.
- Fix permission issue on Contact plugin.
- Fix invoice with Euro sign.
- Fix flash messages.
- Fix apply coupon in checkout recovery.

<a name="version_1_5"></a>
## Shopwise 1.5
### Feb 18, 2021
- Add option to display product price including taxes.
- Add option to set available countries. Check Admin -> Ecommerce -> Settings.
- Update list countries. Add Kosovo.
- Improve product reviews
- Improve page SEO meta.
- Fix calculate shipping fee.
- Fix Custom CSS.
- Fix bug Editor on PHP 8.
- Refactor code & improve queries for better performance.

<a name="version_1_4"></a>
## Shopwise 1.4
### Feb 04, 2021
- Upgrade to Laravel 8.
- Improve permalinks.
- Allow deleting products after it's purchased by customers.
- Prevent error when deleting a product that is added into the cart.
- Prevent access to Ajax URLs directly.
- Optimize checkout speed.
- Fix bug when updating flash sales.
- Fix E-commerce settings and add settings for thousands and decimal separators.
- Fix the order's amount when creating from the admin panel.
- Fix permission issue.

<a name="version_1_3"></a>
## Shopwise 1.3
### Jan 12, 2021
- Add Mollie payment gateway.
- Add Flash sales https://prnt.sc/wlmt9m
- Fix bug product quantity for incomplete orders.
- Update translations.
- Optimize queries to improve performance.
- Update UI.

<a name="version_1_2"></a>
## Shopwise 1.2
### Dec 14, 2020
- Add Cross-selling products.
- Add option to disable taxes.
- Fix shipping fee in the checkout page.
- Fix create a customer from admin panel.
- Improve Cookie Consent plugin.
- Improve responsive.
- Update translations, added missing keys.
- Improve DO Spaces integration.
- Fix roles & permissions.
- Update front theme UI.
- Update seeders, easy to generate sample data using command db:seed.
- Update setting page & system info.
- Optimize page speed and performance.

<a name="version_1_1"></a>
## Shopwise 1.1
### Nov 16, 2020
- Add the "Quick Buy" button.
- Add a shortcode to display all brands and all products.
- Display product attributes on the cart, email.
- Display error/success message on the cart page.
- Fix checkout page when the customer has logged already.
- Fix shipping rules, order detail, store locators.
- Fix missing order address when creating orders from admin.
- Fix theme translations: new keys in English doesn't show in other languages.
- Fix IP in activity logs, allow IP v6.
- Optimize queries on menu & widgets, cache the menu URL for better performance.
- Update Cookie consent: Add the option to change the background color, text color.
- Update error pages, make it more beautiful.
- Update UI contact form.
- Improve permalink & custom CSS page.
- Improve Analytics plugin, make it compatible with PHP 7.4.
- Fix small bugs.
- Refactor code.

<a name="version_1_0_4"></a>
## Shopwise 1.0.4
### Oct 23, 2020
- Fix RLT for error pages.
- Fix bug wrong quantity in incomplete order recovery.
- Fix update customer's email from admin panel.
- Fix bug when activating plugin Ecommerce.

<a name="version_1_0_3"></a>
## Shopwise 1.0.3
### Oct 20, 2020
- Fix RLT for error pages.
- Refresh cart table after removing a product from cart.
- Update icon selection in product category editing page.
- Add notification when adding product to cart.
- Add sticky header scroll.

<a name="version_1_0_2"></a>
## Shopwise 1.0.2
### Oct 15, 2020
- Fix RLT for checkout pages.
- Fix bugs when adding product to cart.
- Fix 404 not found issue when clicking on the customer's name on the reviews listing page.
- Add export products, orders to CSV, Excel.
- Update to Botble CMS 5.9.
- Remove unused CSS to make it loads faster.

<a name="version_1_0_1"></a>
## Shopwise 1.0.1
### Oct 12, 2020
- Fix seeder: generate products with variations.
- Fix bug wrong image/price when adding to cart from homepage.
- Fix UI payment form.
- Fix filter price: display price with current currency.
- Fix search products.
- Update Laravel to version 7.28.4
- Update newsletter popup, it will hides in 1 hour after it closed.
- Update recaptcha: add option to hide badge.
- Improve theme UI & make it loads faster.
    
<a name="version_1_0"></a>
## Shopwise 1.0
### Oct 17, 2020
- Initial release version 1.0
