import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Все работы', icon: 'Grid3x3' },
    { id: 'hoodies', name: 'Толстовки', icon: 'ShirtIcon' },
    { id: 'tshirts', name: 'Футболки', icon: 'ShirtIcon' },
    { id: 'corporate', name: 'Корпоративная одежда', icon: 'Briefcase' },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Брендированные худи для IT-компании',
      category: 'hoodies',
      image: 'https://cdn.poehali.dev/projects/20eca1ef-fae2-41b1-9a8e-2dcd2669160c/files/1be11ca2-29cd-4c9a-bf0f-e4d4cfceb4dc.jpg',
      description: 'Яркие худи с логотипом компании'
    },
    {
      id: 2,
      title: 'Кастомные футболки для фестиваля',
      category: 'tshirts',
      image: 'https://cdn.poehali.dev/projects/20eca1ef-fae2-41b1-9a8e-2dcd2669160c/files/d2345301-7120-42d8-8b1a-7699e7fc648d.jpg',
      description: 'Яркая печать для музыкального события'
    },
    {
      id: 3,
      title: 'Корпоративная форма для офиса',
      category: 'corporate',
      image: 'https://cdn.poehali.dev/projects/20eca1ef-fae2-41b1-9a8e-2dcd2669160c/files/758af13c-b9a2-45db-b232-b97b22ec731e.jpg',
      description: 'Поло и пиджаки с вышитым логотипом'
    },
    {
      id: 4,
      title: 'Футболки для спортивной команды',
      category: 'tshirts',
      image: 'https://cdn.poehali.dev/projects/20eca1ef-fae2-41b1-9a8e-2dcd2669160c/files/d2345301-7120-42d8-8b1a-7699e7fc648d.jpg',
      description: 'Термотрансфер на спортивной одежде'
    },
    {
      id: 5,
      title: 'Худи для стартапа',
      category: 'hoodies',
      image: 'https://cdn.poehali.dev/projects/20eca1ef-fae2-41b1-9a8e-2dcd2669160c/files/1be11ca2-29cd-4c9a-bf0f-e4d4cfceb4dc.jpg',
      description: 'Минималистичный дизайн с фирменными цветами'
    },
    {
      id: 6,
      title: 'Рабочая форма для ресторана',
      category: 'corporate',
      image: 'https://cdn.poehali.dev/projects/20eca1ef-fae2-41b1-9a8e-2dcd2669160c/files/758af13c-b9a2-45db-b232-b97b22ec731e.jpg',
      description: 'Рубашки поло с логотипом заведения'
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const printingMethods = [
    {
      title: 'Шелкография',
      description: 'Идеальна для больших тиражей. Яркая и долговечная печать.',
      icon: 'Palette',
      features: ['От 50 шт', 'Высокое качество', 'Устойчивость к стирке']
    },
    {
      title: 'Термотрансфер',
      description: 'Подходит для малых тиражей и сложных дизайнов.',
      icon: 'Flame',
      features: ['От 1 шт', 'Фотокачество', 'Быстрое производство']
    },
    {
      title: 'Вышивка',
      description: 'Премиальный вид для корпоративной одежды.',
      icon: 'Star',
      features: ['Любой тираж', 'Объемный эффект', 'Престижный вид']
    },
    {
      title: 'DTF печать',
      description: 'Современная технология для ярких принтов.',
      icon: 'Sparkles',
      features: ['От 1 шт', 'Любые цвета', 'Эластичная печать']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="ShirtIcon" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">LogoWear</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#printing" className="hover:text-primary transition-colors">Технологии</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>

          <Button className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать звонок
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary">Производство с 2010 года</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Рекламная одежда <span className="text-primary">с вашим логотипом</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Создаём брендированную одежду любой сложности. От 1 штуки до 10 000. Доставка по всей России.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Каталог товаров
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Выполненных заказов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24 часа</div>
                  <div className="text-sm text-muted-foreground">Минимальный срок</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия качества</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/20eca1ef-fae2-41b1-9a8e-2dcd2669160c/files/1be11ca2-29cd-4c9a-bf0f-e4d4cfceb4dc.jpg"
                alt="Брендированная одежда"
                className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог товаров</h2>
            <p className="text-xl text-muted-foreground">Выбирайте из широкого ассортимента качественной одежды</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Футболки', count: '150+ моделей', icon: 'ShirtIcon', color: 'bg-blue-500' },
              { name: 'Толстовки', count: '80+ моделей', icon: 'ShirtIcon', color: 'bg-orange-500' },
              { name: 'Поло', count: '60+ моделей', icon: 'ShirtIcon', color: 'bg-green-500' },
              { name: 'Спецодежда', count: '100+ моделей', icon: 'Briefcase', color: 'bg-purple-500' },
              { name: 'Кепки', count: '40+ моделей', icon: 'CircleUser', color: 'bg-red-500' },
              { name: 'Сумки', count: '50+ моделей', icon: 'ShoppingBag', color: 'bg-yellow-600' },
              { name: 'Рюкзаки', count: '30+ моделей', icon: 'Backpack', color: 'bg-indigo-500' },
              { name: 'Аксессуары', count: '200+ товаров', icon: 'Sparkles', color: 'bg-pink-500' }
            ].map((category, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={category.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="printing" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Технологии нанесения</h2>
            <p className="text-xl text-muted-foreground">Используем современное оборудование и проверенные методы</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {printingMethods.map((method, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={method.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-xl text-muted-foreground">Более 5000 выполненных заказов для различных компаний</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8 h-auto">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className="flex items-center gap-2 py-3"
                >
                  <Icon name={category.icon} size={18} />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeFilter} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Card 
                    key={item.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                          <Icon name="ZoomIn" size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Доставка и оплата</h2>
            <p className="text-xl text-muted-foreground">Удобные условия для каждого клиента</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <Icon name="Truck" size={40} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Доставка</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>По Москве — курьером в день заказа</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>По России — СДЭК, Почта России</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>Самовывоз из офиса (м. Тульская)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>Бесплатная доставка от 50 000₽</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Icon name="CreditCard" size={40} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Оплата</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>Наличными при получении</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>Банковской картой онлайн</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>Безналичный расчет для юр. лиц</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>Рассрочка от банков-партнеров</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl mb-8 opacity-90">Ответим на все вопросы и поможем с выбором</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-lg">+7 (925) 510-7707</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-lg">info@logowear.ru</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-lg">Москва, ул. Большая Тульская, 10</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-lg">Пн-Пт: 9:00 - 19:00, Сб-Вс: 10:00 - 16:00</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Комментарий</label>
                  <textarea 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
                    rows={4}
                    placeholder="Расскажите о вашем заказе..."
                  />
                </div>
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="ShirtIcon" size={28} />
            <span className="text-2xl font-bold">LogoWear</span>
          </div>
          <p className="text-white/70">© 2024 LogoWear. Все права защищены.</p>
        </div>
      </footer>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Увеличенное изображение"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;