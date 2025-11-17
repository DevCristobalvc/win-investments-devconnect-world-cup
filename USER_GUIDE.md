# 🚀 Guía de Uso - WIN Investments DevConnect World Cup

## Para Usuarios Finales

### Cómo Participar en el Torneo

#### 1️⃣ Acceder a la Aplicación
- Abre tu navegador en: **http://localhost:3000**
- Verás la página principal de WIN Investments

#### 2️⃣ Abrir el Modal del Torneo
- En el header, busca el botón verde **"Devconnect World Cup"**
- Haz clic para ver toda la información del torneo

#### 3️⃣ Revisar Información
Encontrarás:
- 🏆 Premio de **1 ETH**
- 📅 Final el **20 de Noviembre**
- 👥 **6 equipos** de países latinoamericanos
- 🔐 Requisito de **verificación ZK**

#### 4️⃣ Seleccionar Equipo
Elige tu equipo favorito entre:
- 🇦🇷 Crypto Champions (Argentina)
- 🇧🇷 Blockchain Bulls (Brasil)
- 🇺🇾 DeFi Dynamos (Uruguay)
- 🇨🇱 Web3 Warriors (Chile)
- 🇨🇴 NFT Knights (Colombia)
- 🇵🇪 Smart Contract FC (Perú)

#### 5️⃣ Apostar (Opcional)
- Selecciona la criptomoneda: **USDC**, **BTC** o **ETH**
- Ingresa la cantidad que deseas apostar
- *(Nota: En este MVP es solo visual)*

#### 6️⃣ Verificación ZK - Paso 1: Escaneo
- Clic en **"COMENZAR VERIFICACIÓN ZK"**
- Lee la explicación de ZKPassport
- Clic en **"INICIAR ESCANEO"**
- Observa la animación de escaneo (3 segundos)

#### 7️⃣ Verificación ZK - Paso 2: Prueba
- Visualiza cómo se genera la prueba criptográfica
- Lee sobre Zero-Knowledge (datos privados vs públicos)
- Clic en **"GENERAR Y VERIFICAR PRUEBA ZK"**
- Observa el proceso de generación (2.5 segundos)

#### 8️⃣ Verificación ZK - Paso 3: Confirmación
- ¡Felicidades! 🎉 Tu identidad está verificada
- Revisa tu credencial digital con:
  - Estado: ✓ Verificado
  - Método: ZKPassport (ZK-SNARK)
  - Hash: 0x7f9a...c3d2
  - Beneficios desbloqueados
- Clic en **"CONTINUAR AL TORNEO"**

#### 9️⃣ Badge Verificado
- Regresa a la página principal
- Observa el **checkmark verde** ✓ junto a "Devconnect World Cup"
- ¡Estás oficialmente verificado!

---

## Para Desarrolladores

### Instalación Local

```bash
# Clonar repositorio
git clone [repo-url]
cd win-investments-devconnect-world-cup

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# La app estará en http://localhost:3000
```

### Estructura de Código

```
src/
├── components/
│   ├── Header.js              # Navegación + botón DevConnect
│   ├── Banner.js              # Hero con countdown $WINS
│   ├── PlayersSection.js      # Tabla de jugadores
│   ├── DevConnectModal.js     # Modal del torneo
│   └── ZKVerification.js      # Flujo ZK completo
├── context/
│   └── VerificationContext.js # Estado global
└── App.js                      # Root component
```

### Componentes Principales

#### Header
```javascript
// Maneja el estado del modal y muestra badge de verificación
const [showModal, setShowModal] = useState(false);
const { isVerified } = useVerification();
```

#### DevConnectModal
```javascript
// Props: isOpen, onClose
// Maneja selección de equipo, apuestas y lanza ZKVerification
```

#### ZKVerification
```javascript
// Props: onClose, onBack
// 3 pasos: Scan → Verify → Confirm
// Actualiza contexto global al completar
```

#### VerificationContext
```javascript
// Provee: isVerified, userCredential, verify()
// Wrapper en App.js para acceso global
```

### Personalizaciones Comunes

#### Cambiar Equipos
```javascript
// En DevConnectModal.js línea ~8
const teams = [
  { id: 1, name: 'Tu Equipo', country: '🇦🇷 País', players: 5 },
  // ... más equipos
];
```

#### Ajustar Tiempos de Animación
```javascript
// En ZKVerification.js

// Escaneo (línea ~18)
setTimeout(() => { setIsScanning(false); setStep(2); }, 3000); // 3s

// Verificación (línea ~27)
setTimeout(() => { setIsVerifying(false); verify(); setStep(3); }, 2500); // 2.5s
```

#### Modificar Colores
```css
/* En cualquier archivo .css */
--win-green: #00D084;
--win-green-light: #00ffa3;
--dark-bg: #0a0a0a;
```

### Testing del Flujo

1. **Abrir Modal**: Click en botón header ✅
2. **Seleccionar Equipo**: Click en card de equipo ✅
3. **Ingresar Apuesta**: Escribir en input ✅
4. **Iniciar Verificación**: Ver paso 1 ✅
5. **Escaneo**: Animación de 3s ✅
6. **Generación**: Animación de 2.5s ✅
7. **Completar**: Ver credencial ✅
8. **Badge**: Checkmark en header ✅

### Integración Real (Próximos Pasos)

Para conectar con ZKPassport real:

```javascript
// Reemplazar en ZKVerification.js

// Paso 1: Escaneo
const handleStartScan = async () => {
  setIsScanning(true);
  try {
    const proof = await zkPassport.scan();
    setProofData(proof);
    setStep(2);
  } catch (error) {
    console.error('Error en escaneo:', error);
  }
  setIsScanning(false);
};

// Paso 2: Verificación
const handleVerifyProof = async () => {
  setIsVerifying(true);
  try {
    const response = await fetch('/api/verify-zk', {
      method: 'POST',
      body: JSON.stringify({ proof: proofData }),
    });
    const result = await response.json();
    if (result.verified) {
      verify();
      setStep(3);
    }
  } catch (error) {
    console.error('Error en verificación:', error);
  }
  setIsVerifying(false);
};
```

---

## Para Product Managers

### Métricas a Trackear

#### Conversión del Funnel
1. **Visitas a página principal** → Baseline
2. **Clicks en botón DevConnect** → Interés
3. **Abren modal completo** → Engagement
4. **Seleccionan equipo** → Intent
5. **Inician verificación** → Commitment
6. **Completan paso 1** → Mid-funnel
7. **Completan paso 2** → Near-conversion
8. **Verificación exitosa** → Conversión ✅

#### KPIs Objetivo (DevConnect Event)
- 📊 **Tasa de conversión**: > 60% (de click a verificado)
- ⏱️ **Tiempo promedio**: < 45 segundos total
- 🎯 **Usuarios verificados**: 200+ durante el evento
- 😊 **Satisfacción**: NPS > 8/10

### A/B Tests Sugeridos

1. **Texto del botón**:
   - A: "Devconnect World Cup"
   - B: "🏆 Gana 1 ETH - Verificación ZK"

2. **Orden de pasos**:
   - A: Selección equipo → Verificación
   - B: Verificación → Selección equipo

3. **Explicación ZK**:
   - A: Texto detallado con diagramas
   - B: Video corto explicativo

### Insights del MVP

**Lo que funciona bien:**
- ✅ Animaciones crean expectativa
- ✅ Progreso visual reduce ansiedad
- ✅ Educación inline sobre ZK es clara
- ✅ Badge final genera satisfacción

**Oportunidades de mejora:**
- 🔄 Agregar tooltip en cada paso
- 🔄 Permitir saltar verificación y volver después
- 🔄 Mostrar progreso de otros usuarios
- 🔄 Agregar sonidos de feedback

---

## Para Marketing

### Assets para Promoción

#### Copy Sugerido

**Tweet Lanzamiento:**
```
🚀 ¡NOVEDAD! @win_investments lanza el primer torneo con verificación ZK

⚽ DevConnect World Cup
🏆 Premio: 1 ETH
🔐 Verifica tu identidad sin compartir datos
🇦🇷🇧🇷🇺🇾🇨🇱🇨🇴🇵🇪 6 equipos compitiendo

¿Tu país ganará? 👇
[LINK]

#DevConnect2025 #ZeroKnowledge #Web3
```

**LinkedIn Post:**
```
WIN Investments marca un hito en Web3 deportivo 🏆

Hemos integrado Zero-Knowledge Proofs para verificación de identidad, 
permitiendo a nuestros usuarios participar en eventos sin comprometer 
su privacidad.

En DevConnect Argentina lanzamos el World Cup con:
✅ Verificación ZK instantánea
✅ Sin almacenamiento de datos sensibles  
✅ Credenciales reutilizables
✅ 1 ETH en premios

Este es solo el comienzo. La identidad descentralizada es el futuro 
del deporte tokenizado.

#WINInvestments #ZKIdentity #Blockchain
```

#### Imágenes Sugeridas

1. **Banner del Torneo**: Moneda WIN + banderas de países
2. **Flujo ZK**: Screenshot de los 3 pasos
3. **Credencial**: Card de verificación exitosa
4. **Badge**: Checkmark verde en header

#### Videos Cortos (TikTok/Reels)

1. **"Verifica tu identidad en 30 segundos"** (15s)
2. **"Qué es Zero-Knowledge explicado simple"** (30s)
3. **"Así funciona el torneo DevConnect"** (45s)

### Estrategia de Lanzamiento

#### Pre-Evento (15-16 Nov)
- Teasers en redes sociales
- Email blast a comunidad WIN
- Posts en grupos de Telegram/Discord
- Artículo en blog WIN

#### Durante Evento (17-20 Nov)
- Stand físico con demos
- QR codes en pósters
- Live tweets del avance
- Stories de usuarios verificándose

#### Post-Evento (21+ Nov)
- Anuncio del ganador
- Case study con métricas
- Testimonios de participantes
- Plan de expansión

---

## FAQ Técnico

### ¿Por qué Create React App y no Vite?

El proyecto originalmente requería no usar Vite. CRA funciona perfectamente para este MVP y permite fácil escalabilidad.

### ¿Los datos realmente no se comparten?

En el MVP es una simulación, pero el flujo está diseñado para ZKPassport real donde efectivamente los datos nunca salen del dispositivo del usuario.

### ¿Funciona en mobile?

Sí, el diseño es completamente responsive. La verificación ZK real requeriría NFC que la mayoría de smartphones modernos tienen.

### ¿Puedo cambiar los equipos?

Sí, edita el array `teams` en `DevConnectModal.js` líneas 8-15.

### ¿Cómo integro con backend real?

Reemplaza las funciones `setTimeout` en `ZKVerification.js` con llamadas a tu API. Ejemplo en sección "Integración Real" arriba.

### ¿Dónde se almacena el estado verificado?

Actualmente en Context API (memoria). Para producción, necesitas persistir en localStorage o backend.

---

## Soporte

### Problemas Comunes

**Modal no abre:**
- Verifica que `showModal` está cambiando a `true`
- Revisa console por errores

**Animaciones no se ven:**
- Asegúrate que los archivos CSS están importados
- Verifica que no hay conflictos de z-index

**Badge no aparece:**
- Confirma que `verify()` se llamó en el contexto
- Revisa que `isVerified` es `true` en Header

**Countdown no funciona:**
- El countdown en Banner usa `setInterval`, verifica que no hay conflictos

### Contacto

Para issues técnicos:
- GitHub Issues: [repo]/issues
- Email: dev@win.investments

Para preguntas de producto:
- Email: product@win.investments

---

## Próximos Pasos

### Corto Plazo (1-2 semanas)
- [ ] Integrar ZKPassport API real
- [ ] Conectar con backend WIN
- [ ] Agregar smart contract del torneo
- [ ] Implementar apuestas en blockchain

### Mediano Plazo (1-2 meses)
- [ ] Dashboard de credenciales
- [ ] Sistema de notificaciones
- [ ] Analytics detallados
- [ ] Tests automatizados

### Largo Plazo (3-6 meses)
- [ ] Migrar a producción para todos los usuarios
- [ ] Expandir casos de uso de ZK
- [ ] Integrar con más proveedores de identidad
- [ ] Abrir SDK para terceros

---

**¡Gracias por usar WIN Investments DevConnect World Cup!**

🏆 Que gane el mejor equipo 🏆
