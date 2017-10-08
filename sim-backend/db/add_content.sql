INSERT into content (name, price)
VALUES (${name}, ${price})
RETURNING contentid;
