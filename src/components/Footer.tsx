
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Dexter</span>
              <span className="text-2xl font-light ml-1">School</span>
            </div>
            <p className="text-gray-500 text-sm">
              Онлайн школа математики для школьников и студентов. Поможем полюбить 
              математику и добиться высоких результатов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Навигация
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-primary">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-500 hover:text-primary">
                  Курсы
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 hover:text-primary">
                  О школе
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-primary">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Курсы
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-primary">
                  Для начальной школы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-primary">
                  Для средней школы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-primary">
                  Подготовка к ОГЭ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-primary">
                  Подготовка к ЕГЭ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-primary">
                  Высшая математика
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Контакты
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-500">
                Email: info@dexterschool.ru
              </li>
              <li className="text-gray-500">
                Телефон: +7 (800) 123-45-67
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dexter School. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-primary">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-primary">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
