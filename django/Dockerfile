FROM python:3.9.18-slim as builder

WORKDIR /app

RUN apt-get update && apt-get install -y postgresql-client

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./poetry.lock .
COPY ./pyproject.toml .
run pip install poetry
RUN poetry install --no-dev
RUN poetry self add poetry-dotenv-plugin

COPY ./entrypoint.sh .
COPY ./backend .
COPY ./.env .

RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]