import { Section as SectionType } from "@/types/blocks/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Docs({ section }: { section: SectionType }) {
  if (section.disabled) {
    return null;
  }

  return (
    <section id={section.name} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        {/* 页面标题和描述 */}
        <div className="mx-auto flex max-w-[--breakpoint-md] flex-col items-center gap-2 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {section.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {section.description}
          </p>
        </div>

        {/* 文档导航卡片网格 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {section.items?.map((item, i) => (
            <Card 
              key={i} 
              className="group transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              <Link href={item.url || "#"} className="block h-full">
                <CardHeader className="pb-4">
                  {item.icon && (
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl" role="img" aria-label={item.title}>
                        {item.icon}
                      </span>
                    </div>
                  )}
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* 底部帮助信息 */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-xl font-semibold mb-4">需要帮助？</h3>
            <p className="text-muted-foreground mb-6">
              如果您在使用过程中遇到问题，或者需要更多技术支持，请随时联系我们。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                联系技术支持
              </Link>
              <Link 
                href="/community" 
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                加入社区讨论
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}