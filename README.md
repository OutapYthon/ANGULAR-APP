
# 🛍️ Angular Product Management Frontend

This is a simple Angular frontend project that displays and manages a list of products using a Spring Boot backend.

## 📦 Features

- View product list with ID, name, price, and selection status
- Delete a product with confirmation
- Dynamic product list update after delete
- Backend consumed via REST API
- Clean Bootstrap icons for UI feedback

## 🧠 Tech Stack

- Angular 16+
- TypeScript
- Bootstrap Icons
- RxJS & HttpClient
- RESTful backend from Spring Boot

## 🔌 Backend API

This frontend connects to the backend repository maintained by **[Dr. Mohamed Youssfi](https://github.com/mohamedYoussfi/products-service)**.

- API Base URL: `http://localhost:8083`
- Products endpoint: `/products`

Make sure to:
```bash
cd products-service
mvn spring-boot:run
```
> ℹ️ Backend runs on port `8083` and must be running for this frontend to work.

## 🚀 Run This App Locally

### 1. Clone and install dependencies

```bash
git clone https://github.com/saadBr/ang-app.git
cd ang-app
npm install
```

### 2. Run the development server

```bash
ng serve
```

Then visit: [http://localhost:4200/products](http://localhost:4200/products)

## 🧭 App Structure

```
src/
├── app/
│   ├── products/
│   │   ├── products.ts        # Component logic
│   │   ├── products.html      # View template
│   │   └── products.css       # Component styling
│   ├── services/
│   │   └── products.ts        # ProductService (API calls)
│   └── app.routes.ts          # App routing
```


## 📜 License

Educational use only. Based on coursework guided by Mohamed Youssfi.