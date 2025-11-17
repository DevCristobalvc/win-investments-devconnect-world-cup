# WIN Investments - DevConnect World Cup 🏆

## Identidad ZK y Plataforma de Participación

**Autor:** Cristóbal Factory  
**Evento:** DevConnect Argentina 2025  
**Fecha:** 17-20 Noviembre 2025

---

## 📋 Descripción del Proyecto

Esta aplicación representa la evolución de WIN Investments hacia la Web3, integrando **Zero-Knowledge Proofs (ZKP)** para verificación de identidad y participación comunitaria. El proyecto nace como respuesta a la necesidad de democratizar el acceso al fútbol a través de tecnología blockchain, garantizando privacidad, seguridad y transparencia.

### 🎯 Características Principales

- **Verificación de Identidad ZK**: Integración con ZKPassport para verificación sin compartir datos personales
- **DevConnect World Cup**: Torneo comunitario con apuestas en USDC, BTC y ETH
- **Prize Pool**: 1 ETH para el equipo ganador (final el 20 de noviembre)
- **Credenciales Reutilizables**: Sistema de identidad descentralizada para futuros productos
- **UI/UX Premium**: Diseño inspirado en WIN Investments con colores corporativos

---

## 🔐 Zero-Knowledge Identity

### ¿Qué es ZKPassport?

ZKPassport es una solución de verificación de identidad que permite generar pruebas criptográficas usando únicamente el chip NFC del pasaporte. **No se almacenan datos sensibles**.

### Proceso de Verificación

1. **Escaneo Local**: El usuario escanea su pasaporte con NFC
2. **Generación de Prueba**: Se crea una prueba ZK-SNARK en el dispositivo
3. **Validación**: WIN recibe solo la prueba criptográfica (no datos personales)
4. **Credencial**: El usuario obtiene un badge verificado reutilizable

### Beneficios ZK

- ✅ **Privacidad Total**: No compartimos datos personales
- ✅ **Verificación Instantánea**: Proceso rápido
- ✅ **Seguridad Criptográfica**: Pruebas verificables
- ✅ **Compliance Reducido**: Menor riesgo regulatorio
- ✅ **Credencial Portable**: Reutilizable en WIN

---

## ⚽ DevConnect World Cup

### Dinámica del Torneo

- **6 Equipos**: Crypto Champions 🇦🇷, Blockchain Bulls 🇧🇷, DeFi Dynamos 🇺🇾, Web3 Warriors 🇨🇱, NFT Knights 🇨🇴, Smart Contract FC 🇵🇪
- **Apuestas**: USDC, BTC o ETH
- **Premio**: 1 ETH acumulado
- **Final**: 20 de noviembre 2025
- **Requisito**: Verificación ZK obligatoria

---

## 🛠️ Stack Técnico

- **React 18** (Create React App)
- **Context API** (Estado global)
- **ZKPassport** (ZK-SNARKs)
- **Polygon** (Blockchain de WIN)
- **$WINS Token** (Utility token)

### Colores Corporativos
- Verde Principal: `#00D084`
- Verde Secundario: `#00ffa3`
- Fondo Oscuro: `#0a0a0a`

---

## 🚀 Instalación y Ejecución

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.js              # Navegación principal con botón DevConnect
│   ├── Banner.js              # Banner principal con countdown $WINS
│   ├── PlayersSection.js      # Tabla de jugadores más populares
│   ├── DevConnectModal.js     # Modal del torneo
│   └── ZKVerification.js      # Flujo completo de verificación ZK
├── context/
│   └── VerificationContext.js # Estado global de verificación
└── App.js                      # Componente principal
```

---

## 🔄 Flujo de Usuario

1. Usuario hace clic en "Devconnect World Cup" en el header
2. Se abre el modal con información del torneo
3. Usuario selecciona su equipo y cantidad de apuesta
4. Hace clic en "Comenzar Verificación ZK"
5. **Paso 1**: Simula escaneo de pasaporte (3 segundos)
6. **Paso 2**: Genera prueba criptográfica (2.5 segundos)
7. **Paso 3**: Muestra credencial verificada con badge
8. El header muestra checkmark verde de verificado ✓

---

## 🎯 Objetivos Estratégicos

### Para WIN Investments
- Reducción de riesgos de datos sensibles
- Liderazgo en Web3 e identidad descentralizada
- Community engagement en DevConnect
- Producto diferenciado único
- Base para futuros productos (governance, rewards)

### Para Usuarios
- Privacidad garantizada (datos nunca salen del dispositivo)
- Experiencia gamificada con premios reales
- Credencial portable y reutilizable
- Verificación transparente on-chain
- Solo personas reales (anti-bots)

---

## 🌐 Casos de Uso Futuros

- **Votaciones de Governance**: Solo usuarios verificados
- **Acceso Premium**: Funciones exclusivas
- **Reputación On-Chain**: Sistema de credenciales
- **Airdrops Seguros**: Sin Sybil attacks
- **KYC Instantáneo**: Verificación en segundos

---

## 🛡️ Seguridad y Privacidad

### Datos NO Compartidos
❌ Nombre | ❌ Número de pasaporte | ❌ Foto | ❌ Fecha de nacimiento | ❌ Nacionalidad

### Datos Verificables (Sin revelar detalles)
✅ Pasaporte válido | ✅ Mayor de edad | ✅ Persona única | ✅ Hash criptográfico

---

## 🚧 Roadmap

**Q4 2025** (Actual)
- ✅ MVP de verificación ZK con ZKPassport
- ✅ DevConnect World Cup Tournament
- ✅ Badge de verificación

**Q1 2026**
- 🔜 ZK verification en signup flow
- 🔜 Sistema de reputación on-chain
- 🔜 Votaciones de governance

**Q2 2026**
- 🔜 Credenciales NFT de logros
- 🔜 Social graph de inversores

---

## 📞 Contacto

**WIN Investments**
- Website: https://www.win.investments
- Twitter: @win_investments
- Telegram: t.me/win_investments_mc

---

## 🎉 Agradecimientos

Gracias a DevConnect Argentina y al equipo de WIN Investments por confiar en esta visión donde privacidad, deporte y blockchain se encuentran.

**#DevConnect2025 #ZKIdentity #WINInvestments #Web3Football**

---


### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
