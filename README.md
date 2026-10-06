# davidflorez.co

Sitio de la práctica de psicología clínica de David Flórez. Astro 5, salida
estática, publicado en Vercel desde la rama `main`.

```sh
npm install
npm run dev      # localhost:4321
npm run build    # genera dist/
```

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Servicios, precios y botones de WhatsApp | `src/data/servicios.ts` |
| Links de pago de Wompi | `src/data/pagos.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
| Texto propio de cada página de servicio | `src/data/paginas-servicio.ts` |
| WhatsApp, agenda, Instagram y sedes | `src/data/contacto.ts` |
| Credenciales verificables | `src/data/credenciales.ts` |

`llms.txt` y el schema se generan desde esos mismos datos, así que no hay que
editarlos aparte.

## Pagos con Wompi

El sitio no cobra: `/pagar/` muestra cada programa con su link de pago de Wompi.
Esa página no sale en buscadores; es la que se comparte por WhatsApp.

1. En el panel de comercios de Wompi, crea un **link de pago** por programa:
   monto fijo, uso múltiple y sin vencimiento.
2. En `src/data/pagos.ts`, agrega a cada programa su link y el monto con que lo
   creaste:

   ```ts
   { id: 'evaluacion', nombre: '…', servicios: ['n1', 'a1'],
     link: { url: 'https://checkout.wompi.co/l/XXXXXX', monto: 390000 } },
   ```

Mientras un programa no tenga link, su botón pide el link por WhatsApp. Si
cambias un precio en `servicios.ts` y el link quedó con el monto anterior, el
build falla y dice cuál es: hay que crear el link nuevo en Wompi.

### Wompi desde Claude Code (MCP)

`.mcp.json` carga el servidor MCP `@codespar/mcp-wompi`, fijado en la versión
0.2.2 (revisada: solo habla con `production.wompi.co` o `sandbox.wompi.co`).
Con él, Claude crea y actualiza los links de pago.

- **La llave privada no va en el repositorio ni en el chat.** En claude.ai/code,
  menú del entorno → Edit → **API credentials** → Add credential: host
  `production.wompi.co`, encabezado `Authorization`, prefijo `Bearer`, valor =
  llave privada (`prv_prod_…`). El proxy la agrega a cada petición sin que la
  sesión la vea. Para pruebas, otra credencial con `sandbox.wompi.co` y la llave
  `prv_test_…`, más la variable `WOMPI_SANDBOX=true`.
- Si tu plan no tiene **API credentials**, ponla como variable de entorno
  `WOMPI_PRIVATE_KEY` y agrega `production.wompi.co` a los dominios permitidos
  de la red del entorno.
- `.claude/settings.json` deja usar sin preguntar solo las herramientas de
  lectura de links. Crear o editar un link pide confirmación, y las de cobros,
  reembolsos, anulaciones, tarjetas y datos de clientes están bloqueadas: los
  pagos de la práctica son datos de salud y no deben pasar por el chat.
- Cuando los links ya estén creados, puedes borrar la credencial: el sitio no la
  necesita.

## Instagram

La sección «Últimas publicaciones» lee las cuatro más recientes con la API
oficial de Instagram durante el build. Sin token, muestra solo el enlace al
perfil.

1. La cuenta debe ser profesional (Creador o Empresa).
2. En [Meta for Developers](https://developers.facebook.com/apps), crea una app,
   agrega el producto **Instagram** («API con inicio de sesión de Instagram»),
   conecta la cuenta y genera el token de acceso.
3. En Vercel → proyecto → Settings → Environment Variables, crea
   `INSTAGRAM_TOKEN` con ese token (Production y Preview) y vuelve a publicar.
4. Para que las publicaciones se actualicen solas y el token no venza: en Vercel
   → Settings → Git → Deploy Hooks, crea un hook sobre `main`; en GitHub →
   Settings → Secrets and variables → Actions, guárdalo como
   `VERCEL_DEPLOY_HOOK`. El flujo `.github/workflows/actualizar-instagram.yml`
   publica el sitio cada día a las 6:17 a. m.

Si un día la sección vuelve a mostrar solo el enlace, el token venció: genera
uno nuevo y reemplázalo en Vercel.
