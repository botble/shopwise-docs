import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/shopwise/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/shopwise/releases' },
      { text: 'Upgrade Guide', link: '/shopwise/upgrade' },
    ],
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/shopwise/installation' },
      { text: 'SSL', link: '/shopwise/ssl' },
      { text: 'License', link: '/shopwise/license' },
    ],
  },
  {
    text: 'Available plugins',
    items: [
      { text: 'Backup', link: '/shopwise/plugin-backup' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Rename theme', link: '/shopwise/theme-rename' },
      { text: 'Custom CSS/JS', link: '/shopwise/usage-custom-css-js' },
      { text: 'Translation', link: '/shopwise/usage-translation' },
      { text: 'Multi-language', link: '/shopwise/usage-multi-language' },
      { text: 'Location', link: '/shopwise/usage-location' },
      { text: 'Google Analytics', link: '/shopwise/usage-analytics' },
      { text: 'Media - Setup Amazon S3', link: '/shopwise/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/shopwise/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/shopwise/usage-media-wasabi' },
      { text: 'Setup email', link: '/shopwise/usage-email' },
      { text: 'Backup', link: '/shopwise/plugin-backup' },

      { text: 'Currencies', link: '/shopwise/usage-currencies' },
      { text: 'Setup social login', link: '/shopwise/usage-social-login' },
      { text: 'Location', link: '/shopwise/usage-location' },
      { text: 'Invoice template', link: '/shopwise/invoice-template' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[];
