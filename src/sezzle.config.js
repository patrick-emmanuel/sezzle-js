/* eslint-disable */
exports.oldConfig = {
  "targetXPath": [
    "#id-1/.class-1",
    "#id-2/.class-2",
    "#id-3/.class-3"
  ],
  "renderToPath": [
    ".",
    "..",
    "../.."
  ],
  "ignoredPriceElements": [
    "#id-4/.class-4",
    "#id-5/.class-5"
  ],
  "merchantID": "49261e2d-72af-4358-bf97-3035ce9f11a1",
  "numberOfPayments": 5,
  "minPrice": 0,
  "maxPrice": 2000000,
  "theme": "light",
  "widthType": "thin",
  "widgetType": "product-page",
  "alignment": "left",
  "forcedShow": false,
  "customClasses": [
    {
      "xpath": ".",
      "className": "class-1-0",
      "index": 0,
      "targetXPathIndex": 2
    },
    {
      "xpath": "./div",
      "className": "class-2-0",
      "index": 0,
      "targetXPathIndex": 1
    },
    {
      "xpath": ".",
      "className": "class-1-1",
      "index": 1,
      "targetXPathIndex": 1
    },
    {
      "xpath": "./div",
      "className": "class-2-1",
      "index": 1,
      "targetXPathIndex": 0
    }
  ],
  "relatedElementActions": [
    [
      {
        "relatedPath": "some-path-1",
        "action": "some-action-1",
        "initialAction": "some-initial-action-1"
      },
      {
        "relatedPath": "some-path-2",
        "action": "some-action-2",
        "initialAction": "some-initial-action-2"
      }
    ],
    [
      {
        "relatedPath": "some-path-3",
        "action": "some-action-3",
        "initialAction": "some-initial-action-3"
      },
      {
        "relatedPath": "some-path-4",
        "action": "some-action-4",
        "initialAction": "some-initial-action-4"
      }
    ],
    [
      {
        "relatedPath": "some-path-5",
        "action": "some-action-5",
        "initialAction": "some-initial-action-5"
      },
      {
        "relatedPath": "some-path-6",
        "action": "some-action-6",
        "initialAction": "some-initial-action-6"
      }
    ]
  ]
};

exports.newConfig = {
  "configGroups": [
    {
      "targetXPath": "#id-1/.class-1",
      "renderToPath": ".",
      "ignoredPriceElements": [
        "#id-4/.class-4",
        "#id-5/.class-5"
      ],
      "theme": "light",
      "widthType": "thin",
      "widgetType": "product-page",
      "alignment": "left",
      "customClasses": [
        {
          "xpath": "./div",
          "className": "class-2-1",
          "index": 1
        }
      ],
      "relatedElementActions": [
        {
          "relatedPath": "some-path-1",
          "action": "some-action-1",
          "initialAction": "some-initial-action-1"
        },
        {
          "relatedPath": "some-path-2",
          "action": "some-action-2",
          "initialAction": "some-initial-action-2"
        }
      ]
    },
    {
      "targetXPath": "#id-2/.class-2",
      "renderToPath": "..",
      "ignoredPriceElements": [
        "#id-4/.class-4",
        "#id-5/.class-5"
      ],
      "theme": "light",
      "widthType": "thin",
      "widgetType": "product-page",
      "alignment": "left",
      "customClasses": [
        {
          "xpath": "./div",
          "className": "class-2-0",
          "index": 0
        },
        {
          "xpath": ".",
          "className": "class-1-1",
          "index": 1
        }
      ],
      "relatedElementActions": [
        {
          "relatedPath": "some-path-3",
          "action": "some-action-3",
          "initialAction": "some-initial-action-3"
        },
        {
          "relatedPath": "some-path-4",
          "action": "some-action-4",
          "initialAction": "some-initial-action-4"
        }
      ]
    },
    {
      "targetXPath": "#id-3/.class-3",
      "renderToPath": "../..",
      "ignoredPriceElements": [
        "#id-4/.class-4",
        "#id-5/.class-5"
      ],
      "theme": "light",
      "widthType": "thin",
      "widgetType": "product-page",
      "alignment": "left",
      "customClasses": [
        {
          "xpath": ".",
          "className": "class-1-0",
          "index": 0
        }
      ],
      "relatedElementActions": [
        {
          "relatedPath": "some-path-5",
          "action": "some-action-5",
          "initialAction": "some-initial-action-5"
        },
        {
          "relatedPath": "some-path-6",
          "action": "some-action-6",
          "initialAction": "some-initial-action-6"
        }
      ]
    }
  ],
  "merchantID": "49261e2d-72af-4358-bf97-3035ce9f11a1",
  "forcedShow": false,
  "numberOfPayments": 5,
  "minPrice": 0,
  "maxPrice": 2000000
}

exports.promoMinConfig = {
	uuid: '49261e2d-72af-4358-bf97-3035ce9f11a1',
	widgetEnabled: true,
	beginAt: '2021-06-07',
	endAt: '2021-08-31',
	currencyCode: 'USD',
	spendAwardinCents: 500,
	promoCode: '',
	type: 1, // 'post-capture'
	isNewUserOnly: false,
	isFirstPurchaseFromMerchantOnly: false,
	spendAwardThresholdInCents: 0
}

exports.promoMaxConfig = {
	uuid: '49261e2d-72af-4358-bf97-3035ce9f11a1',
	widgetEnabled: true,
	beginAt: '2021-06-07',
	endAt: '2021-08-31',
	currencyCode: 'CAD',
	spendAwardinCents: 1000,
	promoCode: 'NEW2SEZZLE',
	type: 2, // 'post-order'
	isNewUserOnly: true,
	isFirstPurchaseFromMerchantOnly: true,
	spendAwardThresholdInCents: 3500
}
