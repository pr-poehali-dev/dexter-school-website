
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h2>
      
      <Card>
        <CardContent className="p-6 flex items-start space-x-4">
          <Mail className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Email:</h3>
            <p className="text-gray-500">info@dexterschool.ru</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6 flex items-start space-x-4">
          <Phone className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Телефон:</h3>
            <p className="text-gray-500">+7 (800) 123-45-67</p>
            <p className="text-gray-500">Пн-Пт с 9:00 до 20:00</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6 flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Адрес офиса:</h3>
            <p className="text-gray-500">г. Москва, ул. Примерная, д. 123, офис 45</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactInfo;
