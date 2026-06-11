module Api
  module V1
    class OrderItemsController < ApplicationController
      def create
        order_item = OrderItem.new(order_item_params)
        if order_item.save
          render json: order_item, status: :created
        else
          render json: { errors: order_item.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        order_item = OrderItem.find(params[:id])
        order_item.destroy
        render json: { message: 'Order item deleted' }, status: :ok
      rescue ActiveRecord::RecordNotFound
        render json: { error: 'Order item not found' }, status: :not_found
      end

      private

      def order_item_params
        params.require(:order_item).permit(:order_id, :product_id, :quantity)
      end
    end
  end
end