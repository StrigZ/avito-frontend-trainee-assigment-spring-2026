# Avito Frontend Trainee Assignment — Spring 2026

## Требования

- Node.js 22+
- npm
- Docker и Docker Compose (для запуска через Docker)
- API-ключ GigaChat с [портала разработчиков Сбера](https://developers.sber.ru/portal/products/gigachat-api)

---

## Настройка окружения

Перед запуском приложения создайте файл `.env` в директории `/server`:

```
API_AUTH_KEY=ваш_api_ключ_gigachat
```

`API_AUTH_KEY` — это строка credentials в формате base64 (`client_id:client_secret`), которую можно получить в личном кабинете GigaChat API.

---

## Запуск через Docker

### 1. Соберите и запустите контейнеры из корня проекта

```sh
docker compose up --build
```

Будут запущены:
- **Сервер** на `http://localhost:8080`
- **Фронтенд** на `http://localhost:5173`

### 2. Откройте приложение

Перейдите по адресу [http://localhost:5173](http://localhost:5173) в браузере.

---

## Запуск вручную

### 1. Запустите сервер

```sh
cd server
npm i
npm start
```

Сервер будет доступен по адресу `http://localhost:8080`.

### 2. Запустите фронтенд

Откройте новый терминал в корневой директории:

```sh
npm i
npm run dev
```

Фронтенд будет доступен по адресу `http://localhost:5173`.

### Сборка фронтенда для продакшена

```sh
npm run build
npm run preview
```

---

1. Для корректного отображения объявлений в списке на странице `/ads` эндпоинт `/items` был доработан — теперь он возвращает `id` каждого объявления.
2. Сервер не поддерживал сортировку по цене — реализовал эту функциональность самостоятельно.
3. Для форматирования дат использовал библиотеку [`date-fns`](https://date-fns.org/).
4. Для работы с формами использовал [`react-hook-form`](https://react-hook-form.com/), для валидации схем — [`zod`](https://zod.dev/).
5. Для уведомлений использовал [`sonner`](https://sonner.emilkowal.ski/).
6. Чтобы не раскрывать API-ключи на клиенте, вынес взаимодействие с GigaChat на сервер. Добавил два новых эндпоинта — `/ai/description` и `/ai/price`, которые формируют запросы к GigaChat API с учётом характеристик конкретного товара. Логика работы с API вынесена в `ai-client.ts`, промпты — в `prompts.ts`.
