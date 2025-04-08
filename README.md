# 📜 Mapa de Atendimentos - Pigz

[![React Native](https://img.shields.io/badge/React%20Native-2025-blue?logo=react)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux--Toolkit-State%20Management-purple?logo=redux)](https://redux-toolkit.js.org/)
[![FlashList](https://img.shields.io/badge/FlashList-Performance-green?logo=shopify)](https://shopify.github.io/flash-list/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> Aplicativo mobile para gerenciamento de mesas com integração real-time à API Pigz, utilizando MVVM, FlashList e Redux Toolkit.

---

## 📑 Sumário

- [1. Tecnologias Utilizadas](#1-tecnologias-utilizadas)
- [2. Arquitetura](#2-arquitetura)
- [3. Organização de Pastas](#3-organização-de-pastas)
- [4. Funcionalidades Implementadas](#4-funcionalidades-implementadas)
- [5. Regras de Negócio](#5-regras-de-negócio)

---

## 1. Tecnologias Utilizadas

- **React Native CLI** – Framework principal para desenvolvimento mobile nativo.
- **TypeScript** – Tipagem estática para maior segurança e produtividade.
- **Redux Toolkit** – Gerenciamento de estado global, com slices modulares.
- **AsyncStorage** – Persistência local (cache dos dados de mesas).
- **FlashList (Shopify)** – Lista performática para grandes volumes de dados.
- **Axios** – Integração com APIs REST.
- **Lucide Icons** – Ícones modernos (`SearchBar`).
- **MaterialIcons** – Ícones vetoriais para a interface.
- **Skeleton** – Componentes de carregamento animado.

---

## 2. Arquitetura

**Padrão adotado:** `MVVM` (Model-View-ViewModel)

| Camada       | Descrição                                                                 |
|--------------|---------------------------------------------------------------------------|
| **Model**    | Tipos e estruturas de dados (`types/Table.ts`).                          |
| **View**     | Componentes de UI (`components/*`, `views/MapService`).                  |
| **ViewModel**| `useMapServiceController` e `useHomeController`: lógica de estado, filtros e busca. |

---

## 3. Organização de Pastas

```
📁 store/
 ┣ 📄 tableSlice.ts       # Lista de mesas, loading, error
 ┗ 📄 index.ts            # Setup do Redux Toolkit + Thunk

📁 types/
 ┗ 📄 Table.ts            # Tipagem das mesas

📁 utils/
 ┗ 📄 formatters.ts       # Formatadores (ex: valores monetários)

📁 components/
 ┣ 📄 TableCard.tsx       # Card de mesa
 ┣ 📄 SearchBar.tsx       # Busca por nome do cliente
 ┣ 📄 FilterTabs.tsx      # Filtro por status
 ┣ 📄 Header.tsx
 ┣ 📄 OrderTypeModal.tsx
 ┣ 📄 SkeletonCard.tsx
 ┗ 📄 GlobalButton.tsx

📁 screens/
 ┣ 📁 Home/
 ┃ ┣ 📄 index.tsx         # View principal
 ┃ ┗ 📄 controller.ts     # Lógica de filtros e paginação
 ┗ 📁 MapaService/
   ┣ 📄 index.tsx
   ┗ 📄 controller.ts
```

---

## 4. Funcionalidades Implementadas

### 🔗 Integração com API (Pigz)

- **Endpoint**: `GET https://test.pigz.dev/api/pdv/order-sheet/v2/checkpads`
- **Auth**: Token via **Basic Authorization**
- **Armazenamento**: Redux + cache em `AsyncStorage`

### ⚡ FlashList

- `numColumns` para suporte a grids
- `loadMoreTables` para paginação customizada
- Loop infinito: ao final dos dados, mais 20 registros são carregados

### 🎯 Filtro de Mesas

- Visão Geral
- Em Atendimento
- Disponível
- Ociosas
- Sem Pedidos

### 🔎 Busca Integrada

- Busca por `customerName`
- Busca por `title` (número da mesa)

---

## 5. Regras de Negócio

| **Status**         | **Condição**                                               | **Cor do Card** |
|--------------------|------------------------------------------------------------|-----------------|
| **Disponível**     | Sem comanda (`activity === 'empty'`)                      | ⚪ Branco        |
| **Sem Pedidos**    | Comanda aberta (`subtotal === 0`)                         | 🟡 Amarelo       |
| **Em Atendimento** | Comanda aberta (`subtotal > 0`) e `idleTime ≤ 10 minutos` | 🟢 Verde         |
| **Ociosas**        | `idleTime > 10 minutos` e `subtotal > 0`                  | 🔴 Vermelho      |

---
