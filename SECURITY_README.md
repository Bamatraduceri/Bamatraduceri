# Sistem de Securitate - Ba-Ma Traduceri Autorizate

## Descriere Generală

Acest sistem de securitate a fost implementat pentru a proteja site-ul Ba-Ma Traduceri Autorizate împotriva diferitelor tipuri de atacuri și violări de copyright.

## Componente Implementate

### 1. Sistem Anti-Copyrighting
- **Watermark subtil**: Adaugă un watermark transparent cu copyright-ul
- **Protecție împotriva copierii textului**: Dezactivează selectarea textului
- **Protecție împotriva click-ului dreapta**: Blochează meniul contextual
- **Protecție împotriva scurtăturilor de tastatură**: Blochează Ctrl+A, Ctrl+C, F12, etc.
- **Copyright invizibil**: Adaugă text de copyright ascuns în DOM

### 2. Sistem Anti-Hacking
- **Detectare DevTools**: Detectează deschiderea Developer Tools
- **Monitorizare modificări DOM**: Detectează ștergerea watermark-urilor
- **Prevenire injecții**: Monitorizează scripturile externe
- **Monitorizare cereri XHR**: Detectează cereri către domenii externe

### 3. Sistem Anti-Cadere Pagină
- **Monitorizare sănătate pagină**: Verifică periodic starea DOM-ului
- **Gestionare erori**: Capturează și loghează erorile JavaScript
- **Prevenire loop-uri infinite**: Detectează și oprește loop-urile
- **Monitorizare memorie**: Verifică utilizarea memoriei
- **Recuperare automată**: Reîncarcă pagina în caz de probleme

### 4. Sistem Anti-Blocare
- **Detectare blocări**: Testează conectivitatea la site-uri populare
- **Alternative de acces**: Oferă linkuri alternative
- **Monitorizare conectivitate**: Detectează pierderea conexiunii

### 5. Pagină de Mentenanță
- **Redirecționare automată**: În caz de probleme de securitate
- **Design profesional**: Interfață modernă și responsivă
- **Informații de contact**: Pentru asistență tehnică

## Fișiere Implementate

### CSS
- `css/security-protection.css` - Stiluri principale de securitate
- `css/subtle-copyright.css` - Protecție subtilă a copyright-ului

### JavaScript
- `js/security-system.js` - Sistemul principal de securitate

### HTML
- `maintenance.html` - Pagina de mentenanță

### Server
- `.htaccess` - Configurare securitate server
- `robots.txt` - Protecție împotriva bot-urilor

## Configurare

### Activare Sistem
Sistemul se activează automat prin includerea fișierelor în paginile HTML:

```html
<!-- Security Protection CSS -->
<link rel="stylesheet" href="css/security-protection.css">
<!-- Subtle Copyright Protection -->
<link rel="stylesheet" href="css/subtle-copyright.css">

<!-- Security System JS -->
<script src="js/security-system.js"></script>
```

### Configurare .htaccess
Fișierul `.htaccess` include:
- Protecție împotriva hotlinking-ului
- Headers de securitate
- Protecție împotriva accesului la fișiere sensibile
- Compresie și cache pentru performanță

### Configurare robots.txt
Fișierul `robots.txt` include:
- Restricții pentru bot-uri
- Protecție a conținutului sensibil
- Sitemap și crawl-delay

## Funcționalități

### Protecție Copyright
- Watermark transparent pe toate paginile
- Dezactivare selectare text (cu excepția elementelor `.allow-copy`)
- Blocare click dreapta și scurtături tastatură
- Copyright invizibil în DOM

### Monitorizare Securitate
- Log-uri în localStorage pentru debugging
- Notificări vizuale pentru violări
- Redirecționare automată la mentenanță în caz de probleme

### Performanță
- Sistem lightweight care nu afectează viteza site-ului
- Cache și compresie pentru optimizare
- Responsive design pentru toate dispozitivele

## Debugging

### Log-uri de Securitate
Log-urile sunt salvate în localStorage și pot fi accesate prin:
```javascript
console.log(JSON.parse(localStorage.getItem('security_logs')));
```

### Mod Development
În modul development (localhost), sistemul este expus global pentru debugging:
```javascript
window.SecuritySystem
```

## Compatibilitate

- **Browser-e**: Chrome, Firefox, Safari, Edge
- **Dispozitive**: Desktop, tablet, mobil
- **Versiuni**: IE9+ (cu fallback-uri)

## Mentenanță

### Actualizări
- Verifică periodic log-urile de securitate
- Actualizează regulile .htaccess după necesitate
- Monitorizează performanța sistemului

### Backup
- Păstrează backup-uri ale fișierelor de configurare
- Documentează modificările făcute
- Testează sistemul după actualizări

## Suport

Pentru probleme tehnice sau întrebări despre sistemul de securitate, contactați echipa de dezvoltare.

---

**© 2024 Ba-Ma Traduceri Autorizate. All rights reserved.** 