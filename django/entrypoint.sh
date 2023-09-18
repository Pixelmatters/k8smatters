#!/bin/sh

wait_for_postgres() {
  until PGPASSWORD="$DB_PASSWORD" psql -h "$DB_HOST" -U "$DB_USER" -d "$DB_DATABASE" -c '\q'; do
    >&2 echo "Postgres is unavailable - sleeping"
    sleep 1
  done
  >&2 echo "Postgres is up - continuing"
}

if [ "$DATABASE" = "postgres" ]; then
  wait_for_postgres
fi

poetry run python manage.py collectstatic --noinput
poetry run python manage.py migrate --noinput

exec "$@"