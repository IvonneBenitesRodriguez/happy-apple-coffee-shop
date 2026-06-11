require 'rails_helper'

RSpec.describe Product, type: :model do
  it 'is valid with a name and price' do
    product = Product.new(name: 'Coffee Mug', price: 5.35)
    expect(product).to be_valid
  end

  it 'is invalid without a name' do 
    product = Product.new(price: 5.35)
    expect(product).not_to be_valid
  end

  it 'is invalid without a price' do
    product = Product.new(name: 'Coffee Mug')
    expect(product).not_to be_valid
  end

  it 'is invalid with a price of 0 or less' do
    product = Product.new(name: 'Coffee Mug', price: 0)
    expect(product).not_to be_valid
  end
end
