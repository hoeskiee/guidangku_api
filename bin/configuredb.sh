#!usr/bin

export PGPASSWORD='fa001bf3ef98593f6034dfd96321b106ee9f68dd9fe83a815c16a4d52106816b'

database='da9upeg3vpsg2'

echo "Configuring database: $database"

dropdb -U ytgfhdvzrgwzag da9upeg3vpsg2
createdb -U ytgfhdvzrgwzag da9upeg3vpsg2

bash -c "psql -U ytgfhdvzrgwzag da9upeg3vpsg2 < ./bin/sql/gudangku.sql"

echo "$database configured"