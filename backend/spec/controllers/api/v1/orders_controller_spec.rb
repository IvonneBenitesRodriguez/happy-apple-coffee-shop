require 'rails_helper'

RSpec.describe Api::V1::OrdersController, type: :controller do
  # --- GET #index ---
  describe 'GET #index' do
    it 'returns a successful response' do
      get :index
      expect(response).to have_http_status(:ok)
    end

    it 'returns all orders as JSON' do
      Order.create!(status: 'pending', total: 10.0)
      Order.create!(status: 'completed', total: 25.0)
      get :index
      json = JSON.parse(response.body)
      expect(json.length).to eq(2)
    end
  end

  # --- POST #create ---
  describe 'POST #create' do
    it 'creates a new order' do
      expect {
        post :create, params: { order: { status: 'pending', total: 0.0 } }
      }.to change(Order, :count).by(1)
    end

    it 'returns the created order as JSON' do
      post :create, params: { order: { status: 'pending', total: 0.0 } }
      json = JSON.parse(response.body)
      expect(json['status']).to eq('pending')
    end
  end

  # --- GET #show ---
  describe 'GET #show' do
    it 'returns a specific order' do
      order = Order.create!(status: 'pending', total: 10.0)
      get :show, params: { id: order.id }
      json = JSON.parse(response.body)
      expect(json['status']).to eq('pending')
    end

    it 'returns 404 if order not found' do
      get :show, params: { id: 9999 }
      expect(response).to have_http_status(:not_found)
    end
  end
end