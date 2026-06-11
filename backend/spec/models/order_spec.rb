require 'rails_helper'

RSpec.describe Order, type: :model do
 #validations:
 describe 'validations' do
  it 'is valid with valid attributes' do
    order = Order.new(status: 'pending', total: 0.0)
    expect(order).to be_valid
  end

  it 'is invalid without a status' do
     order = Order.new(status: nil, total: 0.0)
     expect(order).not_to be_valid
  end

   it 'is invalid with a negative value' do
    order= Order.new(status: 'pending', total: -1.0)
    expect(order).not_to be_valid
   end
end

#Associations
describe 'associations' do
  it 'has many order_items' do
 order = Order.new(status: 'pending', total: 0.0)
 expect(order).to respond_to(:order_items)
  end
end

#Status values
describe 'status' do
  it 'accepts pending status' do
    order = Order.new(status: 'pending', total: 0.0)
    expect(order.status).to eq('pending')
  end

  it 'accepts completed status' do
    order = Order.new(status: 'completed', total: 10.0)
    expect(order.status).to eq('completed')
    end
  end
end
