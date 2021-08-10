
# Changelog

## v6.0.0 - Released 25 Feb 2020

Sezzle Rebrand - Do not use older versions!

These are the config options that are working and can and do get used.

* Active config options: targetXPath, renderToPath, urlMatch, theme (light, dark, grayscale, white, black-flat, white-flat), logoSize, logoStyle, splitPriceElementsOn, relatedElementActions(relatedPath, initialAction, action), ignoredPriceElements, ignoredFormattedPriceText, hideClasses, fontFamily, fontSize, fontWeight, color, alignment (auto, left, center, right), alignmentSwitchMinWidth, alignmentSwitchType (auto, left, center, right), lineHeight, maxWidth, marginTop, marginRight, marginBottom, marginLeft, apLink, apModalHTML, qpModalHTML, minPrice, maxPrice, noTracking, noGtm, supportedCountryCodes, forcedShow, language

* active altVersionTemplate options :%%price%%, %%logo%%, %%link%%, %%info%%, %%line-break%%, %%afterpay-logo%%, %%afterpay-logo-grey%%, %%afterpay-info-icon%%, %%afterpay-link-icon%%, %%quadpay-logo%%, %%quadpay-logo-grey%%, %%quadpay-logo-white%%, %%quadpay-info-icon%%

These are the config options that either aren’t working, aren’t used, or shouldn’t be used.

* Inactive config options: priceElementClass, sezzleWidgetContainerClass, widgetType (product-page, product-preview, cart-page), imageUrl, scaleFactor, customClasses(xpath, classname, index, targetXPathIndex), hidePrice, fixedHeight, widthType (thin, thick), altLightboxHTML, merchantID, merchantUUID, testID, numberOfPayments, bannerURL, bannerClass, bannerLink

* Inactive altVersionTemplate options: %%numberOfPayments%%, %%question-mark%%, %%price-split%%

## v6.0.1 - Released 2 Mar 2020
* Add French Modal 2.0.0 (rebrand)
* Fix disableBodyScroll function


## v6.0.3/6.0.4/6.0.5/6.0.6/6.0.7 - Released 17 Mar 2020 - 10 Apr 2020
* Add sezzleCheckoutButton with HTML placeholder
* Add Affirm Dual Install (altVersionTemplate, affirmModal and affirmLink)
* Change modal 10.0.0 from Yardbird to Fondue
* Change README.md (overhaul)
* Change widget-options.md (overhaul)

### Known Issues
- sezzleCheckoutButton themes are based on imageUrl, not site theme background color. (fixed in v6.0.8)
- Affirm info icon does not open Affirm modal. (fixed in v6.0.11)
- Affirm link icon does not open Affirm webpage. (fixed in v21.3.1)


## v6.0.8/6.0.9 - Released 23 Apr 2020
* Fix theme handling in sezzleCheckoutButton

### Known Issues
- Affirm info icon does not open Affirm modal. (fixed in 6.0.11)
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)


## v6.0.10 - Released 29 Apr 2020
* Change sezzleCheckoutButton to full JS within cart configGroup
* Change sezzleCheckoutButton in README.md
* Change sezzleCheckoutButton in widget-options.md
* Add Affirm dual widget to widget-options.md
* Fix disableBodyScroll modal reset
* Fix addClickEventForModal to use getElementsByClassName and Array.prototype.forEach

### Known Issues
- Error on webpage where sezzleCheckoutButton is not in config (fixed in 6.0.11)
- Affirm info icon does not open modal. (fixed in 6.0.11)
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)


## v6.0.11 - Released 13 May 2020
* Fix modals 2.0.0 and 2.0.1 logo image
* Fix sezzleCheckoutButton handling when not in config
* Fix Affirm info icon event listener so modal opens

### Known Issues
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)


## v20.6.0 - Released 18 Jun 2020
* Refactor SezzleJS to Object-Oriented ES6, excluding sezzleCheckoutButton which is now static
* Remove sezzleCheckoutButton from README.md
* Remove sezzleCheckoutButton from widget-options.md

### Known Issues
- Default minPrice set to $250 instead of $2500 (fixed in 20.8.0)
- Error in splitPriceElementsOn option (fixed in 20.8.1)
- %%afterpay-logo-grey%% renamed %%afterpay-logo-greyscale%% during refactor (fixed in 20.10.0)
- Dual install only: When the window is scrolled a little & the modal is opened, upon close the window position should be retained! (fixed in 20.11.0)
- Logo flashes large then reverts to normal size (fixed in 20.11.0)
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)


## v20.8.0 - Released 7 Aug 2020
* Fix minPrice value
* Update AP logos in altVersionTemplate with new brand assets, add white option, update apLink default

### Known Issues
- Error in splitPriceElementsOn option (fixed in 20.8.1)
- %%afterpay-logo-grey%% renamed %%afterpay-logo-greyscale%% during refactor (fixed in 20.10.0)
- Dual install only: When the window is scrolled a little & the modal is opened, upon close the window position should be retained! (fixed in 20.11.0)
- Logo flashes large then reverts to normal size (fixed in 20.11.0)
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)


## v20.8.1 - Released 12 Aug 2020
* Fix splitPriceElementOn issue

### Known Issues
- %%afterpay-logo-grey%% renamed %%afterpay-logo-greyscale%% during refactor (fixed in 20.10.0)
- Dual install only: When the window is scrolled a little & the modal is opened, upon close the window position should be retained! (fixed in 20.11.0)
- Logo flashes large then reverts to normal size (fixed in 20.11.0)
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)


## v20.9.0 - Released 23 Sep 2020
* Revive altLightboxHTML
* Add Klarna dual install
* Add German translation
* Add Affirm black and white logo options
* Add alt property to all logos

### Known Issues
- %%afterpay-logo-grey%% renamed %%afterpay-logo-greyscale%% during refactor (fixed in 20.10.0)
- %%afterpay-logo%% height too small - update to 18px (fixed in 20.10.0)
- German translation does not correctly handle 1.234,56 € price format (fixed in 20.10.0)
- Klarna image too small - update to max-height: 30px; margin-left: 0px; margin-bottom: 3px; (fixed in 20.11.0)
- Dual install only: When the window is scrolled a little & the modal is opened, upon close the window position should be retained! (fixed in 20.11.0)
- Logo flashes large then reverts to normal size (fixed in 20.11.0)
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)


## v20.10.0 - Released 13 Oct 2020
* Resolve accessibility issues by converting all actionable elements to buttons, adding titles, and setting focus on modal open and close (must be used with CSS version 2.0.13 or higher)
* Update price handling to detect whether cents delimiter is period or comma
* Revert Afterpay template naming convention to %%afterpay-logo-grey%%
* Increased %%afterpay-logo%% height to 18px
* Increased Klarna logo heights to 30px, adjusted margins accordingly

### Known Issues
- Dual install only: When the window is scrolled a little & the modal is opened, upon close the window position should be retained! (fixed in 20.11.0)
- Logo flashes large then reverts to normal size (fixed in 20.11.0)
- On some sites, info icon is enlarged, is 100% width, or is display: block (fixed in 20.11.0)
- When info icon is clicked on cart, page refreshes. On product page, adds to cart (fixed in 20.11.0)
- Klarna logo size still too small (fixed in 20.11.0)
- Does not handle price well if thousands delimiter is present but cents delimiter is not (fixed in 20.11.0)
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)


## v20.11.0 - Released 10 Nov 2020
* Remove tracking.sezzle iframe
* Resolve price handling issues when no cents delimiter is present.
* Resolve dual install scrolling issue
* Resolve styling issues with Sezzle and Klarna logos and info icons
* Resolve click event issues on info icons

### Known Issues
- Tracking iframe logging is still present, breaking widget  (fixed in 20.12.0)
- Comma-delimited pricing broken (fixed in 20.12.0)
- isCommaDelimited not correctly detected for ranges where first price is below $1,000 and second price is over (fixed in 21.5.0)
- “deine” should be “deinen” in German translation  (fixed in 20.12.0)
- AP logo asset changed, height needs adjusted (fixed in 21.3.1)
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>


## v20.12.0 - Released 9 Dec 2020
* Re-add/re-configure tracking, without iframe
* Add Spanish translation
* Add US territories to default supportedCountryCodes
* Fix price handling bug
* Update German translation
* Increase AP logo height

### Known Issues
- Price handling breaks if cents have more than two places - see PureHockey  (fixed in 21.3.1)
- EU team has no way to set cents delimiting to comma when price target does not contain delimiter - see Prestige theme on Shopify. (fixed in 21.3.1)
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)
- isCommaDelimited not correctly detected for ranges where first price is below $1,000 and second price is over (fixed in 21.5.0)
- Local configs must be placed before the widget script in HTML, else they will not be read.
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>


## v20.12.1 - Released 29 Dec 2020
* Change DE 2.0.0 and 2.0.1 modals to weeks, set up modal versions 2.0.2 and 2.0.3 for EU monthly payment schedule
* Add release instructions for JS and CSS
* Update server URLs to match whether widget script is US or EU

### Known Issues
- EU team has no way to set cents delimiting to comma when price target does not contain delimiter - see Prestige theme on Shopify. (fixed in 21.3.1)
- isCommaDelimited not correctly detected for ranges where first price is below $1,000 and second price is over (fixed in 21.5.0)
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>


## v20.12.2 - Released 30 Dec 2020
* Update gulp release protocol to post versions to both US and EU

### Known Issues
- EU team has no way to set cents delimiting to comma when price target does not contain delimiter - see Prestige theme on Shopify. (fixed in 21.3.1)
- isCommaDelimited not correctly detected for ranges where first price is below $1,000 and second price is over (fixed in 21.5.0)
- Affirm link icon does not open Affirm webpage. (fixed in 21.3.1)
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>


## v21.3.1 - Released 25 Mar 2021
* Add Sezzle “pill” logo options
* Convert Afterpay logos from PNG to SVG
* Add parseMode config option for EUR price format
* Add separate widget translations for EU

### Known Issues
- isCommaDelimited not correctly detected for ranges where first price is below $1,000 and second price is over (fixed in 21.5.0)
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>


## v21.3.2 - Released 31 Mar 2021
* Update Quadpay logo size post-rebrand
* Increase default font size to 14
* Changed price font size to 1.2em
* modal language refactor for better scalability (must be used with modal version 3.0.0 or higher).
* Add lang-country format translations for handling EU and North America text changes
* Fix Affirm link icon href
* Update stylesheet for .sezzle-checkout-modal-hidden (margin to 0), .sezzle-shopify-info-button (overflow to unset), .sezzle-payment-amount (various), .sezzle-logo (various), and .sezzle-info-icon (various, most related to “button” style overrides)
* Update gulp to allow for updating CSS versions
* Add competitor tracking events

### Known Issues
- isCommaDelimited not correctly detected for ranges where first price is below $1,000 and second price is over (fixed in 21.5.0)
- maxWidth is too narrow now due to font-size increases. (fixed in 21.5.1)
- Translations are based solely on browserLanguage, therefore it is causing India users to see EU versions. (fixed in 21.5.0)
- <b>Afterpay logo is too small</b
- <b>parseMode cannot be set to ‘period’</b>
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>
- competitor event is firing on every merchant. if block needs .length (fixed in 21.6.5)


## v21.4.0 - Released 20 Apr 2021
* Add EU translation support to modal refactor
* Update language default to default based on widget server URL (US vs EU)
* Update supportedCountryCodes to default based on widget server URL (US vs EU)
* Add modalTheme option so grayscale modal style is served from config instead of separate modal version
* Add function to detect background color to select contrasting logo for default “theme” option.

### Known Issues
- isCommaDelimited not correctly detected for ranges where first price is below $1,000 and second price is over (fixed in 21.5.0)
- maxWidth is too narrow now due to font-size increases. (fixed in 21.5.1)
- Translations are based solely on browserLanguage, therefore it is causing India users to see EU versions. (fixed in 21.5.0)
- <b>Afterpay logo is too small</b
- <b>parseMode cannot be set to ‘period’</b>
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>
- competitor event is firing on every merchant. if block needs .length (fixed in 21.6.5)


## v21.4.1 - Released 23 Apr 2021
* Set theme default to auto-detect merchant’s background color and apply contrasting logo
* Revert some tracking changes
* Remove merchant-specific CSS from stylesheet

### Known Issues
- isCommaDelimited not correctly detected for ranges where first price is below $1,000 and second price is over (fixed in 21.5.0)
- maxWidth is too narrow now due to font-size increases (fixed in 21.5.1)
- predictBackgroundtheme function only works on transparent background if given as color name - does not work on RGB or HEX (fixed in 21.5.0)
- predictBackgroundtheme function does not work well on color backgrounds (fixed in 21.5.1)
- predictBackgroundtheme function ignores “theme”: “light” in config override (fixed in 21.5.1)
- <b>Afterpay logo is too small</b
- <b>parseMode cannot be set to ‘period’</b>
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>
- competitor event is firing on every merchant. if block needs .length (fixed in 21.6.5)


## v21.5.0 - Released 10 May 2021
* Fix comma-delimited issue on ranged items
* Fix transparent background detection issue

### Known Issues
- maxWidth is too narrow now due to font-size increases (fixed in 21.5.1)
- predictBackgroundtheme function does not work well on color backgrounds (fixed in 21.5.1)
- predictBackgroundtheme function ignores “theme”: “light” in config override (fixed in 21.5.1)
- <b>Afterpay logo is too small</b
- <b>parseMode cannot be set to ‘period’</b>
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>
- competitor event is firing on every merchant. if block needs .length (fixed in 21.6.5)


## v21.5.1 - Released 28 May 2021
* Change maxWidth default to 485
* Always hide .sezzle- imposter widget
* Update predictBackgroundtheme to better handle color backgrounds using luminance and lumosity
* Fix theme handling when “light” is given in config override

### Known Issues
- Theme default is blocking predictBackgroundtheme (fixed in 21.5.3)
- <b>Afterpay logo is too small</b
- <b>parseMode cannot be set to ‘period’</b>
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>
- competitor event is firing on every merchant. if block needs .length (fixed in 21.6.5)

## v21.5.3 - Released 28 May 2021
* Changed theme default to empty string to allow predictBackgroundtheme

### Known Issues
- <b>Afterpay logo is too small</b
- <b>parseMode cannot be set to ‘period’</b>
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>
- competitor event is firing on every merchant. if block needs .length (fixed in 21.6.5)


## v21.6.0 - Released 10 June 2021
* Bumped default fontWeight to 500
* Added ‘sezzle-pill’ theme option

### Known Issues
- <b>Afterpay logo is too small</b
- <b>parseMode cannot be set to ‘period’</b>
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>
- competitor event is firing on every merchant. if block needs .length (fixed in 21.6.5)


## v21.6.2 - Released 28 June 2021
* Accessibility audit for keyboard navigation

### Known Issues
- <b>Afterpay logo is too small</b
- <b>parseMode cannot be set to ‘period’</b>
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>
- competitor event is firing on every merchant. if block needs .length (fixed in 21.6.5)
- Breaking change typo in modalNode attributes - should be _modalNode (fixed in 21.6.4)


## v21.6.4 - Released 29 June 2021
* Add es-ES widget translation and modal version 2.0.8 for EU
* Fix accessibility bug in modal

### Known Issues
- <b>Afterpay logo is too small</b
- <b>parseMode cannot be set to ‘period’</b>
- <b>Price handling breaks if cents have more than two places - see PureHockey</b>
- <b>isCommaDelimited does not auto-detect correctly when widget has only 1 decimal place</b>
- competitor event is firing on every merchant. if block needs .length (fixed in 21.6.5)

## v21.6.5 - Released 2 Aug 2021
* Add error event logging
* fix competitor event bug

## v21.6.6 - Released 14 Aug 2021
* Add shopPay Dual Install (altVersionTemplate, shopPayModal and shopPayLink)
