/**
 * Google Analytics 4 Integration
 * Track user behavior and conversions
 */

// Type definitions for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

// Initialize Google Analytics
export const initGA = (measurementId: string = 'G-XJGBLKR2TN') => {
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer?.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false, // We'll send page views manually for SPA
  });
};

// Track page views
export const logPageView = (url?: string) => {
  const pageUrl = url || window.location.pathname + window.location.search;

  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pageUrl,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
};

// Generic event tracking
export const logEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Custom event tracking functions
export const trackGalleryView = (itemId: string, itemType: 'image' | 'video') => {
  logEvent('gallery_item_view', {
    event_category: 'Gallery',
    event_label: itemId,
    item_type: itemType,
  });
};

export const trackGalleryCategory = (category: string) => {
  logEvent('gallery_category_change', {
    event_category: 'Gallery',
    event_label: category,
  });
};

export const trackPricingView = (planName: string, price: string) => {
  logEvent('view_item', {
    event_category: 'Pricing',
    event_label: planName,
    value: parseFloat(price.replace(/[^0-9.]/g, '')),
    currency: 'USD',
    items: [
      {
        item_name: planName,
        price: parseFloat(price.replace(/[^0-9.]/g, '')),
      },
    ],
  });
};

export const trackPricingCTA = (planName: string, price: string) => {
  logEvent('select_item', {
    event_category: 'Pricing',
    event_label: planName,
    value: parseFloat(price.replace(/[^0-9.]/g, '')),
    currency: 'USD',
    items: [
      {
        item_name: planName,
        price: parseFloat(price.replace(/[^0-9.]/g, '')),
      },
    ],
  });
};

export const trackFormSubmit = (formName: string, formLocation: string = '') => {
  logEvent('generate_lead', {
    event_category: 'Form',
    event_label: formName,
    form_location: formLocation,
  });
};

export const trackNewsletterSignup = (email?: string) => {
  logEvent('sign_up', {
    event_category: 'Newsletter',
    method: 'email',
  });
};

export const trackVideoPlay = (videoId: string, videoTitle?: string) => {
  logEvent('video_start', {
    event_category: 'Video',
    event_label: videoId,
    video_title: videoTitle,
  });
};

export const trackVideoComplete = (videoId: string, videoTitle?: string) => {
  logEvent('video_complete', {
    event_category: 'Video',
    event_label: videoId,
    video_title: videoTitle,
  });
};

export const trackOutboundLink = (url: string, linkText?: string) => {
  logEvent('click', {
    event_category: 'Outbound Link',
    event_label: url,
    link_text: linkText,
  });
};

export const trackPhoneClick = (phoneNumber: string) => {
  logEvent('contact', {
    event_category: 'Phone',
    event_label: phoneNumber,
    method: 'phone',
  });
};

export const trackEmailClick = (email: string) => {
  logEvent('contact', {
    event_category: 'Email',
    event_label: email,
    method: 'email',
  });
};

export const trackSocialClick = (platform: string, url: string) => {
  logEvent('social_click', {
    event_category: 'Social',
    event_label: platform,
    social_url: url,
  });
};

export const trackScrollDepth = (depth: number) => {
  logEvent('scroll', {
    event_category: 'Engagement',
    event_label: `${depth}%`,
    value: depth,
  });
};

export const trackFAQExpand = (question: string) => {
  logEvent('faq_expand', {
    event_category: 'FAQ',
    event_label: question,
  });
};

export const trackImageDownload = (imageUrl: string) => {
  logEvent('file_download', {
    event_category: 'Download',
    event_label: imageUrl,
    file_type: 'image',
  });
};

// E-commerce tracking (if you add checkout functionality later)
export const trackBeginCheckout = (value: number, items: any[]) => {
  logEvent('begin_checkout', {
    event_category: 'Ecommerce',
    value,
    currency: 'USD',
    items,
  });
};

export const trackPurchase = (
  transactionId: string,
  value: number,
  items: any[]
) => {
  logEvent('purchase', {
    event_category: 'Ecommerce',
    transaction_id: transactionId,
    value,
    currency: 'USD',
    items,
  });
};

// Search tracking
export const trackSearch = (searchTerm: string, results?: number) => {
  logEvent('search', {
    event_category: 'Search',
    search_term: searchTerm,
    ...(results !== undefined && { search_results: results }),
  });
};

// Exception tracking
export const trackException = (description: string, fatal: boolean = false) => {
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description,
      fatal,
    });
  }
};

// User timing (for performance tracking)
export const trackTiming = (
  name: string,
  value: number,
  category?: string
) => {
  logEvent('timing_complete', {
    event_category: category || 'Performance',
    name,
    value: Math.round(value),
  });
};

// Set user properties
export const setUserProperty = (property: string, value: string) => {
  if (window.gtag) {
    window.gtag('set', 'user_properties', {
      [property]: value,
    });
  }
};

// Consent mode (for GDPR compliance)
export const updateConsent = (
  analytics: boolean,
  marketing: boolean
) => {
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
    });
  }
};
