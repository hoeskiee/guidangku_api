#!usr/bin

export PGPASSWORD='sixminutes6;'

database='gudangkudb'

echo "Configuring database: $database"

dropdb -U hoeskie gudangkudb
createdb -U hoeskie gudangkudb

bash -c "psql -U hoeskie gudangkudb < ./bin/sql/gudangku.sql"

echo "$database configured"