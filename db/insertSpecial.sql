INSERT into specials_table (bar_id, special) VALUES ($1, $2)
returning *;
