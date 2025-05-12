import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  phone: z.string().min(10, { message: "Укажите корректный номер телефона" }),
  email: z.string().email({ message: "Укажите корректный email" }).optional().or(z.literal("")),
  message: z.string().min(10, { message: "Сообщение должно содержать минимум 10 символов" }),
});

type FormValues = z.infer<typeof formSchema>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function ContactForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, попробуйте позже или свяжитесь с нами по телефону",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Format the number
    let formattedValue = '';
    if (digits.length > 0) {
      // Add the country code if it doesn't exist
      const phoneDigits = digits.startsWith('7') ? digits : `7${digits}`;
      
      formattedValue = `+${phoneDigits.substring(0, 1)}`;
      
      if (phoneDigits.length > 1) {
        formattedValue += ` (${phoneDigits.substring(1, 4)}`;
      }
      
      if (phoneDigits.length > 4) {
        formattedValue += `) ${phoneDigits.substring(4, 7)}`;
      }
      
      if (phoneDigits.length > 7) {
        formattedValue += `-${phoneDigits.substring(7, 9)}`;
      }
      
      if (phoneDigits.length > 9) {
        formattedValue += `-${phoneDigits.substring(9, 11)}`;
      }
    }
    
    return formattedValue;
  };

  return (
    <section id="contacts" className="py-20 bg-gradient-to-b from-charcoal to-navy relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gold section-heading inline-block mx-auto">
            Контакты
          </h2>
          <p className="font-cormorant text-xl text-off-white/80 mt-6 max-w-3xl mx-auto">
            Свяжитесь с нами для получения консультации или оформления заказа
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-navy/40 border border-gold/20 rounded-sm p-8">
              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <h3 className="font-playfair text-2xl text-gold mb-4">Наш адрес</h3>
                  <p className="text-off-white/90">
                    108826, г. Москва, п. Коммунарка, ул. Потаповская роща, д. 5, к. 2, пом. 73П
                  </p>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <h3 className="font-playfair text-2xl text-gold mb-4">Телефон</h3>
                  <a href="tel:+79120253330" className="text-off-white/90 hover:text-gold transition-colors text-xl">
                    +7-912-025-33-30
                  </a>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <h3 className="font-playfair text-2xl text-gold mb-4">Email</h3>
                  <a href="mailto:stroidny@yandex.ru" className="text-off-white/90 hover:text-gold transition-colors">
                    stroidny@yandex.ru
                  </a>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <h3 className="font-playfair text-2xl text-gold mb-4">Режим работы</h3>
                  <p className="text-off-white/90">
                    Пн-Пт: 9:00 - 18:00<br />
                    Сб: 10:00 - 16:00<br />
                    Вс: выходной
                  </p>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <h3 className="font-playfair text-2xl text-gold mb-4">Реквизиты</h3>
                  <div className="text-off-white/90 text-sm">
                    <p>ООО "СТРОИТЕЛЬНАЯ ИНДУСТРИЯ"</p>
                    <p>ИНН/КПП: 7751210570/775101001</p>
                    <p>ОГРН: 1237700118975</p>
                    <p>Расчетный счёт: 40702810938000124330</p>
                    <p>Банк: ПАО СБЕРБАНК</p>
                    <p>БИК: 044525225</p>
                    <p>Кор. счёт: 30101810400000000225</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-navy/40 border border-gold/20 rounded-sm p-8">
              <h3 className="font-playfair text-2xl text-gold mb-6 text-center">Связаться с нами</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-off-white">Имя *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Введите ваше имя"
                              className="form-input w-full bg-navy/60 text-off-white border border-gold/30 rounded-sm px-4 py-6 focus:outline-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-off-white">Телефон *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="+7 (___) ___-__-__"
                              className="form-input w-full bg-navy/60 text-off-white border border-gold/30 rounded-sm px-4 py-6 focus:outline-none"
                              onChange={(e) => {
                                const formatted = formatPhoneNumber(e.target.value);
                                field.onChange(formatted);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-off-white">Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="Введите ваш email"
                              className="form-input w-full bg-navy/60 text-off-white border border-gold/30 rounded-sm px-4 py-6 focus:outline-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-off-white">Сообщение *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Опишите ваш запрос..."
                              rows={5}
                              className="form-input w-full bg-navy/60 text-off-white border border-gold/30 rounded-sm px-4 py-3 focus:outline-none resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="gold-button w-full bg-gold text-navy hover:bg-light-gold font-medium px-8 py-6 rounded-sm text-base"
                    >
                      {submitting ? "ОТПРАВКА..." : "ОТПРАВИТЬ"}
                    </Button>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-off-white/60 text-sm text-center">
                    Отправляя форму, вы соглашаетесь с политикой конфиденциальности.
                  </motion.div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
