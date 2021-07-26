import SezzleJS from './sezzle';

// Assumes document.sezzleConfig is present
try  {
    new SezzleJS(document.sezzleConfig).init();
} catch(e) {
    logErrors(e.message)
}

function logErrors(message) {
    const trackingURL = document.widgetServerBaseUrl ? `${document.widgetServerBaseUrl}/v1/event/log` : 'https://widget.sezzle.com/v1/event/log';
    const body = {
        event_name: message,
    };
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('post', trackingURL, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject(new Error('Something went wrong, contact the Sezzle team!'));
        }
      };
      xhr.onerror = function () {
        reject(new Error('Something went wrong, contact the Sezzle team!'));
      };
      // eslint-disable-next-line no-unused-expressions
      xhr.send(JSON.stringify(body));
    });
  }