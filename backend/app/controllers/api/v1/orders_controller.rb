module Api
    module V1
        class OrdersController < ApplicationController
            def index
                orders = Order.all
                render json: orders, status: :ok
        end

        def create
            order = Order.new(order_params)
            if order.save
                render json: order, status: :created
            else
                render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
            end
        end
        
        def show
            order = Order.find(params[:id])
            render json: order, status: :ok
        rescue ActiveRecord::RecordNotFound
            render json: { error: 'Order not found' }, status: :not_found
        end

        private

        def order_params
            params.require(:order).permit(:status, :total)
            end 
    end
end
end
