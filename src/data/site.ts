export const site = {
  name: 'Litenly',
  fullName: 'Litenly: Photo Compressor',
  tagline: 'Lighter files. Simpler life.',
  description:
    'Litenly is an iPhone app that compresses photos and PDFs on your device. Set a maximum file size, compare the result, and decide what happens to your original.',
  bundleId: 'com.qbatch.litenly',
  platform: 'iPhone, iOS 17 or later',
  /** Paste the App Store URL here once the listing exists. Download buttons appear automatically. */
  appStoreUrl: '',
};

/** Prefixes a root path with the deploy base, for hosts that serve the site from a subfolder. */
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

export const navLinks = [
  { href: withBase('/'), label: 'Home' },
  { href: withBase('/support'), label: 'Support' },
  { href: withBase('/privacy-policy'), label: 'Privacy Policy' },
];
