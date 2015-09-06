require 'yaml'
require 'socket'

class Server
   PATH = 'config/config.yml'

   def initialize
      @port, @ip = read_file
      self.valid? ? start : puts('неверно указан порт')
   end

   def start
      server = TCPServer.new @port
      loop do
         client = server.accept
         client.puts "Hello !"
         client.puts "Time is #{Time.now}"
         client.close
      end
   end

   def valid?
      # Тернарная
      (1024 < @port && @port < 49151) ? true : false
   end

   private
   def read_file
      config = YAML::load(open(PATH))
      [config['port'], config['ip']]
   end

end



