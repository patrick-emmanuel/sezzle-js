import { now } from "core-js/core/date";

class Promotions {
  constructor(promotions) {
    this._promotions = promotions;
    this._spendTranslations = {
      en: 'new customers receive %%reward%% back in Sezzle Spend',
      fr: 'les nouveaux clients reçoivent %%reward%% dans Sezzle Spend',
      de: 'Neukunden erhalten %%reward%% zurück in Sezzle Spend',
      es: 'los nuevos clientes reciben %% recompensa %% en Sezzle Spend',
      'en-GB': 'new customers receive %%reward%% back in Sezzle Spend',
      'fr-FR': 'les nouveaux clients reçoivent %%reward%% dans Sezzle Spend',
      'de-DE': 'Neukunden erhalten %%reward%% zurück in Sezzle Spend',
      'es-ES': 'los nuevos clientes reciben %%reward%% en Sezzle Spend',
    };
    this._spendEnabled = promotions.spendEnabled || false;
    this._spendReward = promotions.spendReward || '$5.00'; // currency conversion??
    this._spendTemplate = promotions.spendTemplate || this._spendTranslations;
    this._spendExpiration = new Date(promotions.spendExpiration);
    this._isExpired = this._spendExpiration < new Date();
  }
}

export default Promotions;
