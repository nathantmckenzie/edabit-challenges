class Car
  def initialize(name, year)
    @name = name
    @year = year
  end

  def change_info(name, year)
    @name = name
    @year = year
  end

  def display_info
   "The car is a #{@name} from #{@year}"
  end
end 

bmw = Car.new('bmw', 2015)
puts bmw.display_info

