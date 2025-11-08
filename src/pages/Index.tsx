import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Languages" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SpeakUp
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">Курсы</a>
            <a href="#teachers" className="text-sm font-medium hover:text-primary transition-colors">Преподаватели</a>
            <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>

          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Записаться
          </Button>
        </div>
      </header>

      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20">
                🎓 Онлайн-обучение
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Английский язык
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> онлайн</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Изучайте английский с профессиональными преподавателями через интерактивные онлайн-уроки. Гибкий график и индивидуальный подход.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Начать обучение
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть видео
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Студентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Преподавателей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/ef629935-1e32-4ee2-9d77-e152a6a1f345/files/a5e5dd73-bdf1-4c8e-99a1-96551d2afe8f.jpg"
                alt="Студенты изучают английский онлайн"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Наши курсы</Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите свой курс</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Программы для любого уровня и целей обучения
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="beginner">Начальный</TabsTrigger>
              <TabsTrigger value="intermediate">Средний</TabsTrigger>
              <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Английский для начинающих',
                    level: 'A1-A2',
                    duration: '3 месяца',
                    lessons: '48 уроков',
                    color: 'from-green-500 to-emerald-500',
                    icon: 'GraduationCap'
                  },
                  {
                    title: 'Разговорный английский',
                    level: 'B1-B2',
                    duration: '4 месяца',
                    lessons: '64 урока',
                    color: 'from-primary to-purple-600',
                    icon: 'MessageCircle'
                  },
                  {
                    title: 'Бизнес английский',
                    level: 'B2-C1',
                    duration: '6 месяцев',
                    lessons: '96 уроков',
                    color: 'from-secondary to-amber-500',
                    icon: 'Briefcase'
                  },
                  {
                    title: 'Подготовка к IELTS',
                    level: 'B1-C1',
                    duration: '3 месяца',
                    lessons: '48 уроков',
                    color: 'from-blue-500 to-cyan-500',
                    icon: 'Award'
                  },
                  {
                    title: 'Английский для путешествий',
                    level: 'A2-B1',
                    duration: '2 месяца',
                    lessons: '32 урока',
                    color: 'from-pink-500 to-rose-500',
                    icon: 'Plane'
                  },
                  {
                    title: 'Технический английский',
                    level: 'B2-C1',
                    duration: '4 месяца',
                    lessons: '64 урока',
                    color: 'from-indigo-500 to-blue-500',
                    icon: 'Code'
                  }
                ].map((course, idx) => (
                  <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4`}>
                        <Icon name={course.icon} size={24} className="text-white" />
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Badge variant="outline">{course.level}</Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="BookOpen" size={16} />
                        <span>{course.lessons}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        Узнать больше
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="teachers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Наша команда</Badge>
            <h2 className="text-4xl font-bold mb-4">Преподаватели</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Опытные педагоги с международными сертификатами
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Анна Смирнова', role: 'CELTA, 12 лет опыта', avatar: 'AS', specialty: 'Бизнес английский' },
              { name: 'Джон Уилсон', role: 'Native speaker, TEFL', avatar: 'JW', specialty: 'Разговорный английский' },
              { name: 'Мария Петрова', role: 'IELTS эксперт', avatar: 'MP', specialty: 'Подготовка к экзаменам' },
              { name: 'Дэвид Браун', role: 'Native speaker, MA', avatar: 'DB', specialty: 'Грамматика' }
            ].map((teacher, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                    <AvatarImage src="https://cdn.poehali.dev/projects/ef629935-1e32-4ee2-9d77-e152a6a1f345/files/f2ce958a-adbe-4517-ba2a-88d30c57c8d7.jpg" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl">
                      {teacher.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg mb-1">{teacher.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{teacher.role}</p>
                  <Badge className="bg-primary/10 text-primary border-primary/20">{teacher.specialty}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите свой план</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Гибкие цены для любого бюджета
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '2990',
                period: 'месяц',
                features: ['8 групповых уроков', 'Доступ к материалам', 'Домашние задания', 'Чат поддержки'],
                highlighted: false
              },
              {
                name: 'Стандарт',
                price: '4990',
                period: 'месяц',
                features: ['8 индивидуальных уроков', 'Все материалы', 'Проверка домашних заданий', 'Приоритетная поддержка', 'Сертификат'],
                highlighted: true
              },
              {
                name: 'Премиум',
                price: '7990',
                period: 'месяц',
                features: ['12 индивидуальных уроков', 'Все материалы', 'Личный куратор', 'Разговорные клубы', 'Сертификат', 'Подготовка к экзаменам'],
                highlighted: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.highlighted ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground"> ₽/{plan.period}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''}`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят наши студенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Елена Иванова',
                role: 'Менеджер проектов',
                text: 'Прошла курс бизнес английского. Преподаватели профессиональные, материалы актуальные. Через 6 месяцев смогла вести переговоры с зарубежными партнерами!',
                rating: 5
              },
              {
                name: 'Алексей Козлов',
                role: 'Программист',
                text: 'Онлайн формат очень удобный - занимаюсь из дома. Интерактивная платформа с видеосвязью работает отлично. Рекомендую всем!',
                rating: 5
              },
              {
                name: 'Ольга Васильева',
                role: 'Студентка',
                text: 'Готовилась к IELTS с преподавателем Марией. Сдала на 7.5 баллов! Спасибо за качественную подготовку и поддержку.',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                        {review.name.split(' ').map(n => n[0]).join('')}
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

      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Блог</Badge>
            <h2 className="text-4xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Советы и материалы для изучения английского
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '10 способов улучшить разговорный английский',
                date: '15 января 2025',
                category: 'Советы',
                image: 'https://cdn.poehali.dev/projects/ef629935-1e32-4ee2-9d77-e152a6a1f345/files/d0e3d868-be43-463a-9881-f7c8f39534fe.jpg'
              },
              {
                title: 'Как подготовиться к IELTS за 3 месяца',
                date: '12 января 2025',
                category: 'Экзамены',
                image: 'https://cdn.poehali.dev/projects/ef629935-1e32-4ee2-9d77-e152a6a1f345/files/d0e3d868-be43-463a-9881-f7c8f39534fe.jpg'
              },
              {
                title: 'Лучшие приложения для изучения английского',
                date: '10 января 2025',
                category: 'Технологии',
                image: 'https://cdn.poehali.dev/projects/ef629935-1e32-4ee2-9d77-e152a6a1f345/files/d0e3d868-be43-463a-9881-f7c8f39534fe.jpg'
              }
            ].map((post, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                <div className="overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Контакты</Badge>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Готовы начать обучение? Оставьте заявку, и мы свяжемся с вами в течение 15 минут.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@speakup.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">Москва, ул. Тверская, 1</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Send" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Записаться на бесплатный урок</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <input 
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input 
                    type="email"
                    placeholder="ivan@example.com"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Уровень английского</label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Выберите уровень</option>
                    <option>Начальный (A1-A2)</option>
                    <option>Средний (B1-B2)</option>
                    <option>Продвинутый (C1-C2)</option>
                  </select>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Отправить заявку
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Languages" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold">SpeakUp</span>
              </div>
              <p className="text-background/70">
                Онлайн-школа английского языка с индивидуальным подходом к каждому студенту.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Курсы</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background">Для начинающих</a></li>
                <li><a href="#" className="hover:text-background">Разговорный</a></li>
                <li><a href="#" className="hover:text-background">Бизнес</a></li>
                <li><a href="#" className="hover:text-background">Подготовка к экзаменам</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background">О нас</a></li>
                <li><a href="#" className="hover:text-background">Преподаватели</a></li>
                <li><a href="#" className="hover:text-background">Отзывы</a></li>
                <li><a href="#" className="hover:text-background">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@speakup.ru</li>
                <li>Москва, ул. Тверская, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2025 SpeakUp. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
