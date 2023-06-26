## mern-trpc-crud - backend

## setup

```bash
yarn init -y
```

```bash
yarn add typescript ts-node-dev -D
```

### first tsconfig

```bash
npx tsc --init
```

### add in package.json

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
},
```

### add express

```bash
yarn add express @trpc/server
```

```bash
yarn add @types/express -D
```

```bash
yarn add dotenv
yarn add -D @types/dotenv

```

### add morgan - for console view HTTP methods

```bash
yarn add morgan
yarn add -D @types/morgan
```

### add cors

```bash
yarn add cors
yarn add -D @types/cors
```


### add zod for validate input mutations

```bash
yarn add zod
```