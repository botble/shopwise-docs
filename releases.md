# Release Notes

- [Shopwise 1.1]8(#version_1_18)
- [Shopwise 1.17](#version_1_17)
- [Shopwise 1.16](#version_1_16)
- [Shopwise 1.15](#version_1_15)
- [Shopwise 1.14](#version_1_14)
- [Shopwise 1.13](#version_1_13)
- [Shopwise 1.12](#version_1_12)
- [Shopwise 1.11](#version_1_11)
- [Shopwise 1.10](#version_1_10)
- [Shopwise 1.9](#version_1_9)
- [Shopwise 1.8](#version_1_8)
- [Shopwise 1.7](#version_1_7)
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

<a name="version_1_18"></a>
## Shopwise 1.18
### Feb 21, 2022
- Add option to change city/state to dropdown. Check docs: [Location](usage-location.md).
- Fix product price on homepage blocks.
- Fix issue with Cloudflare SSL.
- Fix tree category & social links.
- Fix duplicate shortcode in CKEditor.
- Fix saving SEO meta tags.
- Update product import template.
- Improve invoice.
- Improve license.
- Improve permalink.
- Improve dashboard widgets.
- Improve core.
- Prevent Method Not Allowed error when use ajax DELETE/PUT.
- Add schema for post & page.
- Update AWS S3 settings.

<a name="version_1_17"></a>
## Shopwise 1.17
### Dec 22, 2021
- Fixed saving meta box data.
- Fixed issue when delete products from flash sales.
- Fixed bulk change product category.
- Fixed currency settings.
- Fixed social login settings.
- Fixed filter by price.
- Added export products to CSV.
- Added missing column Content in product import and improve search in admin panel.
- Added option to update shipping status in order details page.
- Added option to disable order invoice until order confirmed.
- Added option to enable/disable Captcha in registration page.
- Added VAT number & update invoice template.
- Added option to disable product zoom images.
- Improve search products.
- Improve multi-language.
- Improve editor & media.

<a name="version_1_16"></a>
## Shopwise 1.16
### Nov 18, 2021
- Added some events (order confirmed, order completed, payment completed, order cancelled…) in source code (for developers).
- Added FAQ to product detail page.
- Show confirmation box when delete user address.
- Fix bullets list style in the editor.
- Fix admin bar setting.
- Fix product categories shortcode.
- Fix Stripe payment gateway in non-decimal currencies.
- Fix UI issue with select2 fields.
- Fix UI checkout page.
- Fix update customer’s avatar.
- Fix update shipping status.
- Fix some small issues when upgrading to Bootstrap 5.
- Improve reviews: display review images in the admin panel.
- Improve multi-language.
- Improve plugin Language & Language Advanced.
- Improve product categories.
- Improve shortcode.
- Improve search.
- Improve Razorpay.
- Improve plugin Analytics.
- Improve core & UI.
- Improve RTL mode.
- Validate CSV/Excel file before importing products.
- Update to the latest Laravel version 8.72.0.
- Optimize queries performance.

<a name="version_1_15"></a>
## Shopwise 1.15
### Oct 19, 2021
- Upgrade admin theme to Bootstrap 5.
- Add system updater. 1-click update to the latest version.
- Add BunnyCDN cloud storage.
- Improve PayPal & Razorpay. Display warning if the current currency isn't supported by PayPal / Razorpay.
- Improve invoice template.
- Fix checkout page, apply coupon.
- Fix bug admin email, login backgrounds.
- Fix missing translations.
- Make phone field at the checkout optional.
- Update to the latest Laravel version 8.64.0
- Improve multi-language.
- Improve RTL mode.
- Improve UI & Editors.
- Improve cookie consent (Added minimal style).
- Improve core.
- Optimize queries performance.

<a name="version_1_14"></a>
## Shopwise 1.14
### Sep 15, 2021
- Add multi-language support.
- Add product review images.
- Add weekly abandoned carts email notifications
- Add minimum order amount for COD.
- Fix get products by category & breadcrumb.
- Fix layout when disabling review.
- Fix theme migration & issue when activating plugin Language.
- Fix admin email.
- Fix cache issue in media.
- Clear data when deleting customer.
- Improve product categories widgets.
- Improve product categories dropdown (allow adding custom image for icon).
- Improve invoice. Add setting to change font family for invoices.
- Improve payment gateways.
- Improve CKEditor.
- Improve theme custom CSS/JS.
- Improve allowed iframe types.
- Handle TokenMismatchException.
- Prevent error when missing watermark image.
- Update to the latest Laravel version 8.60.0
- Improve UI.
- Improve core.
- Optimize queries performance.

<a name="version_1_13"></a>
## Shopwise 1.13
### Aug 23, 2021
- Fix social login.
- Fix Contact plugin with the new editor.
- Fix permission issues.
- Fix currency settings.
- Fix checkout recovery.
- Fix display product variant image on checkout or order detail page.
- Fix Mollie payment gateway (handle when customer cancel payment).
- Fix Razorpay (correct amount with shipping fee).
- Add Bulk Import Products from CSV/Excel.
- Add search products by brand.
- Add order delivery notes.
- Add filter products by category in Admin -> Ecommerce -> Products.
- Improve eCommerce reports page.
- Improve discount & create order (make it translatable).
- Improve shortcode. Make it easier to modify added shortcodes.
- Improve editor & clean XSS.
- Update email templates.
- Update to the latest Laravel version 8.55.0
- Improve core.
- Optimize queries performance.

<a name="version_1_12"></a>
## Shopwise 1.12
### Jul 27, 2021
- Update CKEditor and TinyMCE to the latest version (version 5).
- Update media: Add a button to download media files from URL.
- Able to add multiple admin emails in Admin -> Settings -> General.
- Big change on blog categories & product categories. Hierarchical tree structured category https://prnt.sc/1g4ht0w.
- Prevent clear cart after logging out.
- Add PayPal & Stripe refund.
- Improve currencies setting. Prevent error when deleting the default currency.
- Improve email templates.
- Ajax update cart.
- Fix missing translations.

<a name="version_1_11"></a>
## Shopwise 1.11
### Jul 13, 2021
- Add an option to disable guest checkout.
- Add minimum order amount setting.
- Add Wasabi cloud storage support.
- Disable auto-generate product SKU.
- Fix product permalinks.
- Fix order address.
- Fix Razorpay payment gateway.
- Improve checkout process.
- Remove unused translations.
- Allow to config the default placeholder image.
- Improve media, translations & backup.
- Improve UI.
- Optimize queries.
- Refactor code & improve performance.
- Fix some bugs on PHP 8.

<a name="version_1_10"></a>
## Shopwise 1.10
### Jun 16, 2021
- Added RTL support for the admin panel.
- Added bulk deletes for product variations & optimize create all variations.
- Improve product swatches: disable not available options.
- Display out of stock badge.
- Fix payment gateways.
- Fix product's quantity & stock status
- Fix shipping when only 1 country available.
- Fix discount.
- Fix gallery shortcode.
- Fix some errors on PHP 8.
- Improve media, fix some errors with SVG.
- Improve UI.
- Optimize queries.
- Refactor code & improve performance.

<a name="version_1_9"></a>
## Shopwise 1.9
### May 10, 2021
- Add product labels.
- Improve theme UI.
- Fix change user's password.
- Fix bug customer address when zip code empty
- Remove unused services in Google Client API services to reduce app size.
- Update theme options & handle errors when saving custom CSS.
- Optimize queries.
- Refactor code & improve performance.

<a name="version_1_8"></a>
## Shopwise 1.8
### Apr 12, 2021
- Fix search function on mobile.
- Improve UI & allow modify email templates for verify account email and reset password.
- Improve filter products, allow search by tags.
- Add option to turn off automatic URL translation into Latin.
- Add command to rename the theme to the new name.
- Add option to force URL & schema.
- Improve email templates.
- Refactor code & optimize performance.

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
