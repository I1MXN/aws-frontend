# AWS Zero Trust — Frontend

React 19 + Vite. Formulario de inicio de sesión, Dashboard y ProtectedRoute. La API se consume desde `/api`; Apache en la EC2 frontend realiza proxy hacia la IP privada de la EC2 backend.

## Ejecutar
```bash
npm install
cp .env.example .env
npm run build
sudo cp -r dist/* /var/www/html/
```

Configura Apache con ProxyPass `/api/ http://IP_PRIVADA_BACKEND:3000/api/` y ProxyPassReverse equivalente. Activa `proxy proxy_http rewrite headers`. Cuando cambien las IP del laboratorio AWS, edita Apache, no el código React.
