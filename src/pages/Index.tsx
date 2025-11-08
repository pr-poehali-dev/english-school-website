import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
              E
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EnglishPro
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#courses" className="text-sm font-medium hover:text-primary transition">Курсы</a>
            <a href="#teachers" className="text-sm font-medium hover:text-primary transition">Преподаватели</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition">Цены</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition">Отзывы</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition">Блог</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Записаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground">
                Онлайн-школа английского
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Свободно говорите по-английски через{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  3 месяца
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Интерактивные онлайн-уроки с профессиональными преподавателями. 
                Видеосвязь, игры и практика каждый день.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Video" className="mr-2" size={20} />
                  Первый урок бесплатно
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" className="mr-2" size={20} />
                  Как это работает
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Учеников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">98%</div>
                  <div className="text-sm text-muted-foreground">Успешность</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/ef629935-1e32-4ee2-9d77-e152a6a1f345/files/8bad2905-9c87-40bf-889e-a45c2a977c54.jpg"
                alt="Онлайн-обучение"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary mb-4">Наши программы</Badge>
            <h2 className="text-4xl font-bold mb-4">Курсы для любого уровня</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От начального до продвинутого. Выберите программу под свои цели
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Beginner", level: "A1-A2", icon: "Baby", color: "from-green-500 to-emerald-500", lessons: 48 },
              { title: "Intermediate", level: "B1-B2", icon: "Rocket", color: "from-primary to-secondary", lessons: 64 },
              { title: "Advanced", level: "C1-C2", icon: "Trophy", color: "from-orange-500 to-red-500", lessons: 72 },
              { title: "Business", level: "B2+", icon: "Briefcase", color: "from-blue-500 to-cyan-500", lessons: 56 },
              { title: "Разговорный", level: "B1+", icon: "MessageCircle", color: "from-pink-500 to-rose-500", lessons: 40 },
              { title: "Подготовка к IELTS", level: "B2+", icon: "GraduationCap", color: "from-purple-500 to-indigo-500", lessons: 60 },
            ].map((course, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white group-hover:scale-110 transition`}>
                    <Icon name={course.icon} size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    {course.lessons} уроков • Видео-уроки • Интерактивные задания
                  </p>
                  <Button className="w-full" variant="outline">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/ef629935-1e32-4ee2-9d77-e152a6a1f345/files/f45f5023-bb03-4628-9675-baf812167e86.jpg"
                alt="Интерактивное обучение"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-secondary/10 text-secondary">Технологии обучения</Badge>
              <h2 className="text-4xl font-bold">
                Онлайн-уроки с видеосвязью
              </h2>
              <p className="text-lg text-muted-foreground">
                Современная платформа для эффективного изучения английского языка
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Video", title: "HD видеосвязь", desc: "Качественная связь с преподавателем в реальном времени" },
                  { icon: "Gamepad2", title: "Интерактивные игры", desc: "Учитесь играя – эффективнее и интереснее" },
                  { icon: "FileText", title: "Цифровые материалы", desc: "Все учебники и задания в одном месте" },
                  { icon: "BarChart", title: "Отслеживание прогресса", desc: "Видите свой результат после каждого урока" },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0">
                      <Icon name={feature.icon} size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary mb-4">Команда</Badge>
            <h2 className="text-4xl font-bold mb-4">Профессиональные преподаватели</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Опытные педагоги с международными сертификатами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Анна Смирнова", cert: "CELTA, 8 лет", level: "B1-C2" },
              { name: "Джон Уилсон", cert: "Native, TEFL", level: "A1-C1" },
              { name: "Мария Петрова", cert: "IELTS 8.5", level: "B2-C2" },
              { name: "Дэвид Браун", cert: "Cambridge, 10 лет", level: "A1-B2" },
            ].map((teacher, i) => (
              <Card key={i} className="group hover:shadow-xl transition overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/ef629935-1e32-4ee2-9d77-e152a6a1f345/files/8a683696-1d35-4834-88a6-74b8b629ef1d.jpg"
                      alt={teacher.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-bold">{teacher.name}</h3>
                    <p className="text-sm text-muted-foreground">{teacher.cert}</p>
                    <Badge variant="outline">{teacher.level}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-yellow-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-accent/10 text-accent-foreground mb-4">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный пакет занятий
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Базовый", price: "3 990", lessons: "8 уроков", popular: false },
              { name: "Стандарт", price: "7 490", lessons: "16 уроков", popular: true },
              { name: "Премиум", price: "13 990", lessons: "32 урока", popular: false },
            ].map((plan, i) => (
              <Card key={i} className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">₽</span>
                    </div>
                    <p className="text-muted-foreground">{plan.lessons}</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Персональный преподаватель",
                      "HD видеосвязь",
                      "Все материалы включены",
                      "Гибкое расписание",
                      "Сертификат по окончании"
                    ].map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят наши ученики</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Елена", role: "Менеджер", text: "За 3 месяца начала свободно общаться с коллегами из Лондона. Очень удобный формат онлайн-уроков!" },
              { name: "Алексей", role: "Программист", text: "Отличные преподаватели и интерактивные материалы. Наконец-то разобрался с временами!" },
              { name: "Мария", role: "Студентка", text: "Готовилась к IELTS и сдала на 7.5! Спасибо команде EnglishPro за профессионализм." },
            ].map((review, i) => (
              <Card key={i} className="hover:shadow-lg transition">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Icon key={j} name="Star" size={18} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                        {review.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary mb-4">Блог</Badge>
            <h2 className="text-4xl font-bold mb-4">Полезные материалы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Статьи, советы и лайфхаки для изучения английского
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "10 способов быстро выучить новые слова", category: "Словарный запас", date: "15 мая 2024" },
              { title: "Как преодолеть языковой барьер за месяц", category: "Разговорная практика", date: "10 мая 2024" },
              { title: "Секреты успешной сдачи IELTS", category: "Экзамены", date: "5 мая 2024" },
            ].map((post, i) => (
              <Card key={i} className="group hover:shadow-xl transition cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition">
                      {post.title}
                    </h3>
                    <Button variant="link" className="p-0">
                      Читать далее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-accent/10 text-accent-foreground mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Ответим на все вопросы и поможем выбрать курс
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@englishpro.ru</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <Icon name="MessageCircle" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telegram</div>
                    <div className="text-muted-foreground">@englishpro_school</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border bg-background"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg border bg-background"
                    placeholder="example@mail.ru"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-lg border bg-background min-h-[120px]"
                    placeholder="Ваш вопрос..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                  E
                </div>
                <span className="text-xl font-bold">EnglishPro</span>
              </div>
              <p className="text-sm text-white/70">
                Онлайн-школа английского языка нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">Beginner</a></li>
                <li><a href="#" className="hover:text-white transition">Intermediate</a></li>
                <li><a href="#" className="hover:text-white transition">Advanced</a></li>
                <li><a href="#" className="hover:text-white transition">Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">О нас</a></li>
                <li><a href="#" className="hover:text-white transition">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition">Блог</a></li>
                <li><a href="#" className="hover:text-white transition">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>© 2024 EnglishPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
