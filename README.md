# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # playstation

    Кратко
    --
    Небольшой UI-демо в духе консоли PlayStation. Главная фишка — горячие клавиши, которые ускоряют навигацию по интерфейсу и управление анимациями.

    Быстрый старт
    --
    Установка и запуск в режиме разработки:

    ```bash
    npm install
    npm run dev
    ```

    Основные скрипты
    --
    - `npm run dev` — запуск dev-сервера (Vite)
    - `npm run build` — сборка (TypeScript + Vite)
    - `npm run lint` — запуск ESLint
    - `npm run preview` — превью собранного билда

    Главная особенность — hotkeys
    --
    - Горячие клавиши реализованы через `react-hotkeys-hook` и описаны в `src/data/hotkeys.data.tsx`.
    - Они управляют фокусом, навигацией между секциями и включают/выключают анимации.

    Короткая структура проекта
    --
    - `src/components` — UI-компоненты
    - `src/data` — статичные данные (игры, друзья, трофеи, хоткеи)
    - `src/hooks` — кастомные хуки
    - `src/config` — конфигурации (hotkeys и пр.)

    Советы для разработки
    --
    - Типизация: `npx tsc --noEmit` для проверки типов.
    - Линт: `npm run lint`.
    - Для больших списков используйте виртуализацию (`react-virtuoso`/`react-window`).

    Примечания
    --
    - В репо могут встречаться опечатки в именах файлов/типов — стоит поправить и прогнать `tsc`.
    - В `public/` есть пути с апострофами (например, `baldur's`) — на некоторых платформах это неудобно.

    Контрибьюция
    --
    PR приветствуются. Перед PR запускайте `npm run lint` и `npx tsc --noEmit`.
  }
])
````
