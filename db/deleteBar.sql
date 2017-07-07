Delete from bars_table
where bar_id = $1
returning *;
