"use client";

import Script from "next/script";

// Supports both the task-specified NEXT_PUBLIC_META_PIXEL_ID name and a legacy alias.
const pixelId =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export function MetaPixel() {
  if (!pixelId) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s){
          if(f.fbq)return;
          n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
          t=b.createElement(e);t.async=!0;t.src=v;
          s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
        }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
        /* Consent revoked by default — CookieConsentBanner grants on user accept */
        fbq('consent','revoke');
        fbq('init','${pixelId}');
        fbq('track','PageView');
      `}
    </Script>
  );
}
