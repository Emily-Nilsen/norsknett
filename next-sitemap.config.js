/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://norsknett.no',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
