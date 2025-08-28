import { Section as SectionType } from "@/types/blocks/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Careers({ section }: { section: SectionType }) {
  if (section.disabled) {
    return null;
  }

  return (
    <section id={section.name} className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        {/* 页面标题和描述 */}
        <div className="mx-auto flex max-w-[--breakpoint-lg] flex-col items-center gap-2 text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
            {section.title}
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
            {section.description}
          </p>
        </div>

        {/* 职位列表 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {section.items?.map((item, i) => (
            <Card 
              key={i} 
              className="group transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white dark:bg-gray-800 border-0 shadow-md"
            >
              <CardHeader className="pb-4">
                {item.icon && (
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl" role="img" aria-label={item.title}>
                        {item.icon}
                      </span>
                    </div>
                  </div>
                )}
                <CardTitle className="group-hover:text-blue-600 transition-colors text-xl">
                  {item.title}
                </CardTitle>
                {item.label && (
                  <Badge variant="secondary" className="w-fit">
                    {item.label}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {item.description}
                </CardDescription>
                <Link href={item.url || "/contact"}>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
                  >
                    申请职位
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 公司文化和价值观 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">为什么选择我们？</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  远程友好的工作环境
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  有竞争力的薪资和福利
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  学习和成长的机会
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  创新驱动的企业文化
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  参与塑造未来的数字产品
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">准备加入我们了吗？</h4>
              <p className="text-muted-foreground mb-6">
                即使您没有看到合适的职位，我们也很乐意了解您。发送您的简历，我们会在有合适机会时与您联系。
              </p>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium px-8"
                >
                  发送简历
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}