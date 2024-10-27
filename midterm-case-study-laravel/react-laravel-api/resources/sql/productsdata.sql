CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    bar_code VARCHAR(50) UNIQUE,
    stock_quantity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO products (product_name, price, description, category, bar_code, stock_quantity)
VALUES 
    ('Engine Oil', 25.00, 'Synthetic motor oil for high performance', 'automotive', '9012345678901', 80),
    ('Lipstick', 15.99, 'Long-lasting matte lipstick', 'beauty-and-personal-care', '0123456789012', 200),
    ('Smartphone', 699.00, 'Latest model smartphone with 128GB storage', 'electronics', '1123456789013', 30),
    ('Running Shoes', 60.00, 'Comfortable running shoes for daily exercise', 'fashion', '2123456789014', 100),
    ('Protein Powder', 40.00, 'Whey protein powder, chocolate flavor', 'health-and-fitness', '3123456789015', 50),
    ('Blender', 35.99, 'High-speed blender for smoothies and shakes', 'home-and-kitchen', '4123456789016', 25),
    ('Tent', 120.00, '4-person camping tent, waterproof', 'sports-and-outdoors', '5123456789017', 15),
    ('Board Game', 25.00, 'Popular strategy board game for all ages', 'toys-and-games', '6123456789018', 70),
    ('Car Air Freshener', 5.00, 'Vanilla-scented car air freshener', 'automotive', '7123456789019', 250),
    ('Face Cream', 22.50, 'Moisturizing face cream with SPF 15', 'beauty-and-personal-care', '8123456789020', 120);
SELECT * FROM products;
