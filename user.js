/******************************************************************************
 * Konfigurační soubor user.js pro Mozilla Firefox
 * 
 * Výchozí nastavení webového prohlížeče s důrazem na soukromí. 
 * 
 * Autor: Pavel Cvrček <jasnapaka@jasnapaka.com>
 * 
 * Poslední aktualizace: 2020-11-11
 * 
******************************************************************************/

/******************************************************************************
 * Obecné                                                                     *
 *****************************************************************************/

// Výchozí vyhledávač je "DuckDuckGo", bez našeptávání
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.urlbar.placeholderName.private", "DuckDuckGo");
user_pref("browser.urlbar.suggest.searches", false);

// Jazykové nastavení bude angličtina, aby byl těžší fingerprint
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.url", "");
user_pref("intl.accept_languages", "en-US, en");
user_pref("intl.locale.matchOS", false);

// Domovská stránka bude prázdná
user_pref("browser.newtabpage.enabled", false);

/******************************************************************************
 * Soukromí                                                                   *
 *****************************************************************************/

// ID buildu bude jako v TORu
user_pref("general.buildID.override", "20100101");
user_pref("browser.startup.homepage_override.buildID", "20100101");

// Základní ochrana proti "otisku prohlížeče" (fingerprinting)
user_pref("privacy.resistFingerprinting", true);

// Ochrana soukromí na úroveň 'přísná'.
user_pref("browser.contentblocking.category", "strict");

// Zakázání WebGL. Důvod viz 
// https://www.contextis.com/en/blog/webgl-a-new-dimension-for-browser-exploitation
user_pref("webgl.disabled", true);

// Zakázání WebRTC. Důvod viz
// https://restoreprivacy.com/webrtc-leaks/
user_pref("media.peerconnection.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);

// Geolokaci použijeme, ale tu od Mozilly a bez logování
user_pref("geo.enabled", true);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

//  First-Party Isolation (FPI) ("izolování" cookies k doméně)
user_pref("privacy.firstparty.isolate", true);

// Neposíláme hlavičku "Do Not Track"
user_pref("privacy.donottrackheader.enabled", false);

// Zakázání notifikací
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.webnotifications.enabled", false);

// Zakázání Battery API
user_pref("dom.battery.enabled", false);

// Zakázání asm.js
user_pref("javascript.options.asmjs", false);

// Cookies třetích stran nechceme
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.thirdparty.sessionOnly", true);

// Zakázání DNS Prefetch
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Vypnutí Safe Browsing.
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);

// Zakázání "speculative pre-connections"
user_pref("network.http.speculative-parallel-limit", 0);
 
/******************************************************************************
 * Ostatní                                                                    *
 *****************************************************************************/

// Zpřístupnění stránky "about:config" bez bezpečnostního varování.
user_pref("browser.aboutConfig.showWarning", false);

// Při ukončení nevarovat, že je otevřeno více panelů.
user_pref("browser.tabs.warnOnClose", false);
