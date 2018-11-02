update inventory
set image = ${imageUrl}, 
set name = ${productName},
set price = ${price}
returning *;