require 'rails_helper'

RSpec.describe Api::V1::ProductsController, type: :controller do
describe 'GET #index' do
it 'returns a successful response' do
    get :index
    expect(response).to have_http_status(:ok)
end

it 'returns all products as JSON' do
    Product.create!(name: 'Latte', price: 4.50)
    Product.create!(name: 'Espresso', price: 3.00)
    get :index
    json = JSON.parse(response.body)
    expect(json.length).to eq(2)
    end
end

describe 'GET #show' do
it 'returns a specific product' do
    product = Product.create!(name: 'Latte', price: 4.50)
    get :show, params: { id: product.id }
    json = JSON.parse(response.body)
    expect(json['name']).to eq('Latte')
end

it 'returns 404 if product not found' do
    get :show, params: { id: 9999 }
    expect(response).to have_http_status(:not_found)
        end
    end
end

