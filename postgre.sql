CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(20) UNIQUE,
  password VARCHAR(200),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sellers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(20) UNIQUE,
  password VARCHAR(200),
  shop_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE     (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(20) UNIQUE,
  password VARCHAR(200),
  region VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
