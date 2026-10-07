# Crema Tabacaria & Adega — Especificação do App

Versão 1.0 · baseada nos wireframes do Figma (out/2026)

Referências visuais: `design/screens/NN-*.png`. Medidas em px na tela base de 390×844. Cores e tipografia: `design/tokens.json`.

---

## 1. Visão geral

**Produto:** app de delivery próprio da Crema, com catálogo em duas frentes (Adega e Tabacaria), sacola, checkout com Pix, cartão ou pagamento na entrega, rastreio em tempo real, entrega com código de segurança e verificação de idade, notificações e programa de fidelidade (Clube Crema).

**Público:** maiores de 18 anos que pedem bebidas geladas, gelo, essências e carvão para consumo imediato (happy hour, festas, sessões de narguilé).

**Identidade:** premium e noturna. Tema escuro com dourado (o da logo) e vinho. Títulos em Cinzel (serifada clássica, a mesma pegada da logo) e interface em Inter.

### Mapa de navegação

```
Splash → Gate +18 → Login ─┬─> Home (tabs)
                           └─> Cadastro → Código SMS → Endereço → Home

Tabs: Início | Buscar | [FAB Sacola] | Pedidos | Perfil

Home → Categoria → Produto → Sacola → Finalizar pedido → Forma de pagamento
     → (Pix) Pagamento Pix → Pedido confirmado → Rastreio → Entregador na porta → Avaliação
Home (sino) → Notificações
Pedidos → Rastreio (pedido em andamento) | Pedir de novo (histórico)
Perfil → Meus dados, Endereços, Formas de pagamento, Cupons, Favoritos, Notificações, Ajuda, Sair
```

---

## 2. Componentes base

| Componente | Especificação |
|---|---|
| **StatusBar** | Hora "9:41" (Inter 600, 15) à esquerda (x 32); ícones signal/wifi/battery à direita. Texto claro. |
| **Header** | Botão voltar circular 40×40 (surface2 + borda line, ícone `chevron-left` 24) em x 20, y 52. Título centralizado Inter 600 17. Ação opcional à direita: botão circular igual, ou link de texto dourado (Inter 600 13). Variante com `x` (fechar). |
| **Button / primary** | Altura 52, raio 14, gradiente goldButton, texto `bg` Inter 600 16 centralizado, ícone opcional de 20 à esquerda do texto. |
| **Button / outline** | Transparente, borda 1px gold, texto gold. |
| **Button / dark** | surface2 + borda line, texto `text` (Google/Apple). |
| **Button / ghost** | Sem fundo, texto muted (ou goldLight). |
| **Input** | Label acima (Inter 500 12 muted, 20px acima do campo). Campo com altura 48, raio 12, surface2, borda line (gold quando focado). Ícone esquerdo 20 muted em x+14; texto 14; ícone direito opcional (`eye` na senha) ou ação em texto dourado ("Aplicar"/"Remover"). |
| **Chip** | Altura 34, raio 17, padding horizontal 15, Inter 500 13. Inativo: surface2 + borda line. Ativo: gradiente gold e texto bg. Ícone opcional de 16. Linhas com scroll horizontal ou quebra de linha (gap 8). |
| **Card** | surface1, raio 16, borda 1px line. Selecionado: borda gold. |
| **Radio** | Círculo 22, borda 2px (dim quando inativo, gold quando ativo) e miolo de 10px em gradiente gold. |
| **Checkbox** | 22×22 raio 6. Inativo: borda 1.5 dim. Ativo: gradiente gold com `check` bg. |
| **Stepper** | Pílula surface3 + borda line. Grande: 124×52; pequeno: 96×34. `minus` (text) · número (Inter 700) · `plus` (gold). |
| **TabBar** | Altura 80 em y 764, surface1, borda superior line. Itens: Início `house`, Buscar `search`, Pedidos `receipt`, Perfil `user` (ícone 24, label Inter 11). Ativo em gold, inativo em dim. **FAB central** de 64px com gradiente gold, ícone `shopping-bag` 28 em bg, borda externa 5px bg, projetado 34px acima da barra. Badge vinho de 22px com a quantidade de itens. |
| **ProductCard (grid)** | 169×262, raio 18. Imagem 153×140 (raio 12), botão favorito circular de 28 (bg 70%) no canto superior direito, badge de desconto vinho opcional. Nome Inter 600 14 (até 2 linhas), meta 12 muted ("Argentina · 750ml"), preço Inter 700 16 gold e botão "+" circular de 32 com gradiente gold. |
| **ProductCard (carrossel)** | 150×160, imagem 134×76, nome 13, meta 11, preço 15 e "+" de 28. |
| **ImagePlaceholder** | surface3 com ícone `image` dim centralizado (enquanto não houver fotos reais). |
| **Badge** | Pílula de altura 22–24 com fundo tint e texto da cor correspondente (A caminho = gold, Entregue = success, Cancelado = wineLight). |
| **NoticeCard** | Card de aviso com ícone `id-card` goldLight e texto 12. Fundo tint.notice e borda gold 40%. Na variante "danger": tint.danger com borda wine. |

**Ícones (lucide):** house, search, shopping-bag, user, bell, map-pin, heart, chevron-left/right/down, plus, minus, wine, cigarette, beer, martini, leaf, flame, credit-card, qr-code, banknote, bike, check, circle-check-big, clock, star, sliders-horizontal, settings, log-out, package, package-check, receipt, ticket, gift, eye, lock, mail, phone, x, navigation, message-circle, shield-check, id-card, trash-2, copy, smartphone, store, percent, wallet, calendar, zap, snowflake, image, briefcase, rotate-ccw.

---

## 3. Telas

### Fluxo 01 · Acesso e cadastro

**01 Splash** (`01-splash.png`)
- Logo centralizada (340 de largura, y 300) com halo dourado radial atrás.
- Barra de loading fina (80×3) em y 620.
- Rodapé: "Delivery de bebidas e tabacaria" e "Venda proibida para menores de 18 anos".
- Comportamento: carrega a sessão. Se a idade já foi confirmada e há sessão, vai para Home; senão, para o Gate +18.

**02 Verificação +18** (`02-verificacao-18.png`)
- Emblema circular de 120px, badge vinho "+18" e título "Você tem 18 anos?" (display 26).
- Texto: "A Crema vende bebidas alcoólicas e produtos de tabacaria. Por lei, a venda é proibida para menores de 18 anos."
- Input "Data de nascimento" (DD / MM / AAAA, ícone `calendar`).
- Botões: "Sim, tenho 18 anos ou mais" (primary) e "Não tenho 18 anos" (outline).
- Rodapé: "Venda proibida para menores de 18 anos (ECA, art. 243)."
- Regra: calcular a idade pela data. Se for menor que 18 ou clicar em "Não", mostrar tela de bloqueio sem acesso ao catálogo. Salvar `ageConfirmedAt` e `birthDate` localmente.

**03 Login** (`03-login.png`)
- Logo pequena no topo, título "Bem-vindo de volta" e subtítulo.
- Inputs: "E-mail ou celular" (`mail`) e "Senha" (`lock` + `eye` para mostrar/ocultar).
- Link "Esqueci minha senha" (direita) e botão "Entrar".
- Divisor "ou continue com", com botões Google e Apple lado a lado.
- Ghost "Entrar só com o celular (SMS)" com ícone `smartphone`.
- Rodapé: "Não tem conta? **Cadastre-se**".

**04 Cadastro** (`04-cadastro.png`)
- Header "Criar conta" e indicador "Etapa 1 de 2 · Seus dados" com barra de progresso (50%).
- Campos (gap 76): Nome completo (`user`), CPF (`id-card`, máscara), Data de nascimento (`calendar`, já preenchida pelo gate), Celular/WhatsApp (`phone`, máscara), E-mail (`mail`), Senha (`lock`, mínimo de 8 caracteres).
- Checkbox obrigatório: "Confirmo que tenho 18 anos ou mais e aceito os Termos de Uso e a Política de Privacidade."
- Botão "Continuar" leva ao Código SMS. Rodapé: "Já tem conta? **Entrar**".
- Validações: CPF válido, idade de 18 anos ou mais, e-mail válido, senha com 8+ caracteres e checkbox marcado.

**05 Código SMS** (`05-codigo-sms.png`)
- Ícone `smartphone` num círculo tint, título "Confirme seu celular" e texto "Enviamos um código de 6 dígitos por SMS para (79) 9 ••••-4321".
- 6 caixas de 48×58 (gap 12). A caixa ativa tem borda gold de 2px. Autoavança e aceita colar o código.
- "Reenviar código em 00:45" (contagem regressiva) e link "Alterar número".
- Botão "Confirmar" leva ao Endereço.

**06 Endereço** (`06-endereco.png`)
- Header "Onde vamos entregar?" e mapa de 350×230 com pin central (arrastável na versão real).
- Botão outline "Usar minha localização atual" (`navigation`).
- Campos: CEP e Número (meia largura cada; o CEP busca a rua automaticamente pelo ViaCEP), Rua/Avenida e Complemento/referência.
- "Salvar como": chips Casa (`house`), Trabalho (`briefcase`) e Outro (`map-pin`).
- Botão "Salvar endereço" leva à Home.
- Regra: validar se o endereço está dentro do raio de entrega da loja. Se não estiver, avisar.

### Fluxo 02 · Catálogo e sacola

**07 Home** (`07-home.png`)
- Topo: `map-pin` gold, "Entregar em" (12 muted) e "Rua das Flores, 120 ▾" (abre a troca de endereço). Sino à direita com ponto vinho de não lidas.
- Busca: campo de 290×48 "Buscar vinhos, essências, gelo..." e botão de filtro dourado de 52×48 (`sliders-horizontal`).
- Banner hero (350×140, gradiente heroBanner): overline "HAPPY HOUR CREMA", título display "Combo Narguilé + Gelo de Coco", pílula "a partir de R$ 59,90" e imagem à direita. Carrossel com indicadores.
- Dois cards de nicho (169×88): **Adega** ("Bebidas e gelo", ícone `wine`) e **Tabacaria** ("Essências e acessórios", ícone `cigarette`), cada um levando à categoria-mãe.
- "Categorias" + "Ver todas": círculos de 56px com ícone goldLight: Vinhos (`wine`), Destilados (`martini`), Cervejas (`beer`), Essências (`leaf`) e Carvão (`flame`). Scroll horizontal (incluir também Gelo, Energéticos e Acessórios).
- "Mais pedidos" + "Ver todos": carrossel de ProductCard.
- TabBar (Início ativo).

**08 Categoria · Vinhos** (`08-categoria-vinhos.png`)
- Header "Vinhos" com busca à direita.
- Chips de subcategoria com scroll: Todos (ativo), Tintos, Brancos, Rosés e Espumantes.
- Linha: "86 produtos" à esquerda; "Mais vendidos ▾" (ordenação) e ícone de filtros à direita.
- Grid de 2 colunas de ProductCard (gap 12). Exemplos: Malbec Reserva (Argentina · 750ml, R$ 89,90, badge -10%, favoritado), Cabernet Sauvignon (Chile, R$ 59,90), Merlot Suave (Brasil, R$ 39,90) e Carménère Gran Reserva (Chile, R$ 119,90).
- O "+" adiciona direto na sacola com quantidade 1 e adicionais padrão.

**09 Produto · Adega** (`09-produto-adega.png`)
- Galeria de imagem no topo (390×380, swipe, indicadores), com voltar e favoritar flutuando (círculos bg 70%).
- Painel com raio superior de 28 a partir de y 350:
  - Overline "ADEGA · VINHO TINTO" e nome "Malbec Reserva" (display 24).
  - ★ 4,8 (126 avaliações) e chip "Gelado" (`snowflake`), que indica disponibilidade gelada.
  - Preço "R$ 89,90" (26 bold gold) com preço antigo riscado "R$ 99,90".
  - Descrição (14 muted, lh 20).
  - **Adicionais** (checkbox + preço à direita): Gelar na hora (Grátis, marcado), Saca-rolhas (+ R$ 4,90) e Taças acrílicas, 2 un. (+ R$ 9,90).
- Bottom bar fixa (88, surface1): Stepper grande e botão "Adicionar · R$ 89,90". O valor do botão = (preço + adicionais) × quantidade.

**10 Produto · Tabacaria** (`10-produto-tabacaria.png`)
- Mesma estrutura, com badge vinho "18+" sobre a imagem.
- Overline "TABACARIA · ESSÊNCIA", nome "Essência Premium", ★ 4,9 (342) e preço "R$ 24,90".
- **Sabor** (badge "Obrigatório"): chips com quebra de linha: Menta (ativo), Uva, Melancia, Ice Mint, Frutas vermelhas, Pêssego e Maracujá. Seleção única.
- **Tamanho**: controle segmentado "50g · R$ 24,90" | "250g · R$ 89,90" (o preço muda conforme a variante).
- Advertência fixa (11 dim): "O Ministério da Saúde adverte: fumar causa câncer de pulmão. Venda proibida para menores de 18 anos."
- Bottom bar: stepper (2) e "Adicionar · R$ 49,80". O botão fica desabilitado até o sabor ser escolhido.

**11 Sacola** (`11-sacola.png`)
- Header "Minha sacola" com lixeira (esvaziar, com confirmação).
- Linha da loja: `store` + "Crema Tabacaria & Adega" e "4 itens".
- Itens (card de 84 de altura): imagem 64, nome, variante/adicional (12 muted), preço e stepper pequeno. Quantidade 0 remove o item (confirmar).
  - Malbec Reserva 750ml · Gelar na hora · R$ 89,90 · 1
  - Essência Premium 50g · Sabor: Menta · R$ 49,80 · 2
  - Carvão de coco 1kg · Hexagonal · R$ 19,90 · 1
  - Gelo em cubos 5kg · Filtrado · R$ 14,90 · 1
- "+ Adicionar mais itens" (link gold, volta para a Home).
- Cupom: input com `ticket`, valor "CREMA10" e ação "Remover"/"Aplicar". Feedback em verde: "Cupom aplicado: R$ 10,00 de desconto".
- Resumo: Subtotal R$ 174,50 · Taxa de entrega R$ 6,00 · Desconto - R$ 10,00 (verde) · **Total R$ 170,50**.
- Botão "Ir para o pagamento". Regra: mostrar o pedido mínimo e avisar se a loja estiver fechada.

### Fluxo 03 · Checkout e pagamento

**12 Finalizar pedido** (`12-finalizar-pedido.png`)
- **Entregar em**: card com `map-pin`, "Casa", endereço e "Trocar".
- **Quando?**: dois cards: "Agora · 30–45 min" (`zap`, selecionado com borda gold) e "Agendar · Escolha o horário" (`calendar`, abre um seletor de data e hora).
- **Pagamento**: card com `qr-code`, "Pix · Aprovação imediata" e "Trocar" (leva à tela 13).
- **Observações**: textarea "Ex: interfone 12, deixar na portaria...".
- NoticeCard: "Tenha um documento com foto em mãos: o entregador vai conferir sua idade na entrega."
- Resumo: subtotal, entrega, desconto e total. Botão "Confirmar pedido · R$ 170,50".
- Com Pix, vai para a tela 14. Com cartão no app, processa e vai para a 15. Com pagamento na entrega, vai direto para a 15.

**13 Forma de pagamento** (`13-forma-pagamento.png`)
- Seção "Pague pelo app": opções em card de 64 (ícone circular, título, subtítulo e radio):
  - Pix · "Aprovação na hora" (selecionado)
  - Cartão de crédito · "Mastercard •••• 4821"
  - "+ Adicionar novo cartão" (card com borda tracejada)
- Seção "Pague na entrega":
  - Cartão na maquininha · "Crédito ou débito"
  - Dinheiro · "Informe se precisa de troco". Quando expandido: toggle "Precisa de troco?" e input "Troco para R$ 200,00" (precisa ser maior que o total).
- `lock` + "Pagamento seguro e criptografado".
- Botão "Continuar com {método}".

**14 Pagamento Pix** (`14-pagamento-pix.png`)
- Chip de expiração "Expira em 09:58" (contagem de 10 min).
- QR code de 220×220 em fundo claro, valor "R$ 170,50" e beneficiário "Crema Tabacaria & Adega".
- Campo copia e cola (código truncado + `copy`).
- Passos numerados: 1) Abra o app do seu banco; 2) Escolha Pix › Pix Copia e Cola; 3) Cole o código e confirme o pagamento.
- Status "Aguardando pagamento…" com ponto pulsando (polling/realtime). Ao aprovar, vai para a tela 15.
- Botões: "Copiar código Pix" (primary, com toast "Código copiado") e "Já fiz o pagamento" (outline, força a checagem).
- Expirado: mostrar "Gerar novo código".

**15 Pedido confirmado** (`15-pedido-confirmado.png`)
- Ícone de check de 80px com gradiente gold e halos.
- "Pedido confirmado!" (display 26) e "Pedido #CR-4821 · Pix aprovado".
- Card com 3 linhas (ícone circular de 36): Previsão de entrega "20:15 – 20:30"; "4 itens · R$ 170,50" e "Malbec, Essência, Carvão, Gelo"; Entregar em "Rua das Flores, 120 – Centro".
- NoticeCard: "Separe um documento com foto para receber."
- Botões: "Acompanhar pedido" (`navigation`) e ghost "Voltar ao início".

### Fluxo 04 · Entrega e rastreio

**16 Rastreio do pedido** (`16-rastreio.png`)
- Mapa em tela cheia (0–470) com rota dourada, pin da loja (círculo gold com `store`), pin da casa (círculo wine com `house`) e o entregador (círculo com `bike` e halo), atualizado em tempo real.
- Botões flutuantes: voltar e "Ajuda" (`message-circle`).
- Bottom sheet (y 430, raio 28, com handle):
  - "Chega em" + **"12 min"** (32 bold); à direita, "Previsão 20:24".
  - Status em texto: "Seu pedido saiu para entrega".
  - Stepper de 4 etapas: Confirmado ✓ · Preparando ✓ · **A caminho** (atual, com halo) · Entregue.
  - Card do entregador: avatar, "Carlos M.", ★ 4,9 · Moto · ABC-1D23, botões de chat e ligar (gold).
  - Card "Código de entrega · Informe ao entregador" com **4 8 2 1** em destaque.
  - Link "Ver detalhes do pedido".

**17 Entregador na porta** (`17-entregador-na-porta.png`)
- Disparado quando o entregador marca "cheguei" (também gera push).
- Ícone `bike` em círculo gold, "Seu pedido chegou!" e "O entregador está na sua porta. Confira os itens antes de receber."
- "Informe este código ao entregador": 4 caixas de 64×72 com os dígitos.
- Card danger "Verificação de idade": "Apresente um documento oficial com foto. Sem documento, bebidas e produtos de tabaco não podem ser entregues."
- Card "4 itens · Pago via Pix" com "Ver itens".
- Botões: "Recebi meu pedido" (`check`) e ghost "Tive um problema com a entrega" (abre o suporte).

**18 Avaliação** (`18-avaliacao.png`)
- Header com `x` e "Avaliar pedido". `circle-check-big` verde e "Entregue às 20:22 · #CR-4821".
- "Como foi sua entrega?" com 5 estrelas de 40 (4 preenchidas) e rótulo dinâmico ("Muito bom!").
- "O que você mais gostou?": chips de seleção múltipla (Entrega rápida, Bebida gelada, Entregador educado, Embalagem caprichada).
- "Deixe um comentário" (textarea opcional).
- "Gorjeta para o entregador · Opcional": R$ 2 | R$ 5 (ativo) | R$ 10 | Outro.
- Botão "Enviar avaliação".

### Fluxo 05 · Conta e notificações

**19 Notificações** (`19-notificacoes.png`)
- Header "Notificações" com "Ler todas". Filtros em chip: Todas, Pedidos e Promoções.
- Agrupadas por "Hoje" e "Ontem". Cada item tem ícone circular de 44 com fundo tint, título 14/600, corpo 12 muted, horário à direita e ponto gold se não lida.
  - Pedido a caminho · "Carlos saiu com seu pedido #CR-4821. Chega em ~12 min." · agora
  - Pagamento aprovado · "Recebemos seu Pix de R$ 170,50." · 12 min
  - Happy Hour: 15% off · "Válido hoje, das 18h às 21h." · 2 h
  - Avalie seu último pedido · ontem
  - Você ganhou um cupom · "CREMA10: R$ 10 de desconto na próxima compra." · ontem
  - Chegaram essências novas · ontem
- Tocar abre o destino (rastreio, avaliação, cupons, categoria).

**20 Meus pedidos** (`20-meus-pedidos.png`)
- Título display "Meus pedidos" e chips "Em andamento" | "Histórico".
- Card do pedido ativo (borda gold): "#CR-4821" + badge "A caminho", "Hoje, 19:52 · 4 itens", barra de progresso em 4 segmentos, "Chega em ~12 min", miniaturas + "+1", total e botão "Acompanhar entrega".
- "Anteriores": cards com miniatura, número, badge de status, itens, data · valor e link "Pedir de novo" (`rotate-ccw`, recria a sacola).
- TabBar (Pedidos ativo).

**21 Perfil** (`21-perfil.png`)
- Título "Perfil" com engrenagem (configurações).
- Avatar de 64 (borda gold), "Rafael Costa", e-mail e chevron (abre Meus dados).
- **Card Clube Crema** (gradiente clubeCrema, texto escuro): "CLUBE CREMA", "Nível Ouro", "320 pts", barra de progresso e "Faltam 180 pts para ganhar R$ 20 de desconto".
- Menu (linhas de 54, ícone goldLight): Meus dados · Endereços · Formas de pagamento · Cupons (badge 2) · Favoritos · Notificações · Ajuda e suporte · **Sair** (wineLight, com confirmação).
- TabBar (Perfil ativo).

---

## 4. Modelos de dados (TypeScript)

```ts
type Niche = 'adega' | 'tabacaria';

interface Category { id: string; niche: Niche; name: string; icon: string; parentId?: string; }

interface Product {
  id: string; niche: Niche; categoryId: string;
  name: string; description: string; images: string[];
  price: number; oldPrice?: number;          // em centavos
  unit: string;                               // '750ml', '50g', '1kg'
  origin?: string;                            // 'Argentina'
  rating: number; reviewsCount: number;
  tags: ('gelado' | 'novo' | 'promo')[];
  ageRestricted: true;                        // todo o catálogo é 18+
  healthWarning?: string;                     // obrigatório para tabaco
  variantGroups?: VariantGroup[];             // sabor, tamanho
  addons?: Addon[];                           // gelar, saca-rolhas, taças
  stock: number; active: boolean;
}
interface VariantGroup { id: string; name: string; required: boolean; options: { id: string; label: string; priceDelta?: number; price?: number }[] }
interface Addon { id: string; name: string; price: number; default?: boolean }

interface CartItem { productId: string; quantity: number; variantSelections: Record<string, string>; addonIds: string[]; unitPrice: number; }

interface Address { id: string; label: 'casa' | 'trabalho' | 'outro'; cep: string; street: string; number: string; complement?: string; district: string; city: string; lat: number; lng: number; }

type PaymentMethod =
  | { type: 'pix' }
  | { type: 'credit_card'; cardId: string }
  | { type: 'card_on_delivery' }
  | { type: 'cash'; changeFor?: number };

type OrderStatus = 'aguardando_pagamento' | 'confirmado' | 'preparando' | 'a_caminho' | 'chegou' | 'entregue' | 'cancelado';

interface Order {
  id: string; code: string;                   // '#CR-4821'
  items: CartItem[]; addressId: string; schedule: 'now' | string;
  payment: PaymentMethod; couponCode?: string; notes?: string;
  subtotal: number; deliveryFee: number; discount: number; tip?: number; total: number;
  status: OrderStatus; statusHistory: { status: OrderStatus; at: string }[];
  deliveryCode: string;                       // 4 dígitos
  eta?: { from: string; to: string };
  courier?: { name: string; rating: number; vehicle: string; plate: string; phone: string; lat: number; lng: number };
  rating?: { stars: number; tags: string[]; comment?: string };
  createdAt: string;
}

interface User { id: string; name: string; cpf: string; birthDate: string; phone: string; email: string; ageConfirmedAt: string; loyaltyPoints: number; loyaltyTier: 'prata' | 'ouro' | 'black'; }

interface Notification { id: string; type: 'pedido' | 'pagamento' | 'promocao' | 'avaliacao' | 'cupom' | 'novidade'; title: string; body: string; createdAt: string; read: boolean; deeplink: string; }
```

Valores monetários **em centavos** no estado. Formatar com `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.

---

## 5. Regras de negócio

1. **Idade**: o gate +18 é obrigatório na primeira abertura; o cadastro exige data de nascimento (18 anos ou mais) e o aceite. Na entrega, o entregador confere o documento. Sem documento, a entrega não é concluída e o pedido volta (definir política de estorno).
2. **Código de entrega**: 4 dígitos aleatórios por pedido. O app do entregador (fora do escopo) valida o código para marcar "entregue".
3. **Tabaco**: todo produto da Tabacaria exibe o selo 18+ e a advertência do Ministério da Saúde. **Não vender cigarros eletrônicos, vapes ou pods** (proibidos pela Anvisa).
4. **Status do pedido**: aguardando_pagamento (só Pix/cartão) → confirmado → preparando → a_caminho → chegou → entregue. Cancelamento só é permitido até "preparando".
5. **Pix**: expira em 10 minutos. Depois disso, o pedido fica em aguardando_pagamento com a opção de gerar um novo código.
6. **Troco**: se o pagamento for em dinheiro com troco, o valor informado precisa ser maior que o total.
7. **Cupom**: um por pedido. Validar o pedido mínimo e a validade.
8. **Clube Crema**: 1 ponto para cada R$ 1 gasto (sugestão). 500 pontos = R$ 20 de desconto. Níveis prata/ouro/black.
9. **Horário de funcionamento e raio de entrega**: bloquear o checkout fora do horário ou fora da área (oferecer agendamento).
10. **Avaliação**: disponível depois de "entregue". Gorjeta opcional, somada ao repasse do entregador.

> Atenção (validar com um advogado): a publicidade de produtos de tabaco é bastante restrita no Brasil (Lei 9.294/96). Banners promocionais de itens de tabacaria, como o "Combo Narguilé" da home, e notificações push de promoção de tabaco precisam ser revisados juridicamente antes do lançamento.

---

## 6. Dados mock iniciais

Use exatamente os produtos, preços, pedidos (#CR-4821 a caminho; #CR-4790 e #CR-4733 entregues; #CR-4701 cancelado), notificações e o usuário (Rafael Costa, Nível Ouro, 320 pts) descritos nas telas acima, para o app ficar igual ao Figma.
