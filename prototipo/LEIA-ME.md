# Protótipo navegável: Central dos Bichos

O protótipo são páginas HTML estáticas: não há banco de dados, nada é gravado e todos os dados são simulados.

## Como abrir

**Jeito mais simples:** dê dois cliques em `index.html`. Abre a página com todas as telas.

**Jeito recomendado** (para os mapas carregarem sempre): rode um servidor local a partir da pasta do projeto,

```
python -m http.server 8080 --directory prototipo
```

e abra http://localhost:8080 no navegador.

As telas do cidadão e da equipe de campo foram feitas para celular; no computador, elas aparecem centralizadas como um aparelho. As telas do painel foram feitas para computador.

## Requer internet

- **Fontes:** Nunito e Atkinson Hyperlegible Next, do Google Fonts.
- **Mapas:** Leaflet 1.9.4 e leaflet.heat 0.2.0, carregados pelo unpkg, com o mapa base do OpenStreetMap.

Sem internet, as telas funcionam com fontes do sistema, e os mapas mostram um aviso no lugar.

## O que é simulado

- **IA da etapa "Conte o que acontece" (C-04 e C-05):** reconhece palavras do relato e preenche a situação, o animal, a quantidade, as condições e a prioridade sugerida. Experimente escrever outro relato. A IA real fica para o sistema oficial.
- **Mapa da situação (P-05) e Alertas e recomendações (P-11):** semáforo com dois sinais, recomendações que podem ser aceitas, executadas, concluídas ou recusadas, e botões de simulação. "Equipe atendeu os casos em aberto" e "Avançar 60 dias" mostram como uma área volta ao verde. As mudanças valem até fechar o navegador, e "Restaurar dados" volta ao começo.
- **Dados:** pontos no mapa, números, nomes, protocolos e prazos são fictícios.
- **Bairros:** "A" a "H" são provisórios, até chegar a base oficial.

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `cidadao/` | C-01 a C-15: registro de incidente, acompanhamento, castração, adoção e lar temporário |
| `painel/` | P-01 a P-10: entrada, fila, triagem, registro de atendimento, mapa, indicadores, castração e adoção |
| `campo/` | E-01 e E-02: equipe de campo |
| `css/estilo.css` | Cores, fontes, botões e componentes (segue `docs/identidade-visual.md`) |
| `js/app.js` | Ícones, cabeçalhos repetidos, opções clicáveis, IA simulada e mapas |
