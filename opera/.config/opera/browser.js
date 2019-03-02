// T7En7svRI2njmlsUhXDjCDawevcscpO+B4csmfTlIBJ1aZ3KuEIWcNl4AbqVOLlTZArz5zxKgRN5LBQv/WhWGQ90RjjWhaoj3+VwNHEAPOCPhARSzyPZN7fYR3QsqQakecs5LhPO01xNsy7Rv2uqXQNn/ga06jSsGn97HoeQl4meYSEAKuV6Hvw4ryUm9F52vG0el32W6oQlN6cOxfrz8labPNIghvoqSSPfPXJZIcxSnmZGrFQriKBMe3zCcFMmTgYPd3Z2I0l0eyLKfpeY0PTCn5Li9COGWOF2+lzxG9+UpCEQZL2Fte6w20wlqiaOi68vDmKZ2bQm80SlzlBbEw==
/**
 ** Copyright (C) 2000-2019 Opera Software AS.  All rights reserved.
 **
 ** This file is part of the Opera web browser.
 **
 ** This script patches sites to work better with Opera
 ** For more information see http://www.opera.com/docs/browserjs/
 **
 ** If you have comments on these patches (for example if you are the webmaster
 ** and want to inform us about a fixed site that no longer needs patching)
 ** please report issues through the bug tracking system
 ** https://bugs.opera.com/
 **
 ** DO NOT EDIT THIS FILE! It will not be used by Opera if edited.
 **
 ** BROWSERJS_TIMESTAMP = '201902201700'; // for versioning; see DNA-54964
 **/

'use strict';

if (!location.href.includes('operabrowserjs=no')) {
  (function(document) {
    const {href, pathname, hostname} = location;

    /*
      We make references to the following functions to not get version that
      users
      have overwritten.
    */
    const setTimeout = window.setTimeout;
    const call = Function.prototype.call;
    const copyMethod = (method, ...defaultArgs) => {
      method.call = call;
      return (...args) => {
        if (defaultArgs.length) {
          args = defaultArgs.concat(args);
        }
        return method.call(...args);
      };
    };

    const addEventListener = copyMethod(Window.prototype.addEventListener);
    const appendChild = copyMethod(Node.prototype.appendChild);
    const createElement = copyMethod(Document.prototype.createElement);
    const createTextNode =
        copyMethod(Document.prototype.createTextNode, document);
    const setAttribute = copyMethod(Element.prototype.setAttribute);
    const querySelector = copyMethod(Document.prototype.querySelector);
    const querySelectorElement = copyMethod(Element.prototype.querySelector);

    const version = () => {
      const total = Object.keys(PATCHES).length;
      /* eslint-disable max-len */
      return `Opera OPRDesktop 28.0 core 1750.0, Februar 20, 2018. Active patches: ${total}`;
      /* eslint-enable max-len */
    };

    const log = text => {
      /* eslint-disable max-len, no-console */
      console.log(
          `Opera has modified script or content on ${hostname} (${text}). See browser.js for details`);
      /* eslint-enable max-len, no-console */
    };

    const isPartOfDomain = host =>
        hostname.endsWith(`.${host}`) || hostname === host;
    const hideOperaObject = () => {
      chrome.webstore = opr.addons;
      delete window.opr;
    };
    const hideOperaUserAgent = () => {
      const newUA = navigator.userAgent.replace(/ ?OPR.[0-9.]*.*/, '');
      Object.defineProperty(window.navigator, 'userAgent', {get: () => newUA});
    };

    const addCssToDocument = (cssText, doc = document, mediaType = '') => {
      addCssToDocument.styleObj = addCssToDocument.styleObj || {};
      let styles = addCssToDocument.styleObj[mediaType];
      if (!styles) {
        const head = querySelector(doc, 'head');
        if (!head) {
          // head always present in html5-parsers, assume document not ready
          addEventListener(doc, 'DOMContentLoaded', () => {
            addCssToDocument(cssText, doc, mediaType);
          }, false);
          return;
        }
        styles = createElement(doc, 'style');
        addCssToDocument.styleObj[mediaType] = styles;
        setAttribute(styles, 'type', 'text/css');
        if (mediaType) {
          setAttribute(styles, 'media', mediaType);
        }
        appendChild(styles, createTextNode(' '));
        appendChild(head, styles);
      }
      styles.firstChild.nodeValue += `${cssText}\n`;
      return true;
    };

    const PATCHES = {
      'PATCH-1228': {
        description: 'block for delta-homes com spam site',
        isMatching: () => isPartOfDomain('delta-homes.com'),
        apply: () => location.reload('https://google.com'),
      },
      'PATCH-1227': {
        description: 'Mock as Chrome on popular American Bank Sites',
        isMatching: () => isPartOfDomain('bankofamerica.com') ||
            isPartOfDomain('chase.com'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1289': {
        description: 'Mock as Chrome on popular polish bank BGZ Optima',
        isMatching: () => isPartOfDomain('bgzoptima.pl'),
        apply: () => hideOperaUserAgent(),
      },
      'DNA-70096': {
        description: 'Mock Microsoft Team as Chrome',
        isMatching: () => isPartOfDomain('teams.microsoft.com'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1270': {
        description: 'Pretend to be Chrome on Telnor',
        isMatching: () => isPartOfDomain('telenor.no'),
        apply: () => hideOperaUserAgent(),
      },
      'DNAWIZ-50641': {
        description: 'panoramic view for bcc',
        isMatching: () => isPartOfDomain(
            'el-helicoide.pilots.bbcconnectedstudio.co.uk'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1298': {
        description: 'Pretend to be Chrome on hoopladigital',
        isMatching: () => isPartOfDomain('hoopladigital.com'),
        apply: () => hideOperaUserAgent(),
      },
      'DNAWIZ-34975': {
        description: 'Pretend to be Chrome on barnesandnoble',
        isMatching: () => isPartOfDomain('barnesandnoble.com'),
        apply: () => hideOperaUserAgent(),
      },
      'DNAWIZ-39189': {
        description: 'Pretend to be Chrome on cineplex',
        isMatching: () => isPartOfDomain('cineplex.com'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1303': {
        description: 'Pretend to be Chrome on penfed',
        isMatching: () => isPartOfDomain('penfed.org'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1296': {
        description: 'Pretend to be Chrome on instamed',
        isMatching: () => isPartOfDomain('pay.instamed.com'),
        apply: () => hideOperaUserAgent(),
      },
      'DNAWIZ-27592': {
        description: 'Pretend to be Chrome on fireeye',
        isMatching: () => isPartOfDomain('fireeye.com'),
        apply: () => hideOperaUserAgent(),
      },
      'DNAWIZ-28531': {
        description: 'Pretend to be Chrome on cimbclicks',
        isMatching: () => isPartOfDomain('cimbclicks.com.my'),
        apply: () => hideOperaUserAgent(),
      },
      'DNA-69599': {
        description: 'Pretend to be Chrome on optus sport',
        isMatching: () => isPartOfDomain('sport.optus.com.au'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1295': {
        description: 'Pretend to be Chrome on blend',
        isMatching: () => isPartOfDomain('blend.io'),
        apply: () => hideOperaUserAgent(),
      },
      'DNA-72852': {
        description: 'Pretend to be Chrome on streamdb3web',
        isMatching: () => isPartOfDomain(
            'streamdb3web.securenetsystems.net/cirrusencore/DEMOSTN'),
        apply: () => hideOperaUserAgent(),
      },
      'DNAWIZ-45328': {
        description: 'Pretend to be Chrome on tv.line',
        isMatching: () => isPartOfDomain('tv.line.me'),
        apply: () => hideOperaUserAgent(),
      },
      'DNAWIZ-46115': {
        description: 'Pretend to be Chrome on icloud numbers',
        isMatching: () => isPartOfDomain('icloud.com/numbers/'),
        apply: () => hideOperaUserAgent(),
      },
      'DNAWIZ-47212': {
        description: 'Pretend to be Chrome on SoCalGas',
        isMatching: () => isPartOfDomain('socalgas.com'),
        apply: () => hideOperaUserAgent(),
      },
      'DNAWIZ-48968': {
        description: 'Pretend to be Chrome on uzic',
        isMatching: () => isPartOfDomain('uzic.ch'),
        apply: () => hideOperaUserAgent(),
      },


      'PATCH-1207': {
        description: 'Bluejeans web app doesn\'t work with Opera',
        isMatching: () => {
          if (!isPartOfDomain('bluejeans.com')) {
            return false;
          }

          if (!window.chrome.runtime || !window.chrome.runtime.sendMessage) {
            return true;
          }

          return false;
        },
        apply: () => window.chrome.runtime = {'sendMessage': () => {}},
      },
      'PATCH-1221': {
        description: 'Redirect Blue Jeans meeting URL to the one ending with ' +
            '/browser to avoid an issue that prevents joining a meeting.',
        isMatching: () => {
          if (!isPartOfDomain('bluejeans.com')) {
            return false;
          }

          // Bluejeans is hanging on https://*.bluejeans.com/123456789/ urls's.
          // It expects to have the special extension installed. Not a case on
          // https://*.bluejeans.com/123456789/browser url's.
          // Also urls with password should be handled :
          // https://*.bluejeans.com/123456789/1234
          const meetingPattern = /^[\d/]{8,}$/;
          return meetingPattern.test(location.pathname);
        },
        apply: () => {
          const finalURL = new URL(location);
          if (location.pathname.endsWith('/')) {
            finalURL.pathname += 'browser';
          } else {
            finalURL.pathname += '/browser';
          }
          location.replace(finalURL);
        },
      },
      'PATCH-1190': {
        description: 'Delta.com shows browser warning to Opera 25',
        isMatching: () => isPartOfDomain('delta.com'),
        apply: () => {
          let value;
          Object.defineProperty(window, 'UnsupportedBrowser', {
            get: () => value,
            set: arg => {
              arg.badBrowser = () => false;
              value = arg;
            },
          });
        },
      },
      'PATCH-1174': {
        description:
            'iCloud iWork new document stays blank - camouflage as Chrome',
        isMatching: () => isPartOfDomain('icloud.com'),
        apply: () => {
          Object.defineProperty(window, 'SC', {
            get: function() { return this.__SC__; },
            set: function(arg) {
              if (!arg.hasOwnProperty('browser')) {
                Object.defineProperty(arg, 'browser', {
                  get: function() { return this.__browser__; },
                  set: function(arg) {
                    arg.isChrome = true;
                    arg.current = 'chrome';
                    arg.chrome = arg.version;
                    this.__browser__ = arg;
                  },
                });
              }
              this.__SC__ = arg;
            },
          });
        },
      },
      'PATCH-1187': {
        description: 'iTunes U Course Manager - hide Opera tag',
        isMatching: () => isPartOfDomain('itunesu.itunes.apple.com'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1156': {
        description: 'my.tnt.com - fix empty printout',
        isMatching: () => isPartOfDomain('my.tnt.com'),
        applyOnDOMReady: true,
        apply: () => {
          const mpl = window.matchMedia('print');
          let origClearPrintBlock;
          mpl.addListener(mql => {
            if (mql.matches) {
              if (typeof clearPrintBlock === 'function') {
                origClearPrintBlock = clearPrintBlock;
                clearPrintBlock = () => {};
              }
            } else {
              if (typeof origClearPrintBlock === 'function') {
                setTimeout(origClearPrintBlock, 500);
              }
            }
          });
        },
      },
      'PATCH-1252': {
        description: 'hide first-run overlay on read.amazon.com',
        isMatching: () => isPartOfDomain('read.amazon.com'),
        apply: () => {
          addCssToDocument([
            '.ui-dialog.firstRunDialog, ',
            '.ui-dialog.firstRunDialog + .ui-widget-overlay ',
            '{visibility:hidden}',
          ].join(''));
        },
      },
      'DNA-69613': {
        description: 'hide Unsupported Browser label on tickets.oebb.at',
        isMatching: () => isPartOfDomain('tickets.oebb.at'),
        apply: () => {
          addCssToDocument('#settingErr {visibility:hidden}');
        },
      },
      'PATCH-1263': {
        description: 'hide Unsupported Browser dialog on clarks.co.uk',
        isMatching: () => isPartOfDomain('clarks.co.uk'),
        apply: () => {
          addCssToDocument('#unsupportedBrowser {visibility:hidden}');
        },
      },
      '1': {
        description: 'Browser.js status and version reported on browser.js ' +
            'documentation page',
        isMatching: () => isPartOfDomain('opera.com') &&
            pathname.startsWith('/docs/browserjs/'),
        applyOnDOMReady: true,
        apply: () => {
          const bjElement = querySelector(document, '#browserjs_active');
          const bjMessage =
              querySelector(document, '#browserjs_status_message');
          if (bjElement) {
            const bjElementChild = querySelectorElement(bjElement, 'span');
            if (bjElementChild) {
              bjElement.style.display = '';
              appendChild(bjElementChild, createTextNode(version()));
              if (bjMessage) {
                bjMessage.style.display = 'none';
              }
            }
          }
        },
      },
      'PATCH-221': {
        description: 'Include browser.js timestamp in bug reports',
        isMatching:
            () => href.startsWith('https://bugs.opera.com/wizarddesktop/'),
        applyOnDOMReady: true,
        apply: () => {
          const form = querySelector(document, '#bug');
          if (form instanceof HTMLFormElement && form.auto) {
            form.auto.value += `\n\nBrowser JavaScript: \n${version()}`;
          }
        },
      },
      'PATCH-1220': {
        description: 'pretend to be Chrome on talkgadget to not force ' +
            'plugin download.',
        isMatching: () => hostname.includes('.google.') &&
            hostname.startsWith('talkgadget'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1269': {
        description: 'Hide Chrome ad from Google pages',
        isMatching: () => hostname.startsWith('images.google.') ||
            hostname.startsWith('www.google.'),
        applyOnDOMReady: true,
        apply: () => {
          const href =
              'https://www.google.com/url?q=/chrome/browser/desktop/';
          const res = document.evaluate(
              `//a[contains(@href, "${href}")]`, document, null,
              XPathResult.ANY_TYPE, null);
          const downloadLink = res.iterateNext();
          if (downloadLink) {
            const ad = downloadLink.closest('div[role="dialog"]');
            if (ad) {
              ad.style.display = 'none';
            }
          }
        },
      },
      'PATCH-1287': {
        description: 'Pretend to be Chrome on Amazon Alexa',
        isMatching: () => isPartOfDomain('alexa.amazon.com'),
        apply: () => hideOperaUserAgent(),
      },
      'DNA-69435': {
        description: 'Hide Yandex ad from yandex search results',
        isMatching: () => hostname.startsWith('yandex') &&
            pathname.startsWith('/search/'),
        apply: () => {
          addCssToDocument('.popup2.distr-popup {visibility: hidden;}');
        },
      },
      'DNA-73368': {
        description: 'Pretend to be Chrome on cbs.com',
        isMatching: () => isPartOfDomain('cbs.com'),
        apply: () => {
          hideOperaObject();
          hideOperaUserAgent();
        },
      },
    };

    for (let key in PATCHES) {
      const {isMatching, apply, description, applyOnDOMReady} = PATCHES[key];
      if (isMatching()) {
        const run = () => {
          apply();
          log(`${key}, ${description}`);
        };

        if (applyOnDOMReady) {
          addEventListener(document, 'DOMContentLoaded', run, false);
        } else {
          run();
        }
      }
    }
  })(document);
}
