import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, MapPin, Users, Zap, Shield, Star, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            ثورة في تجارة الخردة في الأردن
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">أسعار عادلة، منافسة عادلة</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            اربط البائعين والمشترين من خلال منصة المزاد الإلكترونية. لا مزيد من انتظار مشتري الشوارع أو قبول العروض
            المنخفضة. احصل على عروض تنافسية لمواد الخردة الخاصة بك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/seller/dashboard">
              <Button size="lg" className="text-lg px-8">
                ابدأ البيع الآن
              </Button>
            </Link>
            <Link href="/buyer/explore">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                تصفح مواد الخردة
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 border-b">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold mb-2">الوصول السريع</h2>
            <p className="text-muted-foreground">انتقل مباشرة إلى لوحة التحكم الخاصة بك</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/seller/dashboard">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">لوحة تحكم البائع</h3>
                  <p className="text-sm text-muted-foreground">إدارة قوائمك، مراقبة العروض، وتتبع المبيعات</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/buyer/dashboard">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-secondary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">لوحة تحكم المشتري</h3>
                  <p className="text-sm text-muted-foreground">تتبع عروضك، استكشف القوائم، وإدارة الفوز</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">مشكلة تجارة الخردة التقليدية</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              النظام الحالي يخلق تحديات لكل من البائعين والمشترين في سوق الخردة الأردني.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-destructive/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">للبائعين</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong>عروض منخفضة:</strong> قبول أسعار ضعيفة بسبب الإلحاح ونقص خيارات المقارنة
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong>إضاعة الوقت:</strong> انتظار غير متوقع لمرور المشترين في الشارع
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-warning/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-warning" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">للمشترين</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong>توفر غير مؤكد:</strong> التجول في الشوارع لساعات دون العثور على بائعين
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0" />
                    <span>
                      <strong>فرص ضائعة:</strong> المرور بالشوارع قبل أن يقرر البائعون البيع
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">كيف تعمل منصتنا</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              عملية بسيطة من ثلاث خطوات تخلق منافسة عادلة ونتائج أفضل للجميع.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">البائع ينشر القائمة</h3>
              <p className="text-muted-foreground">
                رفع الصور، إضافة الوصف، تحديد العرض الأولي ومدة المزاد. يستغرق دقائق فقط لإدراج مواد الخردة الخاصة بك.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">المشترون يضعون العروض</h3>
              <p className="text-muted-foreground">
                مشتري الخردة يتصفحون حسب الموقع ويضعون عروض تنافسية. التحديثات الفورية تبقي الجميع على اطلاع.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">انتهاء المزاد</h3>
              <p className="text-muted-foreground">
                أعلى مزايد يفوز. كلا الطرفين يرتبان الاستلام والدفع من خلال منصتنا الآمنة.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">فوائد للجميع</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              منصتنا تخلق قيمة لكل من البائعين والمشترين من خلال المنافسة العادلة والشفافية.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">للبائعين</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>أسعار أفضل:</strong> عدة مشترين يتنافسون يزيد من سعر البيع النهائي
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>الراحة:</strong> انشر في دقائق، لا انتظار لمرور المشترين
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>الشفافية:</strong> شاهد جميع العروض في الوقت الفعلي مع رؤية كاملة
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">للمشترين</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>الكفاءة:</strong> استهداف عناصر محددة دون التجول بلا هدف
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>منافسة عادلة:</strong> فرصة متساوية للمزايدة بغض النظر عن الموقع
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>توفير الوقود:</strong> خطط الطرق لجمع عدة عناصر في رحلة واحدة
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">ميزات المنصة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              كل ما تحتاجه لتجارة خردة آمنة وفعالة ومربحة.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "ملفات المستخدمين",
                desc: "ملفات منفصلة للبائعين والمشترين مع التحقق",
              },
              {
                icon: MapPin,
                title: "تصفية الموقع",
                desc: "العثور على الخردة القريبة بسهولة مع البحث القائم على الموقع",
              },
              { icon: Zap, title: "المزايدة المباشرة", desc: "تحديثات فورية على العروض وحالة المزاد" },
              { icon: Shield, title: "معاملات آمنة", desc: "معالجة دفع آمنة وحل النزاعات" },
              { icon: Star, title: "نظام التقييم", desc: "بناء الثقة من خلال التعليقات بعد كل معاملة" },
              { icon: Clock, title: "إشعارات ذكية", desc: "تنبيهات لتحديثات العروض والنهايات والتأكيدات" },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">مستعد للبدء؟</h2>
          <p className="text-lg text-muted-foreground mb-8">انضم إلى منصتنا واختبر مستقبل تجارة الخردة في الأردن.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="text-lg px-8">
                إنشاء حساب جديد
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                تسجيل الدخول
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">مزاد الخردة الأردن</h3>
          <p className="text-muted-foreground mb-6">جعل تجارة الخردة عادلة وفعالة ومربحة للجميع.</p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 مزاد الخردة الأردن</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">شروط الخدمة</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">سياسة الخصوصية</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
