UPDATE Review_testing 
SET name = $1, 
quantity = $2, 
favorite_color=$3
where id = $4;

select *
from Review_testing;