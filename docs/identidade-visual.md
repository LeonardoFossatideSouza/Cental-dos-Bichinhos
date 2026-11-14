# Identidade Visual: Central dos Bichos

Versão 0.2, de 14/11/2026. Botões principais em verde (D-23), com visual de botão reforçado. **Aguardando validação do sistema de botões.**
Direção escolhida: **B, "Acolhedor do café"**, adaptada ao logo do projeto.

---

## 1. Marca

| Item | Definição |
|---|---|
| Nome | **Central dos Bichos** |
| Sigla | **CB** |
| Arquitetura (D-14) | A marca do projeto em destaque. O brasão aparece como selo institucional numa faixa superior com o texto "Prefeitura Municipal de São Sebastião do Paraíso" |
| Logo recebido | `assets/marca/logo-cb-v0.jpg`: imagem de 1600 × 1600 px, sem versão vetorial |

### 1.1 Leitura do logo

**Pontos fortes**
- É acolhedor e fácil de lembrar, e combina com a direção B.
- A árvore amarela lembra o **ipê-amarelo**, símbolo forte em Minas Gerais. O amarelo conversa com o ouro do brasão, e o marrom com o café.
- A pata na copa diz "animais e proteção" sem precisar de texto.

**Ajustes necessários antes do uso oficial**
1. **É uma ilustração, não um símbolo.** Abaixo de uns 64 px, o cão, os galhos e a pata viram ruído. Isso afeta o ícone da aba do navegador, o ícone do app instalado, a foto de perfil no WhatsApp e o cabeçalho no celular. Precisa de versões simplificadas (seção 1.2).
2. **Só "CB" não comunica.** Quem vê pela primeira vez não sabe o que é. O nome completo, "Central dos Bichos", precisa aparecer junto.
3. **Arquivo:** a imagem é JPG, com bordas comprimidas, e alguns galhos não se ligam ao tronco. Para impressão e uso oficial, é preciso um **redesenho vetorial (SVG)**.
4. **Contraste:** o amarelo da copa sobre fundo creme ou branco tem contraste de apenas 1,55:1. O contorno da árvore some em fundos claros. Fundos recomendados: branco com contorno, ou o próprio marrom.
5. **Tom:** o cão sorridente funciona no portal e na adoção. Em telas de registro de animal ferido ou em risco, use o símbolo simplificado, mais sóbrio.
6. **Representação:** o logo mostra só um cão. Fotos e ilustrações das demais telas devem incluir gatos, que são boa parte do público da castração.
7. **Autoria e direitos:** para o sistema oficial, a prefeitura precisará de autorização formal (cessão de direitos) de quem criou o logo. Se o logo foi gerado com uma ferramenta de IA, a proteção de autoria é incerta pela lei brasileira (Lei 9.610/98). É mais um motivo para o redesenho vetorial por uma pessoa identificada.

### 1.2 Versões da marca (a produzir)

| Versão | Conteúdo | Onde usar |
|---|---|---|
| Completa | Ilustração + "Central dos Bichos" | Página inicial, apresentação, material impresso |
| Horizontal | Símbolo simplificado + "Central dos Bichos" ao lado | Cabeçalho do portal e do painel |
| Símbolo | Copa do ipê + pata, sem o cão e sem os galhos | Ícone do app, ícone da aba do navegador, telas de registro |
| Monograma | "CB" | Usos muito pequenos ou de apoio |

### 1.3 Regras de uso
- **Tamanho mínimo:** versão completa com 120 px; símbolo com 24 px.
- **Área livre:** ao redor do logo, no mínimo a altura da letra "C".
- **Brasão:** nunca alterado, recortado ou recolorido. Sempre acompanhado de "Prefeitura Municipal de São Sebastião do Paraíso".
- **Sem logo de gestão** nem nome ou foto de autoridades (art. 37, §1º, da Constituição).

---

## 2. Cores

As cores do logo foram estimadas visualmente e serão confirmadas com o arquivo vetorial. O contraste foi calculado pelo método da WCAG 2.1.

| Token | Cor | Uso | Contraste verificado |
|---|---|---|---|
| `marrom-cb` | `#6B3F24` | Marca, títulos e **anel de foco** do teclado | Sobre creme: 8,32; sobre branco: 8,89 |
| `marrom-cb-escuro` | `#55311C` | Títulos em destaque | Branco sobre ele: 11,40 |
| `amarelo-ipe` | `#F5C232` | Destaques e fundos de chamadas, **sempre com texto marrom ou escuro** | Marrom sobre ele: 5,35; texto escuro: 9,22 |
| `amarelo-claro` | `#FCEFC7` | Fundo de avisos e cartões de destaque | Marrom sobre ele: 7,75 |
| `marrom-claro` | `#B06F3E` | Só em ilustrações | 3,79 (não usar em texto) |
| `creme` | `#FBF7EF` | Fundo das páginas | — |
| `branco` | `#FFFFFF` | Cartões e área onde fica o logo | — |
| `verde` | `#2E6B25` | **Botões principais**, borda e texto dos botões secundários, sucesso e confirmação | Sobre creme: 6,05; branco sobre ele: 6,47 |
| `verde-hover` | `#255A1E` | Botão principal ao passar o mouse | Branco sobre ele: 8,20 |
| `verde-escuro` | `#1F4A19` | Base do botão (efeito de relevo) e botão pressionado | Branco sobre ele: 10,23 |
| `verde-claro` | `#E8F1E4` | Fundo do botão secundário ao passar o mouse | Verde-escuro sobre ele: 8,84 |
| `azul-prefeitura` | `#0B5E8E` | Faixa institucional com o brasão | Branco sobre ele: 6,99 |
| `texto` | `#2A2420` | Texto principal | Sobre creme: 14,33 |
| `texto-secundario` | `#6B5F55` | Texto de apoio | Sobre creme: 5,79 |
| `critico` | `#B3261E` | **Exclusivo** para prioridade crítica e alertas | Branco sobre ele: 6,54 |

**Regras**
- O amarelo nunca é usado como cor de texto, nem atrás do logo.
- O vermelho não é usado como decoração.
- O terracota da proposta original saiu: o marrom do logo ocupa o lugar dele.

### Etiquetas de prioridade (sempre com o nome escrito, nunca só a cor)

| Prioridade | Fundo | Texto | Contraste |
|---|---|---|---|
| Crítica | `#B3261E` | `#FFFFFF` | 6,54 |
| Alta | `#FCE3D2` | `#8A3A0E` | 6,34 |
| Média | `#FFF1BF` | `#6B4E00` | 6,85 |
| Baixa | `#E3F1FA` | `#0B4F7A` | 7,55 |

---

## 3. Tipografia

| Uso | Fonte | Por quê |
|---|---|---|
| Títulos | **Nunito** (pesos 700 e 800) | Arredondada, combina com o traço amigável do logo |
| Textos, formulários e painel | **Atkinson Hyperlegible Next** (pesos 400 e 700) | Criada para pessoas com baixa visão, diferencia bem letras parecidas como l/I e 0/O |

As duas fontes são gratuitas (Google Fonts, licença OFL). As letras "CB" do logo ficam só no logo, não vão para a interface.

- **Tamanho mínimo de texto:** 16 px no celular.
- **Botões:** altura mínima de 48 px, para toque fácil.

---

## 4. Botões

O objetivo é que **qualquer pessoa reconheça na hora o que é clicável**. Por isso os botões não são planos: têm relevo, borda, ícone e seta.

| Tipo | Aparência | Quando usar |
|---|---|---|
| **Principal** | Fundo verde sólido, texto branco em negrito, ícone à esquerda. Uma "base" verde-escura de 4 px embaixo dá a sensação de botão físico. Altura de 56 px no celular e largura total | **Uma única ação principal por tela**, como "Registrar incidente", "Enviar registro" ou "Confirmar inscrição" |
| **Secundário** | Fundo branco, borda verde de 2 px, texto verde em negrito, mesma base de relevo em verde-escuro | Ações alternativas: "Acompanhar registro", "Voltar" |
| **Cartão de serviço** | Cartão branco com borda de 2 px, ícone num círculo colorido, título em negrito, uma linha de explicação e **seta ›** à direita. Base de relevo de 4 px | Lista de serviços da página inicial e menus |
| **Link** | Texto verde **sublinhado** | Ações de menor importância dentro de textos: "ver política de privacidade" |
| **Emergência** | Fundo vermelho `critico`, ícone de telefone, texto "Ligar 193" | Só na tela de perigo imediato |

**Estados**
- **Mouse por cima:** a cor escurece (`verde-hover`) ou o fundo fica verde-claro, no caso do secundário.
- **Pressionado:** o botão "afunda" 2 px e a base de relevo some.
- **Foco pelo teclado:** anel marrom de 3 px, afastado 2 px do botão. Nunca é removido.
- **Carregando:** o texto vira "Enviando…" com indicador giratório, e o botão continua visível.
- **Desabilitado:** evitar. Prefira deixar o botão ativo e explicar o que falta quando a pessoa tocar nele.

**Tamanho e espaçamento:** área de toque mínima de 48 × 48 px e no mínimo 12 px entre botões. O texto do botão é sempre um verbo, sem caixa-alta.

## 5. Forma e elementos

- **Cantos:** botões com 14 px de raio; cartões com 16 px.
- **Ícones:** de contorno, traço uniforme, sempre acompanhados de texto nos serviços.
- **Grafismos:** folhas e flores de ipê como detalhe pontual; a pata como marcador.
- **Fotos de animais:** reais, com boa luz, sem imagens chocantes de animais feridos nas páginas públicas.

## 6. Tom de voz

- Trate o cidadão por "você", com frases curtas e verbos de ação: "Registrar incidente", "Acompanhar registro".
- Use "registro", nunca "denúncia" (D-25): o cidadão colabora com a prefeitura, não acusa ninguém.
- **Honestidade sobre o atendimento:** diga "Seu registro foi recebido e será analisado pela equipe", nunca "Vamos resgatar o animal".
- Acolhedor nos módulos de adoção e castração; sóbrio e objetivo nos de registro e emergência.

---

## 7. Pendências

1. Validar o sistema de botões (seção 4).
2. Arquivo original do logo e, de preferência, uma versão vetorial (SVG, AI ou PDF), mais a identificação de quem o criou.
3. Versões simplificadas (horizontal, símbolo e monograma). Posso fazer rascunhos em SVG para o protótipo, mas a versão oficial deve ser feita por um designer.
4. Brasão em arquivo vetorial.
