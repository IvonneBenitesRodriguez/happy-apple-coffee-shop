require 'rails_helper'

RSpec.describe OrderItem, type: :model do
  let(:product) { Product.create!(name: 'Coffee Mug', price: 5.35) }
  let(:order) { Order.create!(total: 0, status: 'pending') }

   it 'is valid with a quantity greater than 0' do
    order_item = OrderItem.new(quantity: 2, order: order, product:  product)
    expect(order_item).to be_valid
   end 

   it 'is invalid without a quantity' do
    order_item = OrderItem.new(quantity: nil, order: order, product: product)
    expect(order_item).not_to be_valid
   end

   it 'is invalid with a quantity of 0 or less than 0' do
    order_item = OrderItem.new(quantity: 0, order: order, product: product)
    expect(order_item).not_to be_valid
   end
end
