insert into bars_table (bar_name, street, city, zip, specials, rating, review, lat, lng)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9);
select * from bars_table;
