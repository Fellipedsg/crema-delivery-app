# Crema Tabacaria & Adega — protótipo de delivery

Protótipo Expo (React Native + Expo Router) das 21 telas da `docs/SPEC.md`, com dados mockados e transições de 500ms.

```bash
npm install
npx expo start --ios   # abre no simulador (Expo Go)
```

Fase 1: tudo simulado (pagamento, rastreio por timer, SMS aceita qualquer código de 6 dígitos).

## Painel da loja (`admin/`)

Painel de gerenciamento (React + Vite): visão geral, pedidos (quadro/lista, avanço de status, código de entrega de 4 dígitos, cancelamento só até "Preparando"), produtos (estoque, bloqueio de vapes/pods), cupons, clientes (Clube Crema) e configurações. Dados fictícios salvos no navegador.

```bash
cd admin && npm install && npm run dev
```
Online: https://fellipedsg.github.io/crema-delivery-app/admin/ (qualquer senha com 6+ caracteres)
