module RandomNumbersFilter
  def random_numbers(length)
    (0..9).to_a.shuffle.sample(length).join
  end
end

Liquid::Template.register_filter(RandomNumbersFilter)
