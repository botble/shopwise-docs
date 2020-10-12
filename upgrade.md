# Upgrade Guide

- [Upgrade to Shopwise 1.0.1](#version_1_0_1)

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