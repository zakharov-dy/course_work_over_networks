class Reader
   require 'yaml'
   # Чтение конфигурационного файла
   config = YAML::load(open('config/config.yml'))
   if config
      puts 'Конфигурационный файл считан'
   else
      puts 'Ошибка - конфигурационный файл пуст'
   end
end
