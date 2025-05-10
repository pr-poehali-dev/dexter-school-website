
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Отправьте нам сообщение</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Ваше имя</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Введите ваше имя" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="your@email.com" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Телефон</Label>
          <Input 
            id="phone" 
            name="phone" 
            placeholder="+7 (___) ___-__-__" 
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <Label htmlFor="message">Сообщение</Label>
          <Textarea 
            id="message" 
            name="message" 
            placeholder="Напишите ваш вопрос или пожелание" 
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required 
          />
        </div>
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить сообщение"}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
