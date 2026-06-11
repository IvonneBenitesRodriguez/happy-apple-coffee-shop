require 'rails_helper'

RSpec.describe Api::V1::OrderItemsController, type: :controller do
  let(:order) { Order.create!(status: 'pending', total: 0.0) }
  let(:product) { Product.create!(name: 'Latte', price: 4.50) }

  # --- POST #create ---
  describe 'POST #create' do
    it 'creates a new order item' do
      expect {
        post :create, params: { order_item: { order_id: order.id, product_id: product.id, quantity: 2 } }
      }.to change(OrderItem, :count).by(1)
    end

    it 'returns the created order item as JSON' do
      post :create, params: { order_item: { order_id: order.id, product_id: product.id, quantity: 2 } }
      json = JSON.parse(response.body)
      expect(json['quantity']).to eq(2)
    end

    it 'returns 422 if order item is invalid' do
      post :create, params: { order_item: { order_id: nil, product_id: nil, quantity: nil } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  # --- DELETE #destroy ---
  describe 'DELETE #destroy' do
    it 'deletes an order item' do
      order_item = OrderItem.create!(order: order, product: product, quantity: 1)
      expect {
        delete :destroy, params: { id: order_item.id }
      }.to change(OrderItem, :count).by(-1)
    end

    it 'returns 404 if order item not found' do
      delete :destroy, params: { id: 9999 }
      expect(response).to have_http_status(:not_found)
    end
  end
end