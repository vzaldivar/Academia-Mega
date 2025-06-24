FROM node:22
# Establecer el directorio de trabajo dentro de la imagen
WORKDIR /usr/src/app
# Copiar el archivo de definicion de dependencias
COPY package*.json ./
# Instalar las dependencias 
RUN npm install
# Copiar la solucion 
COPY . .
# Exporner un purto 
# ENV PORT=${APP_PORT}
# EXPOSE ${PORT}
EXPOSE 3001
# Comando que inicie la aplicacion
CMD ["node", "app.js"]

