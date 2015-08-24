class Sockets
   def self.start_tcp_server
      require 'socket'
      server = TCPServer.new 2000

      loop do
        client = server.accept
        client.puts "Hello !"
        client.puts "Time is #{Time.now}"
        client.close
      end
   end

   def self.init
      puts '1 - start udp server'
      puts '2 - start tcp server'
      puts '3 - start http server'
      server_type = gets.chomp

      case server_type
         when '1'
            puts 'start udp server'
         when '2'
            puts 'start tcp server'
            Sockets.start_tcp_server
         when '3'
            puts 'start http server'
         else
            puts 'writing correct number, please'
            init
      end
   end
   init
end

