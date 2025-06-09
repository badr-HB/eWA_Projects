
create database if not exists `folder`;
use `folder`;

create table folders_names(
	folder_name varchar(255)
);

insert into folders_names (folder_name) values
('eau'),
('électricité'),
('assurance');


select *
from folders_names;