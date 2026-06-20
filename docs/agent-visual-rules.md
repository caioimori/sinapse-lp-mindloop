# MindLoop -- Regras Visuais Inegociaveis para Agentes de IA

> Documento de governanca visual. Qualquer agente MindLoop gerado por IA
> (homem ou mulher) DEVE seguir TODAS as constantes abaixo. Variacao permitida
> APENAS nos campos marcados como VARIAVEL.

---

## 1. CONSTANTES (nunca mudam entre agentes)

### Iluminacao

| Parametro | Valor |
|-----------|-------|
| Esquema | Rembrandt lighting (triangulo de luz na bochecha oposta) |
| Direcao | Lateral direita do quadro (key light a ~45 graus) |
| Fill ratio | 4:1 ou superior (alto contraste, sombras profundas) |
| Rim/kicker | Nenhum. Sem backlight. Sem hair light |
| Temperatura | Cool (5600-6500K). Nunca quente/dourado |

### Fundo

| Parametro | Valor |
|-----------|-------|
| Cor | Preto solido puro (#000000) |
| Textura | Nenhuma. Sem degrades, sem vinhetas, sem elementos |
| Separacao | O sujeito emerge da escuridao. Sem contorno artificial |

### Enquadramento e Pose

| Parametro | Valor |
|-----------|-------|
| Crop | Do peito para cima (medium close-up) |
| Rotacao do rosto | 10-15 graus (quase frontal, levemente virado) |
| Direcao do olhar | Direto na camera. Sem excecoes |
| Postura | Ombros relaxados, leve inclinacao para frente |
| Maos | Nao visiveis (fora do enquadramento) |

### Expressao

| Parametro | Valor |
|-----------|-------|
| Boca | Labios fechados, sem sorriso, sem tensao |
| Olhos | Abertos naturalmente, sem squint exagerado |
| Sobrancelhas | Neutras. Sem franzir, sem levantar |
| Mood geral | Calma confiante. Presenca executiva. Nao intimidador, nao amigavel |

### Vestuario

| Parametro | Valor |
|-----------|-------|
| Peca | Gola alta (turtleneck / mock neck) |
| Cor | Cinza-chumbo escuro (dark charcoal, ~#3A3A3A a #4A4A4A) |
| Textura do tecido | Malha fina, matte. Sem brilho, sem textura visivel |
| Acessorios | ZERO. Sem relogio, sem brinco, sem colar, sem oculos |

### Tecnico (Camera e Pos)

| Parametro | Valor |
|-----------|-------|
| Lente | 85mm equivalente |
| Abertura | f/2.8 (bokeh suave no ombro, foco critico no rosto) |
| ISO/ruido | Limpo. Sem grain analogico |
| Color grading | Desaturado (-30 a -40% saturacao), cool-toned |
| Contraste | Levemente elevado. Pretos profundos, highlights contidos |
| Sharpness | Alta no rosto (poros visiveis), suave nos ombros |
| Aspect ratio | 3:4 (retrato) |
| Resolucao minima | 1024x1365px |

### Estetica e Referencia

| Parametro | Valor |
|-----------|-------|
| Mood board | Editorial premium: Bloomberg Businessweek, Wired, Kinfolk |
| Nao e | Stock photo, LinkedIn headshot, glamour, fashion, retrato casual |
| Grain overlay | NAO na foto. Grain e aplicado via CSS na LP (noise-overlay) |
| Wireframe 3D | Aplicado via Unicorn Studio como camada SOBRE a foto, nao na geracao |

---

## 2. VARIAVEIS (o que muda entre agentes)

| Variavel | Range permitido | Notas |
|----------|----------------|-------|
| Genero | Masculino ou feminino | Manter mesma estetica para ambos |
| Etnia/tom de pele | Qualquer | Diversidade e desejada. A iluminacao Rembrandt funciona em todos os tons |
| Idade aparente | 28-40 anos | Velho o suficiente para transmitir competencia, jovem o suficiente para IA |
| Formato de rosto | Qualquer | Oval, angular, redondo -- sem restricao |
| Cabelo | Qualquer estilo arrumado | Coque baixo, cabelo curto, raspado, tranças presas, liso preso. Deve ser "organizado" e nao cobrir o rosto |
| Cor do cabelo | Qualquer natural | Preto, castanho, loiro, ruivo, grisalho. Sem cores fantasia |
| Barba (masc.) | Limpo ou barba curta aparada | Sem barba longa, sem cavanhaque isolado |
| Direcao da rotacao | 10-15 graus para esquerda OU direita | Manter coerente com a key light (triangulo Rembrandt no lado oposto) |
| Tamanho do sujeito no frame | +/- 10% de variacao | Todos devem parecer "a mesma distancia da camera" |
| Seed/variacao de rosto | Unico por agente | Cada agente e uma pessoa diferente |

---

## 3. PROIBICOES (o que NUNCA fazer)

### Proibido no sujeito
- Sorriso (nem leve)
- Dentes visiveis
- Olhar desviado (para cima, para baixo, para o lado)
- Oculos de qualquer tipo
- Acessorios (brincos, colares, piercings, relogios)
- Maquiagem visivel/editorial (batom vermelho, sombra colorida)
- Tatuagens visiveis
- Cabelo solto cobrindo partes do rosto
- Roupa com estampas, logos, texturas fortes, ou cores que nao sejam cinza-chumbo
- Gola V, camisa, terno, camiseta, jaqueta, ou qualquer peca que nao seja gola alta

### Proibido no cenario/composicao
- Qualquer elemento de fundo (moveis, paredes, escritorio, natureza)
- Degrades no fundo
- Lens flare, bokeh no fundo, particulas
- Iluminacao flat/frontal
- Iluminacao quente/dourada/sunset
- Split lighting (metade do rosto 100% escuro)
- Iluminacao por baixo (horror lighting)
- Dutch angle ou qualquer inclinacao de camera
- Enquadramento de corpo inteiro ou cintura para cima
- Composicao com mais de uma pessoa

### Proibido no pos-processamento
- Filtros Instagram/VSCO
- Grain analogico excessivo (grain e via CSS)
- Saturacao alta
- Tons sepia ou amarelados
- HDR ou tone mapping agressivo
- Vinheta escura artificial
- Skin smoothing excessivo (pele deve ter textura real)

---

## 4. TEMPLATE DE PROMPT

Usar esta estrutura como base para gerar qualquer agente. Substituir apenas os campos entre `{colchetes}`.

```
Portrait photograph of a {genero: man/woman}, {etnia_descricao}, age {idade: 28-40},
wearing a dark charcoal gray turtleneck sweater. {cabelo_descricao}.

Rembrandt lighting from the {lado_luz: right/left} side, 4:1 light ratio,
cool-toned color temperature. Pure black solid background, no elements.

Subject rotated {angulo: 10-15} degrees to the {direcao_rotacao: left/right},
looking directly into the camera. Expression: calm, confident, lips closed,
no smile. Executive presence.

Shot at 85mm f/2.8, medium close-up framing from chest up.
Desaturated cool-toned color grading, deep blacks, contained highlights.
Sharp focus on face with visible skin texture, soft falloff on shoulders.

Style: editorial portrait, Bloomberg Businessweek aesthetic.
No accessories, no jewelry, no glasses, no visible tattoos, no makeup.
No background elements, no lens flare, no grain.
Aspect ratio 3:4, high resolution.
```

### Exemplos de preenchimento

**Agente 01 (a referencia original):**
```
Portrait photograph of a woman, white/caucasian, age 30,
wearing a dark charcoal gray turtleneck sweater. Hair pulled back
in a low bun, dark brown.

Rembrandt lighting from the right side, 4:1 light ratio,
cool-toned color temperature. Pure black solid background, no elements.

Subject rotated 12 degrees to the left, looking directly into the camera.
Expression: calm, confident, lips closed, no smile. Executive presence.

Shot at 85mm f/2.8, medium close-up framing from chest up.
Desaturated cool-toned color grading, deep blacks, contained highlights.
Sharp focus on face with visible skin texture, soft falloff on shoulders.

Style: editorial portrait, Bloomberg Businessweek aesthetic.
No accessories, no jewelry, no glasses, no visible tattoos, no makeup.
No background elements, no lens flare, no grain.
Aspect ratio 3:4, high resolution.
```

**Agente 02 (exemplo homem):**
```
Portrait photograph of a man, Black/African descent, age 35,
wearing a dark charcoal gray turtleneck sweater. Short cropped hair,
dark black, neatly trimmed. Clean-shaven.

Rembrandt lighting from the right side, 4:1 light ratio,
cool-toned color temperature. Pure black solid background, no elements.

Subject rotated 10 degrees to the left, looking directly into the camera.
Expression: calm, confident, lips closed, no smile. Executive presence.

Shot at 85mm f/2.8, medium close-up framing from chest up.
Desaturated cool-toned color grading, deep blacks, contained highlights.
Sharp focus on face with visible skin texture, soft falloff on shoulders.

Style: editorial portrait, Bloomberg Businessweek aesthetic.
No accessories, no jewelry, no glasses, no visible tattoos, no makeup.
No background elements, no lens flare, no grain.
Aspect ratio 3:4, high resolution.
```

**Agente 03 (exemplo mulher asiatica):**
```
Portrait photograph of a woman, East Asian, age 32,
wearing a dark charcoal gray turtleneck sweater. Straight black hair
pulled back tightly, low ponytail.

Rembrandt lighting from the right side, 4:1 light ratio,
cool-toned color temperature. Pure black solid background, no elements.

Subject rotated 14 degrees to the left, looking directly into the camera.
Expression: calm, confident, lips closed, no smile. Executive presence.

Shot at 85mm f/2.8, medium close-up framing from chest up.
Desaturated cool-toned color grading, deep blacks, contained highlights.
Sharp focus on face with visible skin texture, soft falloff on shoulders.

Style: editorial portrait, Bloomberg Businessweek aesthetic.
No accessories, no jewelry, no glasses, no visible tattoos, no makeup.
No background elements, no lens flare, no grain.
Aspect ratio 3:4, high resolution.
```

---

## 5. CHECKLIST PRE-PUBLICACAO

Antes de usar qualquer foto gerada na LP, verificar:

- [ ] Fundo e preto puro sem artefatos
- [ ] Triangulo de Rembrandt visivel na bochecha
- [ ] Olhar direto na camera
- [ ] Sem sorriso, labios fechados
- [ ] Gola alta cinza-chumbo visivel
- [ ] Sem acessorios visiveis
- [ ] Color grading desaturado e cool
- [ ] Enquadramento do peito para cima
- [ ] Resolucao minima 1024x1365px
- [ ] Rotacao facial entre 10-15 graus
- [ ] Pele com textura real (nao plastic/smooth)
- [ ] Quando lado a lado com outros agentes, parece "a mesma sessao de fotos"

---

## 6. PIPELINE POS-GERACAO

```
1. Gerar imagem via prompt template
2. Verificar checklist acima
3. Se necessario, regenerar (nao tentar "salvar" com edicao)
4. Exportar em 3:4, minimo 1024x1365
5. Aplicar wireframe 3D via Unicorn Studio (camada separada)
6. Integrar na LP com noise-overlay via CSS
```

---

*MindLoop Agent Visual Governance v1.0 -- 2026-04-10*
