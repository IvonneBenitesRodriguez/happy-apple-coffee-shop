# Preparing the table to initiate
Product.destroy_all

# Creating the products
Product.create!([
  { name: 'Coffee Mug', price: 5.35 },
  { name: 'Coffee Toaster', price: 5.35 },
  { name: 'Italian Coffee Maker', price: 15.99 },
  { name: 'French Coffee Maker', price: 18.99 },
  { name: 'Chinese Coffee Maker', price: 10.35 }
])

puts "✅ #{Product.count} products created!"