# Login Page

Este é um projeto de exemplo utilizando React, TypeScript, Vite, Java Spring, e JWT.

<img src="./frontend/src/app/assets/illustration.png" alt="Projeto">

## Funcionalidades

- **Frontend**: Desenvolvido com React e Vite.
- **Backend**: Servido com Spring Security e JWT.

## Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (Recomendado: versão LTS)
- [Git](https://git-scm.com/) (opcional, para controle de versão)
- [Maven](https://maven.apache.org/) (para o backend)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (para o backend)

## Instalação

### Frontend

1. Clone o repositório:

    ```bash
    git clone https://github.com/username/login-page.git
    cd login-page
    ```

2. Navegue até o diretório do frontend:

    ```bash
    cd frontend
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. **Configuração da URL Base**

   No arquivo `vite.config.ts`, ajuste a propriedade `base` para corresponder ao caminho onde seu frontend será servido:

   - **Para o domínio principal:**

     ```typescript
     import { defineConfig } from 'vite';
     import react from '@vitejs/plugin-react';

     export default defineConfig({
       plugins: [react()],
       base: '/login/'
     });
     ```

5. **Executar o Frontend**

    Execute o comando:

    ```bash
    npm run dev
    ```

    O frontend estará disponível em [http://localhost:5173](http://localhost:5173) por padrão.

### Backend

1. Navegue até o diretório do backend:

    ```bash
    cd ../backend
    ```

2. **Configuração do CORS**

   Certifique-se de que o backend está configurado para permitir CORS a partir do domínio onde o frontend está rodando. No arquivo `CorsConfig.java`, ajuste a configuração:

   ```java
   import org.springframework.context.annotation.Configuration;
   import org.springframework.web.servlet.config.annotation.CorsRegistry;
   import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

   @Configuration
   public class CorsConfig implements WebMvcConfigurer {
       @Override
       public void addCorsMappings(CorsRegistry registry) {
           registry.addMapping("/**")
                   .allowedOrigins("http://localhost:5173") // Substitua pelo URL onde o frontend está rodando
                   .allowedMethods("GET", "POST", "DELETE", "PUT");
       }
   }
Executar o Backend

Execute o comando:

    ```bash
    mvn spring-boot:run
    ```

## Configuração do Backend

🔗 **Backend URL**: O backend estará disponível em [http://localhost:8080](http://localhost:8080) por padrão.

## Criar Usuário para Teste

📝 **Criação de Usuário**: Acesse o frontend em `http://localhost:porta` e crie um usuário utilizando o endpoint `/signup`. Isso permitirá que você teste as funcionalidades de autenticação e login.

## Testes

Depois de configurar e iniciar tanto o frontend quanto o backend, você pode testar as funcionalidades de autenticação e login:

### 1. Criar um Novo Usuário

👤 **Formulário de Signup**: Utilize o formulário de signup no frontend para criar um novo usuário.

### 2. Login

🔑 **Acesso à Página de Login**: Após criar o usuário, acesse a página de login e faça login com as credenciais fornecidas.

### 3. Verificar

✅ **Verificação**: Verifique se o login foi bem-sucedido e se você está autenticado conforme esperado.
