# Registro de Decisões

Plataforma Municipal Inteligente de Proteção Animal, para São Sebastião do Paraíso (MG)

Cada decisão importante fica registrada aqui: o contexto, as opções avaliadas, a recomendação técnica, quem decidiu e quando.
Status: **Pendente**, **Decidida**, **Adiada**, **Revisada** ou **Descartada**.

Última atualização: 14/11/2026. Etapa 1 concluída; roteiro enxuto em andamento (D-19).

---

## Contexto levantado (Bloco 1, em 14/11/2026)

- **Quem opera:** a própria prefeitura, por meio da Secretaria Municipal de Meio Ambiente.
- **Canal atual de registros (antes chamados de denúncias):** telefone.
- **Dor principal:** falta de comunicação entre a sociedade e a prefeitura, e falta de dados para ações efetivas.
- **Natureza da entrega agora:** MVP de demonstração. Se a prefeitura tiver interesse, desenvolvemos o sistema oficial.
- **Sem resposta ainda:** volume mensal de ligações, como funciona a castração hoje, estrutura de atendimento (equipe, veículo, abrigo).

---

## Decisões tomadas

| ID | Tema | Decisão | Recomendação técnica | Motivo / observação | Data |
|---|---|---|---|---|---|
| D-01 | Como o cidadão faz a denúncia | Formulário guiado em etapas + IA que lê o texto livre e preenche os campos | Igual | Dados previsíveis, mais acessível, funciona sem IA | 14/11/2026 |
| D-02 | Peça central e primeira fase | Denúncias (registro, protocolo, retorno ao cidadão, mapa e indicadores) | Igual | Responde direto à dor declarada: comunicação e dados | 14/11/2026 |
| D-11 | Denúncia anônima | Permitida; contato opcional; identidade oculta para a equipe | Igual | Evita inibir denúncias por medo de retaliação | 14/11/2026 |
| D-15 | Tipo de MVP | **Protótipo de telas**, sem sistema por trás, para apresentar à prefeitura | Demonstrador funcional com dados simulados | Escolhido pelo menor custo e prazo; o sistema oficial só começa se houver interesse | 14/11/2026 |
| D-16 | Escopo do protótipo | Denúncias (cidadão, painel, mapa, indicadores, equipe de campo) + Castração + Adoção e lar temporário. ONGs e empresas aparecem só como "em breve" | — | Mostra a visão completa sem dispersar o esforço | 14/11/2026 |
| D-17 | Ferramenta do protótipo | **Figma** | Protótipo em código | Mapa e gráficos ficam estáticos. Proposta de execução: desenhar as telas em HTML e importá-las no Figma como camadas editáveis | 14/11/2026 |
| D-18 | IA na demonstração | Simulada, com opção de prova real | Igual | O Figma não executa IA. A prova real será uma página web separada, de uma tela só, que exige chave de API (custo de centavos) | 14/11/2026 |
| D-14 | Arquitetura de marca | Marca própria do projeto ("Central dos Bichos") + brasão como selo institucional na faixa superior | Igual | Marca permanente e impessoal; o brasão garante a identificação oficial | 14/11/2026 |
| D-21 | Nome do projeto | **Central dos Bichos**, sigla **CB**, com o logo do usuário (`assets/marca/logo-cb-v0.jpg`) | — | "Central" reforça o canal único. O logo precisa de redesenho vetorial e de versões simplificadas (`docs/identidade-visual.md`) | 14/11/2026 |
| D-22 | Direção visual | **B, "Acolhedor do café"**, adaptada ao logo: marrom e amarelo-ipê como cores de marca, verde para sucesso e castração, azul para a faixa institucional, vermelho só para crítico. Fontes Nunito e Atkinson Hyperlegible Next | B | Combina com a Secretaria de Meio Ambiente e com a identidade local; todas as cores de texto passam no contraste AA | 14/11/2026 |
| D-09 | Canais de aviso ao cidadão | **Sem WhatsApp e sem SMS.** Avisos por e-mail (opcional), mais as mensagens da equipe na página de acompanhamento do protocolo | E-mail + WhatsApp com modelos oficiais | Decisão do usuário por causa da cobrança da Meta. Alternativa gratuita a avaliar no sistema oficial: notificações do navegador | 14/11/2026 |
| D-25 | Nomenclatura do serviço principal | **"Registro de animal abandonado"** substitui "denúncia" em toda a comunicação com o cidadão. No painel continua "ocorrência". Correspondências: "Denunciar agora" → "Registrar animal abandonado"; "Nova denúncia" → "Novo registro"; "Acompanhar denúncia" → "Acompanhar registro"; "Denúncia registrada" → "Registro recebido"; "Enviar denúncia" → "Enviar registro"; "denunciante" → "quem registrou" | — | Decisão do usuário. Tom colaborativo, e não acusatório; a prefeitura não é polícia. Decisões anteriores a esta data mantêm o termo antigo como histórico | 14/11/2026 |
| D-26 | Maus-tratos dentro do registro | **Mantido como tipo de situação.** Ao escolher, o cidadão vê também a orientação para procurar a polícia (190, Polícia Civil ou PM de Meio Ambiente) | Igual | O caso não se perde, a Secretaria pode fiscalizar e o dado entra no mapa | 14/11/2026 |
| D-34 | Nome da tela P-04 | **"Registro de atendimento"** no lugar de "Registrar por telefone" (menu, título e botão "Registrar atendimento" na fila). A tela ganhou o campo "Como o cidadão entrou em contato": telefone, presencial ou outro (e-mail, ofício). Os textos passaram de "ligação" para "atendimento" | — | Decisão do usuário. A Secretaria também atende no balcão e por outros meios; o canal vira dado para os indicadores | 14/11/2026 |
| D-33 | Como uma área volta ao verde (revisa o semáforo da D-32) | **Dois sinais.** Vermelho = urgência em aberto agora (caso crítico, 3 ou mais de prioridade alta, ou prazo vencido). Amarelo = nada urgente, mas os casos novos de 30 dias continuam acima dos limites, o que pede prevenção. Verde = nenhum dos dois. Atender os casos tira a área do vermelho na hora; ela só fica verde quando os casos novos caem. **Recomendações com ciclo de vida:** sugerida → aceita → em execução → concluída → efeito medido (antes e depois), ou recusada com motivo registrado | Igual | O usuário apontou que, antes, a área continuava vermelha mesmo com os casos já resolvidos. Implementado no protótipo, com simulação para a demonstração | 14/11/2026 |
| D-31 | Título da tela inicial | "Viu um animal abandonado, ferido, em risco ou oferecendo risco a pessoas? Avise a prefeitura." | — | Decisão do usuário; deixa claro que o serviço cobre mais que abandono | 14/11/2026 |
| D-32 | Mapa da situação e recomendações | **(1)** O mapa P-05 mostra cada área em semáforo (verde = sob controle, amarelo = atenção, vermelho = crítico), por critérios definidos. **(2)** Os incidentes no mapa usam as mesmas três cores, por prioridade ou por andamento. **(3)** O sistema sugere ações quando os casos sobem, por regras simples e explicáveis: muitos animais dóceis na rua → recolhimento, castração e feira de adoção; indícios de maus-tratos → fiscalização, comunicação à polícia e conscientização; risco a pessoas → Vigilância em Saúde; ninhadas → castração de fêmeas; grande porte na via → Posturas e Trânsito; pontos reincidentes → placas e ronda. **(4)** Nova tela P-11 "Alertas e recomendações" | Regras simples já no MVP; estatística avançada só com mais dados | Pedido do usuário. Antes previsto para a Fase 5, entra agora na versão por regras. A Secretaria define os limites, e a decisão é sempre da equipe | 14/11/2026 |
| D-30 | Texto do botão principal (ajusta a D-25) | **"Registrar incidente"** no lugar de "Registrar animal abandonado". Antes foi cogitado "Registrar ocorrência", trocado pelo usuário. O restante segue a D-25: "Novo registro", "Acompanhar registro", "Registro recebido"; no painel continua "ocorrência" | — | Decisão do usuário. O termo é mais amplo e cobre ferido, em risco e maus-tratos, não só abandono | 14/11/2026 |
| D-29 | Ferramenta do protótipo (revisa a D-17) | **Protótipo completo em HTML** na pasta `prototipo/`: 27 telas navegáveis, com a nomenclatura nova, mapa real da cidade (OpenStreetMap) e IA simulada que reage ao relato. O Figma fica congelado como referência visual e ainda usa "denúncia" | Protótipo em código (a recomendação original da D-17) | O limite do plano gratuito do Figma bloqueou a integração; decisão do usuário | 14/11/2026 |
| D-28 | Material de apresentação | **Não haverá apresentação em slides.** O protótipo navegável no Figma é o material para mostrar à prefeitura | Preparar uma apresentação | Decisão do usuário | 14/11/2026 |
| D-23 | Cor e estilo dos botões principais | **Verde** `#2E6B25`, com visual de botão reforçado: relevo, borda, ícone e seta (`docs/identidade-visual.md`, seção 4) | Marrom do logo | Escolha do usuário; o marrom fica para a marca, os títulos e o foco do teclado | 14/11/2026 |
| D-20 | Visão, regras e fluxos do protótipo | Aprovado o documento `docs/visao-e-fluxos.md` v1.0: regras de ocorrência, os 7 fluxos e as 27 telas | — | Base para a identidade visual e o protótipo | 14/11/2026 |
| D-19 | Roteiro do projeto | Enxuto: visão e fluxos → identidade visual → protótipo → material de apresentação. Requisitos completos, arquitetura, LGPD e contratação só após o interesse da prefeitura | Igual | Evita trabalho descartado antes da validação | 14/11/2026 |

## Decisões pendentes (necessárias para o protótipo)

| ID | Tema | Opções | Recomendação | Depende de |
|---|---|---|---|---|

## Adiadas para o sistema oficial (reabrir se a prefeitura tiver interesse)

| ID | Tema | Recomendação registrada |
|---|---|---|
| D-03 | Arquitetura da aplicação | Next.js + NestJS em repositório único. Reavaliar Supabase, porque o MVP virou protótipo |
| D-04 | Atendimento a vários municípios | Uma instalação e um banco por município |
| D-05 | Papel do n8n | Regras de negócio no código; n8n só para integrações periféricas |
| D-06 | Módulo 10 (redes sociais) | Captação assistida em vez de monitoramento automático |
| D-07 | Módulo 11 (câmeras) | Pedido formal de análise à Guarda Municipal, com registro de acesso |
| D-08 | Hospedagem | Servidor no Brasil ou infraestrutura da prefeitura |
| D-10 | Titularidade e licença do código | Código aberto; infraestrutura e dados da prefeitura |
| D-12 | Mapas | MapLibre com base própria (PMTiles) |
| D-13 | Provedor de IA e envio de dados | Interface independente de fornecedor; nunca enviar nome nem telefone |

---

## Andamento do protótipo

Arquivo no Figma: [Central dos Bichos — Protótipo](https://www.figma.com/design/acPB7MkSiBG2KZYeb4iYc8)

| Data | Entrega | Situação |
|---|---|---|
| 14/11/2026 | Fundação: 21 variáveis de cor, 8 estilos de texto, 3 estilos de relevo, 23 ícones, 9 componentes (Botão com 3 tipos, Cartão de serviço, Faixa da Prefeitura, Cabeçalho CB, Cabeçalho de etapa, Opção/chip, Etiqueta de prioridade, Campo, Aviso) | Pronto |
| 14/11/2026 | Fluxo F1, telas essenciais do cidadão C-01 a C-09, com 19 ligações de navegação e ponto de início "F1 · Denúncia do cidadão" | Aprovado |
| 14/11/2026 | Página "Painel · Secretaria": componentes de computador (Item de menu, Menu lateral, Barra superior, Cartão de indicador, Cabeçalho da tabela, Linha da fila) e telas P-02 Fila, P-03 Detalhe e triagem, P-04 Registro por telefone, P-05 Mapa e P-06 Indicadores, com 29 ligações e ponto de início "F2 · Painel da Secretaria" | Aprovado |
| 14/11/2026 | Figma, equipe de campo: E-01 (minhas ocorrências) e E-02 (atualizar ocorrência), com 5 ligações e ponto de início "F3 · Equipe de campo". C-07 e C-08 passaram de WhatsApp para e-mail | Substituído pelo HTML (D-29) |
| 14/11/2026 | C-16 (mensagens no WhatsApp) | Cancelada (D-09) |
| — | Figma: troca de "denúncia" por "registro" e do campo da P-04 | Não será feita: o Figma está congelado (D-29) |
| 14/11/2026 | **Protótipo em HTML (`prototipo/`)**: todas as 27 telas (C-01 a C-15, P-01 a P-10, E-01, E-02) e uma página inicial com o índice. Conferido no navegador: página inicial, C-01, C-03 (mapa real), C-04 → C-05 (IA simulada com maus-tratos), P-02, P-03, P-05 (mapa de calor), P-08 e P-10 | Aprovado |
| 14/11/2026 | P-05 refeito como "Mapa da situação" (semáforo por área, incidentes em três cores, painel "O que está acontecendo" com recomendações) e nova P-11 "Alertas e recomendações" (D-32). Título da tela inicial ajustado (D-31). Conferido no navegador: P-05 com a troca de cores, P-11 e C-01 no celular | Aprovado, com a ressalva da D-33 |
| 15/11/2026 | Painel (P-01 a P-11) adaptado ao celular e ao tablet: menu recolhido no botão "Menu", colunas empilhadas, tabelas em cartões, mapa com altura proporcional à tela. No computador, as telas continuam iguais. Conferido no navegador em 360, 390, 768 e 1440 px | Pronto |

**Provisórios no protótipo:** o símbolo da marca (pata num círculo amarelo) até chegar o logo vetorial; o escudo no lugar do brasão; o mapa ilustrativo; o formato do protocolo `SMA-2026-000123`; os prazos; os **bairros "A" a "H"**, até chegarem os nomes oficiais; e todos os números do painel, que são simulados.

## Premissas de trabalho (a validar)

- Município com cerca de 70 mil habitantes: volume baixo (centenas de registros por mês).
- A base legal principal da prefeitura é a execução de políticas públicas (LGPD, art. 7º, III e art. 23). O consentimento fica restrito ao que for opcional.
- A IA nunca decide: só sugere a classificação, e a revisão humana é obrigatória.
- Nenhum dado pessoal de quem registra, de adotantes ou de lares temporários aparece publicamente.
- No protótipo, todos os dados são fictícios e marcados como "dados simulados".

## Fatos externos verificados

| Data | Fato | Fonte |
|---|---|---|
| 14/11/2026 | WhatsApp Business: cobrança por mensagem. Desde 01/10/2026, as mensagens de serviço são cobradas acima de 1.000 por mês por número; órgãos públicos e entidades sem fins lucrativos elegíveis estão isentos até 31/12/2027, com elegibilidade confirmada pela Meta. O Brasil migra para cobrança em reais até 30/06/2027. | https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing |
| 14/11/2026 | SinPatinhas (Lei 15.046/2024; ProPatinhas, abril de 2025): adesão municipal voluntária e gratuita; cadastro obrigatório para quem usa recursos federais em castração ou microchipagem. **Não confirmei se existe API de integração.** | https://www.gov.br/pt-br/servicos/cadastrar-caes-e-gatos |
| 14/11/2026 | Preço de referência de IA (Anthropic): Claude Haiku 5.5 a US$ 0,10 / US$ 0,50 por milhão de tokens (entrada / saída); Claude Sonnet 5.5 a US$ 2 / US$ 10. | Documentação da Anthropic |
| 14/11/2026 | Figma MCP: as ferramentas que leem dados têm limite (20 chamadas por mês para assentos View e Collab; 200 por dia para Full e Dev nos planos pagos). As que escrevem em arquivos (como `generate_figma_design` e `create_new_file`) são isentas. O documento não diz se `use_figma` é isenta. | https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/ |
| 14/11/2026 | Conta Figma conectada: plano **Starter** (gratuito), assento **View**. As leituras pela integração ficam limitadas a 20 por mês. Para economizar cota, as telas serão escritas em HTML e enviadas ao Figma pelas ferramentas de escrita, que são isentas do limite. | Consulta `whoami` à integração do Figma |
| 14/11/2026 | **O limite de chamadas da integração do Figma no plano Starter foi atingido** depois de cerca de 20 chamadas, incluindo as de criação de telas. A documentação dizia que as ferramentas de escrita eram isentas, mas na prática `use_figma` contou. Para continuar: esperar o limite reiniciar, mudar para um plano pago com assento Full ou Dev, ou editar manualmente no Figma usando os componentes já prontos. | Erro retornado pela integração |
| A reconfirmar | Meta: API de Grupos do Facebook descontinuada em abril de 2024; CrowdTangle encerrado em agosto de 2024; busca de hashtags no Instagram limitada a 30 por 7 dias. | Conhecimento prévio; reconfirmar se o Módulo 10 for retomado |
