INSERT into reviews_table (bar_id, review) VALUES ($1 , $2)
returning *;
