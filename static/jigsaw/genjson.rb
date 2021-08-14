
fp  = File.open("placeholder.json")


x_y = ARGV[0].to_s
if x_y == ""
	puts "need arg like 7_7"
	exit 0
end
ofp = File.open("#{ x_y }.json", "w")

while !fp.eof 
	
	line = fp.gets().chomp
	useline = line.gsub("PLACEHOLDER", x_y )
	ofp.puts useline

end
