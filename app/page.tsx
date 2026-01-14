"use client"

import { useState } from "react"
import {
  ArrowRight,
  Sparkles,
  Gift,
  TrendingUp,
  Users,
  Lightbulb,
  Search,
  BarChart3,
  Download,
  Flame,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [selectedAge, setSelectedAge] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const trendsByAge: Record<
    number,
    Array<{
      name: string
      hypeLevel: number
      description: string
      parentialInsight: string
      platforms: string[]
      image: string
    }>
  > = {
    6: [
      {
        name: "Блюї - Товари та Меркендайз",
        hypeLevel: 95,
        description: "Мультфільм про пригоди з собакою",
        parentialInsight:
          "Це номер 1 шоу для дітей до 10 років. Якісний контент + колекційні іграшки = перемога для батьків.",
        platforms: ["YouTube", "Disney+"],
        image: "/bluey-character-toys.jpg",
      },
      {
        name: "LEGO Набори для Будівництва",
        hypeLevel: 88,
        description: "Творчі конструктивні ігри",
        parentialInsight: "Навчання STEM-фокусоване, яке розвиває навички вирішення проблем. Інвестиція в їх розум.",
        platforms: ["TikTok", "YouTube"],
        image: "/colorful-lego-sets.jpg",
      },
      {
        name: "Колекції Динозаврів",
        hypeLevel: 82,
        description: "Захоплення доісторичними створіннями",
        parentialInsight: "Освітня цікавість до палеонтології. T-Rex популярний серед цієї вікової групи.",
        platforms: ["Instagram", "YouTube"],
        image: "/dinosaur-toys-collection.jpg",
      },
    ],
    10: [
      {
        name: "Minecraft Конструкторські Набори",
        hypeLevel: 92,
        description: "Творча гра будівництва",
        parentialInsight: "Віртуальна гра перекладена на фізичні іграшки. Фанати ігор хочуть мерч.",
        platforms: ["TikTok", "YouTube"],
        image: "/minecraft-lego-kits.jpg",
      },
      {
        name: "Колекційні Карти (Покемон)",
        hypeLevel: 89,
        description: "Карткові ігри колекційного типу",
        parentialInsight:
          "Сучасна культура колекціонування. Соціальна валюта серед однолітків. Ціни сильно варіюються.",
        platforms: ["Instagram", "TikTok"],
        image: "/pokemon-trading-cards.jpg",
      },
      {
        name: "Комплекти Наукових Експериментів",
        hypeLevel: 85,
        description: "STEM навчальні діяльності",
        parentialInsight: "Комбо навчання та гри. Популярні серед дітей з 'розумною' ідентичністю в цьому віці.",
        platforms: ["YouTube", "Instagram"],
        image: "/science-experiment-kit.jpg",
      },
    ],
    12: [
      {
        name: "TikTok Танцювальні Тренди",
        hypeLevel: 94,
        description: "Вірусні танці та звукові тренди",
        parentialInsight:
          "Формування соціальної ідентичності. Тренди танців змінюються щотижня. Створення відео - їх мова.",
        platforms: ["TikTok", "Instagram"],
        image: "/teen-dance-move-video.jpg",
      },
      {
        name: "Мерч Стрімерів-Геймерів",
        hypeLevel: 91,
        description: "Twitch та YouTube Геймінг",
        parentialInsight: "Паразоціальні відносини з творцями контенту. Носіння мерчу = соціальний статус.",
        platforms: ["Twitch", "YouTube"],
        image: "/gaming-streamer-merchandise.jpg",
      },
      {
        name: "K-Pop та Музичні Фандоми",
        hypeLevel: 87,
        description: "Аніме та музичні спільноти",
        parentialInsight: "Глобальні фан-спільноти. Глибока пристрасть до улюблених груп/артистів.",
        platforms: ["TikTok", "Instagram"],
        image: "/kpop-band-merchandise.jpg",
      },
    ],
    14: [
      {
        name: "Коке́т Естетика Моди",
        hypeLevel: 90,
        description: "Y2K відродження моди",
        parentialInsight: "Це вірусний символ соціального статусу. Гофровані, милі, ностальгічні. Віби Паріс Гілтон.",
        platforms: ["TikTok", "Instagram"],
        image: "/coquette-style-pink-fashion.jpg",
      },
      {
        name: "Культура Балів Аури",
        hypeLevel: 93,
        description: "Культура особистого стилю",
        parentialInsight: "Невидима соціальна валюта, що вимірює 'крутість'. Висока аура = високий статус.",
        platforms: ["TikTok", "Instagram"],
        image: "/cool-aesthetic-lifestyle.jpg",
      },
      {
        name: "Бренди Сталої Моди",
        hypeLevel: 84,
        description: "Екологічно свідомий одяг",
        parentialInsight: "Gen-Z піклується про планету. Перекупівля + етичні бренди - це соціальний доказ.",
        platforms: ["Instagram", "TikTok"],
        image: "/sustainable-eco-fashion.jpg",
      },
    ],
  }

  const currentTrends = selectedAge ? trendsByAge[selectedAge] : []
  const ages = [6, 10, 12, 14]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation - Minimalist with Neon CTA */}
      <nav className="sticky top-0 z-50 glass border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-glow-primary transition-smooth hover:scale-110">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              TrendyKid
            </span>
          </div>
          <button className="px-6 py-2.5 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold rounded-lg transition-smooth shadow-lg neon-glow-accent hover:shadow-xl">
            Завантажити Додаток
          </button>
        </div>
      </nav>

      {/* Hero Section - With Search Bar */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="flex flex-col gap-12 items-center text-center">
            <div className="flex flex-col gap-8 max-w-3xl">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 w-fit glass px-4 py-2 rounded-full mx-auto">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Оновлюється кожні 48 годин</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
                  Припиніть гадати.{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Почніть дарувати.
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                  Найкращий перекладач трендів підлітків на спокій батьків.
                </p>
              </div>

              <div className="relative w-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl group-focus-within:blur-2xl transition-smooth opacity-0 group-focus-within:opacity-100" />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary z-10" />
                <input
                  type="text"
                  placeholder="Про що говорить мій син/дочка? (напр., Skibidi, Coquette, Aura балів)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="relative w-full pl-12 pr-4 py-4 glass rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Selector Section */}
      <section className="relative py-12 glass-secondary border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Виберіть вік вашого підлітка</h2>
              <p className="text-muted-foreground">Дивіться тренди, адаптовані для їх вікової групи</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {ages.map((age) => (
                <button
                  key={age}
                  onClick={() => setSelectedAge(age)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-smooth ${
                    selectedAge === age
                      ? "glass-primary neon-glow-primary text-white"
                      : "glass text-foreground hover:glass-primary hover:text-white"
                  }`}
                >
                  {age === 14 ? "14+" : age}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trend Cards Grid - Responsive and Glassmorphic */}
      {selectedAge && (
        <section className="relative py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Що тренду для {selectedAge === 14 ? "віку 14+" : `віку ${selectedAge}`}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {currentTrends.map((trend, index) => (
                <div
                  key={index}
                  className="glass group rounded-2xl overflow-hidden hover:glass-primary transition-smooth flex flex-col"
                >
                  {/* Trend Image with Overlay */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden group-hover:from-primary/30 group-hover:to-secondary/30 transition-smooth">
                    <img
                      src={trend.image || "/placeholder.svg"}
                      alt={trend.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                    />
                    <div className="absolute top-3 right-3 glass-primary px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 neon-glow-accent">
                      <Flame className="w-3 h-3" />
                      Гаряче
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Trend Name */}
                    <h3 className="text-xl font-bold leading-tight text-white">{trend.name}</h3>

                    {/* Parental Insight */}
                    <div className="glass-secondary rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground">
                        <span className="text-secondary font-bold">Переклад для батьків:</span> {trend.parentialInsight}
                      </p>
                    </div>

                    {/* Hype Meter Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-muted-foreground">Метр Популярності</span>
                        <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {trend.hypeLevel}%
                        </span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 neon-glow-primary"
                          style={{ width: `${trend.hypeLevel}%` }}
                        />
                      </div>
                    </div>

                    {/* Social Proof Icons */}
                    <div className="flex items-center gap-2 pt-2 flex-wrap">
                      <span className="text-xs text-muted-foreground font-medium">Тренду на:</span>
                      <div className="flex gap-2 flex-wrap">
                        {trend.platforms.map((platform) => (
                          <div
                            key={platform}
                            className="flex items-center gap-1 glass-secondary px-2.5 py-1 rounded-md text-xs"
                          >
                            {platform === "TikTok" && <span>🎵</span>}
                            {platform === "Instagram" && <span>📷</span>}
                            {platform === "YouTube" && <span>▶</span>}
                            {platform === "Twitch" && <span>👾</span>}
                            {platform === "Discord" && <span>💬</span>}
                            {platform === "Disney+" && <span>🎬</span>}
                            <span>{platform}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Find It Now Button */}
                    <Button className="w-full mt-4 gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 neon-glow-primary transition-smooth">
                      Знайти зараз <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Problem/Solution Section */}
      <section className="relative py-24 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Плутанина батьків закінчується тут</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Ваш підліток говорить мовою трендів та мемів. Ми перекладаємо.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pain Point 1 */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <span className="text-xl">❓</span>
              </div>
              <h3 className="font-bold text-lg">Гра вгадування</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "TikTok ще актуальний?" Ви постійно в замішанні про те, що насправді хоче ваш підліток.
              </p>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-xl">💸</span>
              </div>
              <h3 className="font-bold text-lg">Марна витрата грошей</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Подарунки, які не влучають в мету. Та "крута" техніка, яку вони ніколи не використовують. Або гірше,
                закотування очей.
              </p>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-xl">🔍</span>
              </div>
              <h3 className="font-bold text-lg">Втрачена зв'язок</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ви не говорите їх мовою. Розчарування зростає. Розмови згасають.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-primary/5 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Чому батьків люблять TrendyKid Navigator</h2>
              <p className="text-lg text-muted-foreground text-balance">Все що вам потрібно. Нічого більше.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Більш жодних дивних подарунків</h3>
                <p className="text-sm text-muted-foreground">
                  Дані на основі доказів означають, що ваш подарунок завжди влучає в мету.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">100% Точність Трендів</h3>
                <p className="text-sm text-muted-foreground">
                  Реальні дані з TikTok, Instagram, YouTube та інших. Оновлюється постійно.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Економія годин дослідження</h3>
                <p className="text-sm text-muted-foreground">
                  Не потрібно прокручувати TikTok або запитувати у підлітка. Ми все робимо за вас.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Як це працює</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 - Large */}
            <div className="md:col-span-2 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl p-12 flex flex-col justify-between">
              <div className="space-y-4 mb-8">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Центр Розуміння Трендів</h3>
                <p className="text-muted-foreground text-balance leading-relaxed">
                  Відстеження в режимі реального часу того, що насправді тренду в Gen-Z. Від вірусних звуків TikTok до
                  ігрових явищ до рухів сталої моди.
                </p>
              </div>
              <Button className="w-fit">Дослідити Всі Тренди</Button>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg">Розумне Підбирання Подарунків</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Отримуйте персоналізовані пропозиції подарунків на основі інтересів вашого підлітка та найновіших
                  трендів.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Посібник з Перекладу для Батьків</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Простих поясненнь чому підлітків люблять те, що вони люблять (без жаргону підлітків).
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg">Спільнота Батьків</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Спілкуйтеся з іншими батьками, які навігують культурою Gen-Z. Поділіться перемогами, задавайте
                  питання.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-16 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2">ДОВІРЯЮТЬСЯ БАТЬКАМИ</p>
            <h3 className="text-lg font-bold text-pretty">
              Приєднуйтесь до тисяч батьків, які тепер дарують з впевненістю
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <p className="text-3xl font-bold">4.9/5</p>
              <p className="text-xs text-muted-foreground">З 2,340+ Відгуків</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold">98%</p>
              <p className="text-xs text-muted-foreground">Кажуть, Дітям Сподобались Подарунки</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold">$2.8K</p>
              <p className="text-xs text-muted-foreground">Середня Економія на Неправильних Подарунках</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Готові говорити їх мовою?</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
                Почніть розшифровувати тренди та знаходити ідеальні подарунки. Без гадання. Без марної витрати грошей.
                Просто розумніше батьківство.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Почати Безплатний Пробний Період <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Дивитись Демо
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Кредитна карта не потрібна. Повний доступ до 500+ трендів. 14-денний безплатний пробний період.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold">TrendyKid Navigator</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Роблять батьків впевненими дарувальниками з 2024 року.
              </p>
              {/* App Store Badges */}
              <div className="flex flex-col gap-2 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-3 py-2 rounded-lg hover:opacity-90 transition text-xs font-semibold"
                >
                  <Download className="w-4 h-4" />
                  App Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-3 py-2 rounded-lg hover:opacity-90 transition text-xs font-semibold"
                >
                  <Download className="w-4 h-4" />
                  Google Play
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-sm">Продукт</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Тренди
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Ідеї подарунків
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Ціноутворення
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-sm">Компанія</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Про нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Контакти
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-sm">Юридично</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Приватність
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Умови
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 TrendyKid Navigator. Всі права захищені.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition">
                Instagram
              </a>
              <a href="#" className="hover:text-foreground transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
