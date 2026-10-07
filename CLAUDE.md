# Crema Tabacaria & Adega — App de Delivery

App mobile de delivery para a **Crema Tabacaria & Adega**, loja que atende dois nichos: **adega** (vinhos, destilados, cervejas, gelo, energéticos) e **tabacaria** (essências, carvão, sedas e acessórios de narguilé).

Este repositório começa a partir dos wireframes feitos no Figma. Tudo o que você precisa para implementar está aqui:

| Caminho | O que é |
|---|---|
| `docs/SPEC.md` | Especificação completa: fluxos, as 21 telas (conteúdo, layout e comportamento), modelos de dados e regras de negócio |
| `design/tokens.json` | Design tokens: cores, tipografia, raios, espaçamentos e sombras |
| `design/screens/*.png` | Export de cada tela do Figma (390×844 @2x). **Use como referência visual** |
| `design/figma-plugin/` | Plugin que gerou os wireframes. O `code.js` traz as coordenadas exatas de cada elemento, para conferir medidas |
| `assets/logo.png` | Logo oficial (fundo preto) |
| `assets/emblem.png` | Emblema recortado (taça + charuto), para ícone do app e avatar |

## Stack sugerida (pode ajustar)

- **Expo (React Native) + TypeScript + Expo Router** (navegação por arquivos)
- Estilo: StyleSheet com os tokens de `design/tokens.json` (ou NativeWind, mapeando os tokens no tema)
- Estado: **Zustand** (sacola, sessão, endereço) e **TanStack Query** (catálogo e pedidos)
- Fontes: `@expo-google-fonts/cinzel` (Cinzel Bold) e `@expo-google-fonts/inter` (400/500/600/700)
- Ícones: `lucide-react-native`, os mesmos nomes de ícone usados no Figma (listados na SPEC)
- Mapa do rastreio: `react-native-maps`
- Backend (fase 2): Supabase (auth por e-mail/SMS, Postgres e realtime para o status do pedido)
- Pagamentos (fase 2): um gateway com Pix e cartão (Mercado Pago, Asaas, Pagar.me…). Na fase 1, simule tudo.

## Ordem de implementação recomendada

1. Setup do projeto, tema (tokens), fontes e componentes base (Button, Input, Chip, Card, Header, TabBar, Stepper, Radio, Checkbox, ProductCard, Badge)
2. Dados mockados em `src/mocks/` (produtos, categorias, pedidos e notificações, iguais aos da SPEC)
3. Fluxo 01: Acesso (splash, +18, login, cadastro, SMS, endereço)
4. Fluxo 02: Catálogo e sacola
5. Fluxo 03: Checkout e pagamento (mock)
6. Fluxo 04: Rastreio, entrega e avaliação (simular a mudança de status com timer)
7. Fluxo 05: Notificações, pedidos e perfil
8. Backend real, pagamentos e push notifications

## Regras que não podem faltar

- **+18 obrigatório**: gate de idade antes de qualquer conteúdo, data de nascimento no cadastro e conferência de documento na entrega.
- Produtos de tabaco sempre com a advertência do Ministério da Saúde e o selo **18+**.
- **Não incluir cigarros eletrônicos, vapes ou pods**: a venda é proibida no Brasil (Anvisa).
- Entrega só é concluída com o **código de 4 dígitos** informado ao entregador.

## Convenções

- Interface 100% em português do Brasil. Moeda no formato `R$ 1.234,56`.
- Tema escuro único (o app inteiro é dark, com detalhes em dourado).
- Tela base de referência: 390×844 (iPhone 14/15). Margem lateral de 20px.
- Telas em `app/` (Expo Router) e componentes em `src/components/`, um por arquivo.
