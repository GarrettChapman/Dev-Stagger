-- update table
--   set col = value
--   where something = something
--   returning *;

update bars_table
  set bar_name = $2
  where bar_id = $1
  returning *;
