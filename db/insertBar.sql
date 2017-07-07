insert into bars_table (bar_name, street, city, zip, specials, rating, review)
  values ($1, $2, $3, $4, $5, $6, $7)
  returning *;
