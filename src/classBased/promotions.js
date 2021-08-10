class Promotions {
  constructor(promotions) {
    this._promoTranslations = {
      newUsers: {
        en: 'first-time-customers',
        fr: 'les nouveaux clients',
        de: 'Neukunden erhalten',
        es: 'los nuevos clientes',
        'en-GB': '',
        'fr-FR': '',
        'de-DE': '',
        'es-ES': '',
      },
      receive: {
        en: ' receive',
        fr: ' reçoivent',
        de: ' zurück',
        es: ' reciben',
        'en-GB': '',
        'fr-FR': '',
        'de-DE': '',
        'es-ES': '',
      },
      type: {
        off: {
          en: ' off',
          fr: '',
          de: '',
          es: '',
          'en-GB': '',
          'fr-FR': '',
          'de-DE': '',
          'es-ES': '',
        },
        back: {
          en: ' back',
          fr: '',
          de: '',
          es: '',
          'en-GB': '',
          'fr-FR': '',
          'de-DE': '',
          'es-ES': '',
        },
        after: {
          en: ' after their first purchase is completed',
          fr: '',
          de: '',
          es: '',
          'en-GB': '',
          'fr-FR': '',
          'de-DE': '',
          'es-ES': '',
        },
      },
      with: {
        en: ' with',
        fr: '',
        de: '',
        es: '',
        'en-GB': '',
        'fr-FR': '',
        'de-DE': '',
        'es-ES': '',
      },
      in: {
        en: ' in',
        fr: '',
        de: '',
        es: '',
        'en-GB': '',
        'fr-FR': '',
        'de-DE': '',
        'es-ES': '',
      },
      promoCode: {
        en: ' promo code',
        fr: '',
        de: '',
        es: '',
        'en-GB': '',
        'fr-FR': '',
        'de-DE': '',
        'es-ES': '',
      },
      onOrders: {
        en: ' on orders of',
        fr: '',
        de: '',
        es: '',
        'en-GB': '',
        'fr-FR': '',
        'de-DE': '',
        'es-ES': '',
      },
      orMore: {
        en: ' or more',
        fr: '',
        de: '',
        es: '',
        'en-GB': '',
        'fr-FR': '',
        'de-DE': '',
        'es-ES': '',
      },
    };

    this._promoStartDate = new Date(promotions.beginAt) || new Date('1900-01-01');
    this._promoEndDate = new Date(promotions.endAt) || new Date('3000-12-31');
    this._promoCurrency = promotions.currency || 'USD'; //
    this._promoReward = promotions.spendAwardInCents || 500;
    this._promoType = promotions.type || '';
    this._promoNewUser = promotions.isNewUserOnly || false;
    this._promoFirstPurchase = promotions.isFirstPurchaseFromMerchantOnly || false;
    this._promoWidgetEnabled = promotions.widgetEnabled || true;
    this._promoCode = promotions.uuid || '';
    this._promoThreshold = promotions.spend_award_threshold_cents || 0; //

    this._spendActive = this._promoWidgetEnabled && this._promoStartDate < new Date() && this._promoEndDate > new Date();
    this._formatter = new Intl.NumberFormat(this.language, {
      style: 'currency',
      currency: this._promoCurrency,
      minimumFractionDigits: 2,
    });
  }
}

this._promoTemplateComponents = [];
if (this._promoNewUser) {
  this._promoTemplateComponents.append(this._promoTranslations.newUsers);
}
this._promoTemplateComponents.append(this._promoTranslations.receive);
this._promoTemplateComponents.append(this._formatter.format(this._promoReward / 100));
this._promoTemplateComponents.append(this._promoCurrency);
this._promoTemplateComponents.append(this._promoTranslations.type[this._promoType]); // check exact values received
if (this._promoCode) {
  this._promoTemplateComponents.append(this._promoTranslations.with);
  this._promoTemplateComponents.append(this._promoTranslations.promoCode);
  this._promoTemplateComponents.append(this._promoCode);
}
if (this._promoThreshold) {
  this._promoTemplateComponents.append(this._promoTranslations.onOrders);
  this._promoTemplateComponents.append(this._formatter.format(this._promoThreshold / 100));
  this._promoTemplateComponents.append(this._promoCurrency);
  this._promoTemplateComponents.append(this._promoTranslations.orMore);
}

this._promoModalComponents = [];
if (this._promoNewUser) {
  this._promoModalComponents.append(this._promoTranslations.newUsers);
}
this._promoModalComponents.append(this._promoTranslations.receive);
this._promoModalComponents.append(this._formatter.format(this._promoReward / 100));
this._promoModalComponents.append(this._promoCurrency);
this._promoModalComponents.append(this._promoTranslations.in);
this._promoModalComponents.append(' Sezzle Spend'); // should be a link
this._promoModalComponents.append(this._promoTranslations.type.after);
this._promoModalComponents.append('.');

this._parsePromoTemplate = function (components) {
  let promoTemplate = '';
  for (let i = 0; i < components.length; i++) {
    const substring = components[i];
    promoTemplate += substring[this.language];
  }
  return promoTemplate;
};

this._promoWidgetTemplate = this._parsePromoTemplate(this._promoTemplateComponents);
this._promoModalTemplate = this._parsePromoTemplate(this._promoModalComponents);

export default Promotions;
