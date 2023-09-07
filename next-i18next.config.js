/** @type {import('next-i18next').UserConfig} */

const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    localePath: path.resolve("./public/locales"),
    localeStructure: "{{lng}}/{{ns}}",
    locales: ["cs", "en"],
    localeDetection: false,
  },
};
