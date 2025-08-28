import { LandingPage, PricingPage, ShowcasePage, DocsPage, ProductsPage, CareersPage } from "@/types/pages/landing";

export async function getLandingPage(locale: string): Promise<LandingPage> {
  return (await getPage("landing", locale)) as LandingPage;
}

export async function getPricingPage(locale: string): Promise<PricingPage> {
  return (await getPage("pricing", locale)) as PricingPage;
}

export async function getShowcasePage(locale: string): Promise<ShowcasePage> {
  return (await getPage("showcase", locale)) as ShowcasePage;
}

export async function getDocsPage(locale: string): Promise<DocsPage> {
  return (await getPage("docs", locale)) as DocsPage;
}

export async function getProductsPage(locale: string): Promise<ProductsPage> {
  return (await getPage("products", locale)) as ProductsPage;
}

export async function getCareersPage(locale: string): Promise<CareersPage> {
  return (await getPage("careers", locale)) as CareersPage;
}

export async function getPage(
  name: string,
  locale: string
): Promise<LandingPage | PricingPage | ShowcasePage | DocsPage | ProductsPage | CareersPage> {
  try {
    if (locale === "zh-CN") {
      locale = "zh";
    }

    return await import(
      `@/i18n/pages/${name}/${locale.toLowerCase()}.json`
    ).then((module) => module.default);
  } catch (error) {
    console.warn(`Failed to load ${locale}.json, falling back to en.json`);

    return await import(`@/i18n/pages/${name}/en.json`).then(
      (module) => module.default
    );
  }
}
