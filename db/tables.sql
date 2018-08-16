drop table if exists Review_testing;

create table Review_testing
(
    id serial primary key,
    name text,
    quantity integer,
    favorite_color text
);

select *
from Review_testing