# Upgrade Guide

- [Upgrade to Shopwise 1.10](#version_1_10)
- [Upgrade to Shopwise 1.9](#version_1_9)
- [Upgrade to Shopwise 1.8](#version_1_8)
- [Upgrade to Shopwise 1.7](#version_1_7)
- [Upgrade to Shopwise 1.6](#version_1_6)
- [Upgrade to Shopwise 1.5](#version_1_5)
- [Upgrade to Shopwise 1.4](#version_1_4)
- [Upgrade to Shopwise 1.3](#version_1_3)
- [Upgrade to Shopwise 1.2](#version_1_2)
- [Upgrade to Shopwise 1.1](#version_1_1)
- [Upgrade to Shopwise 1.0.4](#version_1_0_4)
- [Upgrade to Shopwise 1.0.3](#version_1_0_3)
- [Upgrade to Shopwise 1.0.2](#version_1_0_2)
- [Upgrade to Shopwise 1.0.1](#version_1_0_1)

<a name="version_1_10></a>
## Upgrade to version 1.10

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and `Payment` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_9></a>
## Upgrade to version 1.9

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and `Payment` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_8"></a>
## Upgrade to version 1.8

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and `Payment` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

<a name="version_1_7"></a>
## Upgrade to version 1.7

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.
  - Go to Admin -> Plugins and activate the plugin SslCommerz Payment Gateway to use it.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  - Go to Admin -> Plugins and activate the plugin SslCommerz Payment Gateway to use it.
  
<a name="version_1_6"></a>
## Upgrade to version 1.6

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.
  - Go to Admin -> Plugins and activate the plugin SslCommerz Payment Gateway to use it.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  - Go to Admin -> Plugins and activate the plugin SslCommerz Payment Gateway to use it.
  
<a name="version_1_5"></a>
## Upgrade to version 1.5

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin Ecommerce and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

<a name="version_1_4"></a>
## Upgrade to version 1.4

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin Ecommerce and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_3"></a>
## Upgrade to version 1.3
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Run `php artisan migrate` to update database.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.
  - Run `php artisan migrate` to update database.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins then deactivate plugin Ecommerce then re-activate it.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

- Go to Admin -> Plugins and activate plugin Mollie if you want to use Mollie payment gateway.

<a name="version_1_2"></a>
## Upgrade to version 1.2
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    - Run `php artisan migrate` to update database.
    
- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    
<a name="version_1_1"></a>
## Upgrade to version 1.1
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Plugins then deactivate plugin Ecommerce then re-activate it.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

<a name="version_1_0_4"></a>
## Upgrade to version 1.0.4
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    
- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    
<a name="version_1_0_3"></a>
## Upgrade to version 1.0.3
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    
- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    
<a name="version_1_0_2"></a>
## Upgrade to version 1.0.2
- Override folder `app`, `config`, `bootstrap`, `platform`, `public/themes`, `public/vendor` and `resources` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    
- For non-developers:
    - Override folder `/vendor` from the latest version.
    - Go to Admin -> Plugins then deactivate plugin Ecommerce then re-activate it.
    
<a name="version_1_0_1"></a>
## Upgrade to version 1.0.1
- Override folder `app`, `config`, `bootstrap`, `platform`, `public/themes`, `public/vendor` and `resources` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    
- For non-developers:
    - Override folder `/vendor` from the latest version.
    - Go to Admin -> Plugins then deactivate plugin Ecommerce then re-activate it.