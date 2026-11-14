# Visão do Produto e Fluxos: protótipo para apresentação

Central dos Bichos, plataforma municipal de proteção animal para São Sebastião do Paraíso (MG)

Versão 1.3, de 14/11/2026. **Aprovada.** Mudanças desde a 1.0:
- sem WhatsApp (D-09);
- equipe de campo dividida em E-01 e E-02;
- **"denúncia" passa a ser "registro de animal abandonado"** (D-25).
- **versão 1.3:** o botão principal passa a ser **"Registrar incidente"** (D-30).

Os valores marcados como *ilustrativo* servem só para o protótipo; a Secretaria vai definir os valores reais.

---

## 1. Visão

> Hoje, quem encontra um animal abandonado em São Sebastião do Paraíso só tem o telefone para avisar a prefeitura, não recebe retorno e não deixa nenhum dado que ajude a planejar. A **Central dos Bichos** é o canal único da proteção animal no município, para os moradores e para a Secretaria Municipal de Meio Ambiente. Ela registra cada caso com a localização, dá protocolo e retorno ao cidadão e transforma os registros em mapa e indicadores para planejar ações. Ligações e mensagens soltas não deixam histórico; a plataforma deixa.

**Mensagem central da apresentação:** *"Hoje o registro entra por telefone e some. Com a plataforma, cada caso tem endereço, protocolo, responsável, prazo e resposta, e a soma dos casos mostra onde agir."*

**Nomenclatura (D-25):**
- Para o cidadão, o serviço é **"Registrar incidente"** (D-30), e o resultado é um **registro**. O botão cobre todas as situações do animal: abandonado, ferido, em risco, maus-tratos e as demais.
- No painel, cada caso é uma **ocorrência**.
- Nunca usamos "denúncia" nem "denunciante": dizemos "registro" e "quem registrou".

## 2. Problemas e como o protótipo responde

| Problema declarado | Resposta | Telas |
|---|---|---|
| O cidadão não sabe se o registro foi atendido | Protocolo, página de acompanhamento com as mensagens da equipe e aviso por e-mail (opcional) | C-08, C-09 |
| A prefeitura não sabe onde estão os problemas | Mapa de calor e indicadores por bairro, tipo e período | P-05, P-06 |
| Registros por telefone ou no balcão não viram dados | O atendente faz o registro de atendimento no mesmo sistema, indicando o canal (telefone, presencial ou outro) | P-04 |
| Falta retorno de quem foi a campo | A equipe atualiza a situação pelo celular, com foto, e o cidadão vê a mudança | E-01, E-02 |
| A castração não tem fila visível (a confirmar) | Inscrição online, fila por bairro, campanhas e convocação | C-10, C-11, P-07 a P-09 |
| A adoção está espalhada nas redes sociais | Vitrine única de animais | C-12 a C-14 |

## 3. Perfis representados no protótipo

| Perfil | Quem é | O que precisa |
|---|---|---|
| **Cidadão** | Morador de qualquer idade, quase sempre no celular. Parte do público tem pouca familiaridade com formulários | Registrar em poucos toques, saber o que acontece depois, receber retorno |
| **Atendente** | Servidor da Secretaria que atende o telefone e faz a triagem | Fila única, prioridade sugerida, registrar ligações, falar com o cidadão |
| **Equipe de campo** | Quem vai ao local | Ver as ocorrências atribuídas, chegar ao endereço, atualizar a situação com foto |
| **Gestor** | Secretário ou coordenador | Ver onde e quando os casos acontecem, planejar mutirões e campanhas, prestar contas |

## 4. Escopo do protótipo

- **Desenhado e navegável:**
  - portal;
  - registro de incidente completo (cidadão, painel, mapa, indicadores e equipe de campo).
- **A desenhar:** castração, adoção e lar temporário. Estão bloqueados pelo limite da integração do Figma.
- **No portal, só como "em breve":** ONGs e protetores; empresas e doações.
- **Fora do protótipo, apenas citado na apresentação:**
  - acompanhamento pós-adoção;
  - captação de publicações em redes sociais;
  - câmeras da Guarda Municipal;
  - inteligência territorial avançada.
- **Página separada:** demonstração real da IA (D-18).

## 5. Regras adotadas no protótipo (propostas)

### 5.1 Situação do animal (tipo da ocorrência)
- Abandonado
- Ferido ou doente
- Preso ou em risco
- Agressivo ou com risco a pessoas
- De grande porte solto na via
- Silvestre
- Outro

Dois casos têm tratamento especial:
- **Silvestre:** o cidadão recebe a orientação de quem procurar, e o caso fica registrado como "encaminhado".
- **Maus-tratos:** fica como tipo de situação (D-26). Ao escolher, o cidadão vê também a orientação para procurar a polícia (190, Polícia Civil ou PM de Meio Ambiente).

### 5.2 Prioridade
| Nível | Exemplos |
|---|---|
| CRÍTICA | Animal atacando pessoas, risco imediato à vida |
| ALTA | Gravemente ferido, preso em situação perigosa, risco no trânsito |
| MÉDIA | Abandonado e vulnerável, precisando de atendimento |
| BAIXA | Abandono sem risco imediato |

- A IA **sugere** a prioridade e o atendente **confirma ou altera**. O sistema registra quem decidiu.
- Palavras de alerta ("mordeu", "atacando", "atropelado", "sangrando", "preso") elevam a sugestão.
- Se o cidadão indicar perigo imediato, a primeira tela mostra os números 190, 193 e 153 e deixa registrar mesmo assim.

### 5.3 Situação do registro
| Situação no painel | O que o cidadão vê |
|---|---|
| Recebida | Recebido |
| Em triagem / Aguardando atendimento | Em análise |
| Equipe acionada / Em atendimento | Em atendimento |
| Resolvida / Encerrada | Concluído, com o motivo |

**Motivos de encerramento:**
- animal atendido ou recolhido;
- encaminhado a outro órgão;
- animal não localizado;
- fora da competência da Secretaria;
- duplicado (vinculado a outro protocolo);
- informações insuficientes.

### 5.4 Protocolo e identificação (D-11, D-09)
- **Protocolo:** `SMA-2026-000123` (*ilustrativo*), mais um **código de acesso** de 6 caracteres.
- **Contato:** opcional, só e-mail e só para avisos. Sem WhatsApp e sem SMS.
- **Quem pode ver quem registrou:**
  - a equipe de campo **nunca** vê;
  - o atendente vê o contato só ao clicar em "ver contato" e escrever uma justificativa, e esse acesso fica registrado.

### 5.5 Registros duplicados
Quando há outro registro a menos de 300 m, da mesma espécie, nos últimos 7 dias (*ilustrativo*), o painel mostra "possível duplicada". O atendente decide se vincula os dois; nada é apagado.

### 5.6 Prazos de referência (*ilustrativo*)
| Prioridade | Triagem | Atendimento |
|---|---|---|
| CRÍTICA | Imediato; orientar ligação para 190, 193 ou 153 | Conforme o órgão de emergência |
| ALTA | 2 horas úteis | 24 horas |
| MÉDIA | 1 dia útil | 5 dias úteis |
| BAIXA | 2 dias úteis | Conforme a agenda |

### 5.7 Castração
- **Inscrição:** responsável, bairro e animais.
- **Fila:** por bairro, com critérios definidos pela Secretaria. O cidadão vê a própria posição na fila.
- **Campanha:** data, local e vagas; a convocação segue a ordem da fila. Confirmação e lembrete por e-mail ou pelo portal.
- **No dia:** registro de presença, falta e reagendamento.

### 5.8 Adoção e lar temporário
- **Vitrine:** filtros de busca. Mostra só o bairro onde o animal está, nunca o endereço do lar temporário.
- **Interesse:** manifestação curta primeiro; o questionário completo vem depois do primeiro contato.
- **Decisão:** sempre de uma pessoa, nunca automática.
- **Lar temporário:** cadastro curto.

### 5.9 Mapa da situação: semáforo e recomendações (D-32; limites *ilustrativos*)

**Semáforo por área, com dois sinais (D-33)**

| Cor | Critério | O que pede |
|---|---|---|
| Vermelho · agir agora | **Urgência em aberto agora:** 1 ou mais casos críticos, **ou** 3 ou mais de prioridade alta, **ou** 1 ou mais com prazo vencido | Atender |
| Amarelo · prevenção | Nada urgente em aberto, mas nos **últimos 30 dias** houve 25 ou mais casos novos, **ou** 20 ou mais animais dóceis abandonados, **ou** 10 ou mais de maus-tratos, **ou** 6 ou mais agressivos, **ou** 6 ou mais com filhotes, **ou** 5 ou mais de grande porte na via, **ou** 3 ou mais pontos reincidentes | Prevenção |
| Verde · sob controle | Nenhum dos critérios acima | Manter a rotina |

**Como a área volta ao verde:**
- Atender os casos em aberto tira a área do vermelho na hora.
- Ela sai do amarelo quando os casos novos dos últimos 30 dias caem abaixo dos limites, em geral depois das ações de prevenção.

**Ciclo de vida de cada recomendação:** sugerida → aceita (responsável e prazo) → em execução → concluída → efeito medido 60 dias depois (casos novos por mês, antes e depois). Uma recomendação também pode ser recusada, com o motivo registrado.

**Simulação no protótipo:**
- O botão "Equipe atendeu os casos em aberto" leva a área de vermelho para amarelo.
- Concluir as ações e usar "Avançar 60 dias" leva a área para verde e mostra o efeito. Exemplo: o Bairro A vai de 52 para 22 casos por mês, −58%.
- "Restaurar dados" volta ao início.

**Cores dos incidentes no mapa** (a pessoa escolhe o critério):
- Por prioridade: vermelho = crítica ou alta; amarelo = média; verde = baixa.
- Por andamento: vermelho = aguardando; amarelo = em atendimento; verde = concluído.

Os pontos vermelhos são maiores que os demais, e todas as legendas têm texto, para quem não distingue cores.

**Regras de recomendação**

| Gatilho | Ações sugeridas |
|---|---|
| Muitos animais dóceis abandonados | Mutirão de recolhimento com triagem, campanha de castração no bairro, feira de adoção |
| Indícios de maus-tratos | Fiscalização nos endereços reincidentes, comunicação à Polícia Civil e ao Ministério Público, campanha de conscientização |
| Animais oferecendo risco a pessoas | Ação com a Vigilância em Saúde, avaliação de recolhimento, orientação a escolas e moradores |
| Muitas ninhadas | Castração prioritária de fêmeas, busca ativa, lares temporários para filhotes |
| Grande porte na via | Ação com Posturas e Trânsito, notificação de proprietários, sinalização |
| Pontos de abandono recorrente | Placas educativas, ronda da Guarda Municipal, pedido formal de análise de câmeras |

**Princípios:**
- O sistema **sugere**; quem decide e aciona é a equipe.
- Cada recomendação mostra o motivo, com os números.
- Os limites são definidos pela Secretaria.

**Para o sistema oficial:**
- Comparar as áreas pela proporção de incidentes por habitante (população do IBGE), não pelo número absoluto. Sem isso, bairros grandes sempre aparecem em vermelho.
- Trocar os círculos provisórios pelos limites oficiais dos bairros.

## 6. Fluxos

**F1. Registro pelo cidadão**
`Início → "Registrar incidente" → Há perigo imediato? (sim: 190/193/153 + registrar mesmo assim) → Onde (GPS ou ponto no mapa + referência) → Conte o que acontece (texto livre; IA preenche) → Confira (situação, espécie, quantidade, condições) → Fotos (opcional) → E-mail (opcional) → Protocolo + código + "o que acontece agora"`
Há também um caminho alternativo, "prefiro responder perguntas", que pula o texto livre.

**F2. Registro recebido por telefone**
`Painel → Registro de atendimento (telefone, presencial ou outro) → mesmo formulário, preenchido pelo atendente → protocolo informado a quem fez o contato e enviado por e-mail, se houver`

**F3. Triagem e atendimento**
`Fila → Abrir ocorrência → Sugestão da IA e possíveis duplicadas → Confirmar prioridade → Atribuir equipe → (Campo) atualizar situação com foto → Resolver ou encerrar com motivo → atualização no acompanhamento (e e-mail, se houver)`

**F4. Acompanhamento**
`Início → Acompanhar registro → Protocolo + código → linha do tempo e mensagens da Secretaria`

**F5. Castração**
`Cidadão: inscrição → posição na fila`
`Secretaria: demanda por bairro → criar campanha → convocar → confirmações → lembrete → lista do dia`

**F6. Adoção**
`Vitrine → Ficha → Quero adotar → manifestação de interesse → confirmação`

**F7. Lar temporário**
`Cadastro curto → confirmação`

## 7. Inventário de telas

**Todas prontas no protótipo HTML (`prototipo/`, D-29).** O índice completo está em `prototipo/index.html`.

| ID | Tela | Dispositivo |
|---|---|---|
| C-01 a C-09 | Início, registro em 6 etapas, protocolo e acompanhamento | Celular |
| C-10, C-11 | Castração: inscrição e confirmação com posição na fila | Celular |
| C-12 a C-14 | Adoção: vitrine, ficha do animal e manifestação de interesse | Celular |
| C-15 | Lar temporário: cadastro | Celular |
| P-01 | Entrada no painel, com verificação em duas etapas | Computador |
| P-02 a P-06 | Fila, Detalhe e triagem, Registro de atendimento, Mapa da situação (semáforo e recomendações), Indicadores | Computador |
| P-11 | Alertas e recomendações por área | Computador |
| P-07 a P-09 | Castração: demanda e fila, nova campanha, lista do dia | Computador |
| P-10 | Adoção e lar temporário | Computador |
| E-01, E-02 | Equipe de campo: minhas ocorrências e atualizar ocorrência | Celular |

## 8. Dados simulados

- Todas as telas com dados levam a marca "Dados simulados para demonstração".
- Os bairros "A" a "H" são provisórios até recebermos a base oficial.
- Nomes e contatos são inventados, e não há fotos de pessoas reais.

## 9. Indicadores sugeridos

- Percentual de registros com retorno ao cidadão.
- Tempo médio até a triagem e até a conclusão.
- Ocorrências por bairro, situação e prioridade, além dos locais reincidentes.
- Demanda de castração por bairro e castrações realizadas.
- Interessados em adoção e adoções concluídas.

## 10. Textos que ficaram desatualizados no Figma (D-25)

O protótipo em HTML já usa a nomenclatura nova. O Figma está congelado (D-29), e a tabela abaixo só registra o que ficou diferente lá, caso alguém volte a usá-lo.

| Tela | Texto atual | Texto novo |
|---|---|---|
| C-01 | "Denunciar agora" | "Registrar incidente" (D-30) |
| C-01 | "Acompanhar denúncia" | "Acompanhar registro" |
| C-02 a C-07 | "Nova denúncia" (topo das etapas) | "Novo registro" |
| C-02 | "registre a denúncia aqui também" | "faça o registro aqui também" |
| C-04 | "Você confere e corrige tudo na próxima etapa" | Mantém |
| C-05 | "Maus-tratos" | Mantém (D-26); falta incluir a orientação policial quando ele for escolhido |
| C-07 | "Quer receber notícias da sua denúncia?" | "Quer receber notícias do seu registro?" |
| C-07 | "A equipe que vai ao local não vê quem fez a denúncia." | "A equipe que vai ao local não vê quem fez o registro." |
| C-07 | "Enviar denúncia" | "Enviar registro" |
| C-07 | "Só para avisos sobre esta denúncia" | "Só para avisos sobre este registro" |
| C-08 | "Denúncia registrada" | "Registro recebido" |
| C-08 | "A equipe analisa sua denúncia…" | "A equipe analisa seu registro…" |
| C-08 | "Acompanhar denúncia" | "Acompanhar registro" |
| C-08 | Aviso "Registrar a denúncia não garante…" (componente Aviso) | "Registrar não garante o resgate imediato…" |
| C-09 | "Acompanhar denúncia", "Sua denúncia", "Recebemos sua denúncia" | "Acompanhar registro", "Seu registro", "Recebemos seu registro" |
| P-03 | "Contato do denunciante" | "Contato de quem registrou" |
| E-01 | "Os dados de quem denunciou não aparecem…" | "Os dados de quem registrou não aparecem…" |
| P-04 | Título "Registrar denúncia por telefone"; campo "Telefone ou WhatsApp" | "Registrar por telefone"; "Telefone para retorno" |
| Todas | Fluxo "F1 · Denúncia do cidadão" | "F1 · Registro do cidadão" |
