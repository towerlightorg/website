/** @typedef {import('@docusaurus/types').DocusaurusConfig} DocusaurusConfig */

/** @type {DocusaurusConfig} */
module.exports = {
  title: 'TowerLight',
  tagline: '为程序员设计的交流软件',
  url: 'https://www.towerlight.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'towerlightorg', // Usually your GitHub org/user name.
  projectName: 'towerlight', // Usually your repo name.
  plugins: ['docusaurus-plugin-auto-sidebars'],
  themeConfig: {
    navbar: {
      title: 'TowerLight',
      logo: {
        alt: 'TowerLight Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        { to: 'blog/', label: '博客', position: 'left' },
        {
          href: 'https://github.com/towerlightorg/towerlight',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '开始',
              to: 'docs/',
            },
          ],
        },
        {
          title: '博客',
          items: [
            {
              label: '所有标签',
              to: 'blog/tags',
            },
          ],
        },
        {
          title: '其他',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/towerlightorg/towerlight',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TowerLight. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.auto.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/towerlightorg/towerlight/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/towerlightorg/towerlight/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
