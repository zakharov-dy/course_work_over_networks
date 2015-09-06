require 'socket'

s = TCPSocket.new 'localhost', 3719

while line = s.gets
  puts line
end
s.close