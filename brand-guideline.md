# kava.log — Brand Guideline v1.0

> **Tone:** Specialty coffee roaster who happens to be a developer.  
> **Vibe:** Warm, precise, slightly nerdy — never cold or "hacker."  
> **Motto:** *Where coffee meets tech.*

---

## 1. 🎨 Color Palette

### Primary — Coffee Browns

| Name | Hex | OKLCH | Usage |
|---|---|---|---|
| **Bean** (Darkest) | `#2D1B0E` | `oklch(0.25 0.03 65)` | Dark bg, text on light |
| **Roast** | `#4A2E18` | `oklch(0.35 0.04 65)` | Secondary text dark |
| **Brew** | `#8B5A2D` | `oklch(0.5 0.06 65)` | Primary brown, buttons |
| **Latte** | `#C08A53` | `oklch(0.62 0.1 70)` | Accent on dark bg |
| **Crema** | `#E6C9A8` | `oklch(0.82 0.05 75)` | Borders, dividers |
| **Foam** (Lightest) | `#FDF8F0` | `oklch(0.98 0.01 82)` | Light bg, surface |

### Accent — Amber (Terminal/Tech)

| Name | Hex | Usage |
|---|---|---|
| **Amber** | `#F59E0B` | Primary accent, CTAs, links |
| **Amber Dark** | `#D97706` | Hover states |
| **Amber Light** | `#FDE68A` | Subtle highlights, tags |

### Terminal / Code Surfaces

| Name | Hex | Usage |
|---|---|---|
| **Terminal Dark** | `#1A1512` | Code block bg dark |
| **Terminal Light** | `#F5F0EB` | Code block bg light |
| **Terminal Text** | `#C9B99A` | Code text dark mode |
| **Terminal Text Light** | `#5C4A3A` | Code text light mode |
| **Line Number** | `#6B5544` | Gutter numbers |

### Functional Colors

| Name | Hex | Usage |
|---|---|---|
| **Success** | `#22C55E` | Brew complete, checkmark |
| **Warning** | `#F59E0B` | Timer warning, alert |
| **Error** | `#EF4444` | Over-extraction, error |
| **Info** | `#3B82F6` | Water temp indicator |

### Gradient

```
Hero gradient:
  background: linear-gradient(135deg, #F59E0B15 0%, #FDF8F0 50%, #E6C9A840 100%)
  (amber whisper → foam → crema fade)
```

---

## 2. 🔤 Typography

### Font Stack

| Role | Font | Weight | Source |
|---|---|---|---|
| **Display / Logo** | JetBrains Mono | 700 Bold | Google Fonts |
| **Headings** | JetBrains Mono | 600 SemiBold | Google Fonts |
| **Body** | Inter | 400 Regular | Google Fonts |
| **Code / Recipe** | JetBrains Mono | 400 Regular | Google Fonts |
| **Social Media** | Space Grotesk | 500–700 | Google Fonts |
| **Caption / Meta** | Inter | 400 Regular | Google Fonts |

### Type Scale

| Level | Font | Size | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| **Hero** | JetBrains Mono | 56px / 3.5rem | 700 | 1.1 | Homepage title, TikTok headline |
| **H1** | JetBrains Mono | 36px / 2.25rem | 700 | 1.2 | Page titles |
| **H2** | JetBrains Mono | 24px / 1.5rem | 600 | 1.3 | Section headers |
| **H3** | JetBrains Mono | 18px / 1.125rem | 600 | 1.4 | Card titles |
| **Body L** | Inter | 18px / 1.125rem | 400 | 1.6 | Lead paragraphs |
| **Body** | Inter | 16px / 1rem | 400 | 1.6 | Standard text |
| **Body S** | Inter | 14px / 0.875rem | 400 | 1.5 | Captions, meta |
| **Code L** | JetBrains Mono | 16px / 1rem | 400 | 1.5 | Recipe params display |
| **Code** | JetBrains Mono | 14px / 0.875rem | 400 | 1.5 | Code blocks, steps |
| **Code S** | JetBrains Mono | 12px / 0.75rem | 400 | 1.4 | Grind setting, badges |

### Font Pairing Rules

```
✅ Headings = JetBrains Mono → tech/coffee precision
✅ Body = Inter → readability
✅ Recipe data = JetBrains Mono → looks like config files
✅ Social overlay = Space Grotesk → bold, eye-catching

❌ NEVER use Montserrat, Poppins, or Lobster
❌ NEVER mix more than 3 font families on one canvas
```

---

## 3. 🖼️ Logo & Brand Mark

### Primary Logo

```
[☕] kava.log
 ↑     ↑
icon  JetBrains Mono Bold, Amber #F59E0B

Alternative: coffee emoji or custom SVG coffee bean + bracket
```

### Logo Variants

| Variant | Usage |
|---|---|
| **Full — `[☕] kava.log`** | Website navbar, TikTok profile |
| **Icon only — `☕`** | Favicon, app icon, watermark |
| **Stacked — icon above text** | Merch, stickers |
| **Monogram — `KV` in brackets** | Small spaces, profile pics |

### Clear Space

```
Minimum padding around logo: 1x the height of the coffee icon
(on all 4 sides)
```

### Logo Colors

| Background | Logo Color |
|---|---|
| Light (`#FDF8F0`) | Logo in `#2D1B0E` (Bean), icon in `#F59E0B` |
| Dark (`#2D1B0E`) | Logo in `#FDF8F0` (Foam), icon in `#F59E0B` |
| Photo | White or Foam, with subtle drop shadow |

---

## 4. 💻 Terminal / Code Block Component

Ini elemen signature kava.log — dipakai di website & bisa diadaptasi ke konten.

### Basic Code Block

```
┌─────────────────────────────────────┐
│  1  │  $ brew --method=v60          │  ← Terminal prompt with amber
│  2  │  $ --dose=15g                 │     JetBrains Mono 14px
│  3  │  $ --ratio=1:16               │
│  4  │                               │
│  5  │  # Pour schedule              │  ← Comment in muted
│  6  │  0:00 → Bloom 35ml            │  ← Steps in terminal text
│  7  │  0:35 → Pour to 130ml         │
│  8  │  1:15 → Pour to 225ml         │
│  9  │                               │
│ 10  │  ✓ brew complete · 2:45       │  ← Success in green
└─────────────────────────────────────┘
```

### Specs

| Element | Style |
|---|---|
| Background | `#1A1512` (Terminal Dark) — rounded-xl (12px) |
| Border | 1px `#4A2E18` (Roast) |
| Font | JetBrains Mono 14px |
| Line numbers | `#6B5544`, right-aligned, 24px gutter, opacity 0.6 |
| Prompt (`$`) | `#F59E0B` (Amber), bold |
| Comments (`#`) | `#6B5544`, italic |
| Values/params | `#C08A53` (Latte) |
| Success (`✓`) | `#22C55E` |
| Padding | 16px all sides |

### Recipe Card (Light Mode)

Sama kayak di atas, tapi:
- Background: `#F5F0EB` (Terminal Light)
- Text: `#5C4A3A`
- Border: `#E6C9A8` (Crema)
- Prompt: `#D97706` (Amber Dark)

---

## 5. 📱 Social Media Templates

### TikTok / IG Reels (9:16 — 1080×1920)

#### Overlay Style A: Recipe Breakdown

```
┌──────────────────────────┐
│                          │  ← Background: video footage
│  ┌──────────────────┐    │
│  │ $ brew v60       │    │  ← Terminal code block
│  │ $ --dose=15g     │    │     top-left or bottom
│  │ $ --ratio=1:16   │    │     semi-transparent bg
│  └──────────────────┘    │
│                          │
│                          │
│       TETSUYA            │  ← Title: Space Grotesk Bold
│       4:6 METHOD         │     72px, white, drop shadow
│                          │
│                          │
│  @kava.log               │  ← Handle: bottom-right
│                          │     Space Grotesk 24px
└──────────────────────────┘
```

#### Overlay Style B: Bean Review

```
┌──────────────────────────┐
│                          │
│   LA CAMELIA             │  ← Bean name: Space Grotesk Bold
│   WASHED GESHA           │     64px, amber, centered
│                          │
│   ┌─────────────────┐    │
│   │ Colombia · 92pt │    │  ← Info badge: terminal style
│   │ Light · Floral  │    │     JetBrains Mono 18px
│   └─────────────────┘    │
│                          │
│       ☕                 │  ← Large coffee icon
│                          │
│   @kava.log              │
└──────────────────────────┘
```

#### Font Specs for TikTok Overlay

| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| Main title | Space Grotesk | 64–72px | 700 Bold | `#FFFFFF` |
| Subtitle | Space Grotesk | 32–40px | 500 Medium | `#F59E0B` |
| Code block | JetBrains Mono | 18–22px | 400 | `#C9B99A` on `#1A1512` |
| Handle | Space Grotesk | 24px | 500 | `#FFFFFF` 80% |
| Hashtags | Inter | — | — | (in caption, not overlay) |

### Instagram Feed (1:1 — 1080×1080)

#### Post Template: Recipe Card

```
┌──────────────────────────────────┐
│                                  │
│        [☕] kava.log              │  ← Logo top
│                                  │
│   ┌──────────────────────────┐   │
│   │                          │   │
│   │   $ brew --v60           │   │  ← Hero terminal block
│   │   $ --tetsuya-4-6        │   │     centered, large
│   │   $ --ratio=1:15         │   │
│   │                          │   │
│   └──────────────────────────┘   │
│                                  │
│   ┌─────┐ ┌──────┐ ┌──────┐     │
│   │ 20g │ │ 300ml│ │ 93°C │     │  ← Spec pills
│   └─────┘ └──────┘ └──────┘     │     JetBrains Mono
│                                  │
│   TETSUYA 4:6 METHOD             │  ← Title: Space Grotesk Bold
│   Champion recipe · V60          │  ← Subtitle: Inter 14px
│                                  │
│   Swipe for recipe →             │  ← CTA bottom
│                                  │
└──────────────────────────────────┘
```

### Instagram Story (9:16 — 1080×1920)

Sama kayak TikTok overlay, tapi tambahin:
- **Swipe-up link** di bottom (kalau eligible)
- **Poll sticker** untuk engagement ("Light or Medium roast?")
- **Question sticker** ("What's your daily driver?")

### Threads (Text-only, brand voice)

```
Style guide untuk Threads post:

Header:  EM DASH + TOPIC
Contoh:  — BREW LOG #003

Body:    Casual, warm, 1-2 paragraph.
         Pakai line breaks untuk pacing.
         No more than 3 hashtags.

Emoji:   ☕ 🫘 ⚙️ 🔧 📋 — coffee + tools only
         No 🚀💎🔥 (too hustle-bro)

CTAs:    "What's your V60 recipe? 👇"
         "Drop your grind setting below."
```

---

## 6. 📸 Image Treatment

### Photo Filters

Untuk foto kopi (beans, brewing, gear):

```
Lightroom / VSCO preset direction:
- Temperature: +5 warm
- Contrast: +10
- Highlights: -15
- Shadows: +10
- Blacks: -5 (don't crush blacks)
- Saturation: -5 (desaturate slightly for premium feel)
- Grain: +5 (subtle film grain)
```

### Overlay on Photos

Kalau naro teks di atas foto:
- **Dark scrim:** `linear-gradient(to top, #2D1B0ED0 0%, transparent 60%)` di bottom
- **Code blocks:** selalu full opacity, jangan transparent
- **Logo:** selalu white atau Foam (`#FDF8F0`) di atas foto gelap

---

## 7. ✅ Usage Guidelines

### DO ✅

```
✅ Gunakan JetBrains Mono untuk semua yang "data" — grind size, ratio, suhu
✅ Amber accent SPARINGLY — 1-2 elemen per canvas
✅ Code block styling untuk recipe steps (INI SIGNATURE BRAND)
✅ Dark mode sebagai default, light mode sebagai opsi
✅ Whitespace generous — jangan overcrowd canvas
✅ Foto kopi selalu warm-toned
```

### DON'T ❌

```
❌ Jangan pakai Montserrat, Poppins, Lobster — font generik
❌ Jangan full Matrix green — bukan hacker brand
❌ Jangan glitch effects atau scanlines
❌ Jangan logo terlalu kecil (<48px di mobile, <24px di web)
❌ Jangan teks di atas foto tanpa dark scrim (bikin illegible)
❌ Jangan lebih dari 3 typeface dalam satu canvas
❌ Jangan pakai emoji 🚀💎🔥 — bukan tech bro brand
```

---

## 8. 🎬 Motion Guidelines (TikTok/Reels)

| Element | Animation | Duration |
|---|---|---|
| Logo reveal | Typewriter cursor typing "kava.log" | 1.5s |
| Code block | Lines appear one by one (top→bottom) | 0.15s per line |
| Title | Fade up + slight scale | 0.5s |
| Spec pills | Pop in staggered (left→right) | 0.3s each |
| Recipe steps | Typewriter as narrator speaks | sync to VO |
| Transition | Quick zoom or whip pan | 0.3s |

---

## 9. 🛠️ Figma / Illustrator Setup

### Artboard Templates (Figma)

| Name | Size | Use |
|---|---|---|
| TikTok Overlay A | 1080×1920 | Recipe breakdown |
| TikTok Overlay B | 1080×1920 | Bean review |
| IG Post Square | 1080×1080 | Recipe card |
| IG Story | 1080×1920 | Story template |
| Threads Card | 1200×630 | Link preview |
| Website Hero | 1440×900 | Web reference |

### Color Styles (Figma)

Buat sebagai **Color Styles** di Figma:

```
coffee/bean       #2D1B0E
coffee/roast      #4A2E18
coffee/brew       #8B5A2D
coffee/latte      #C08A53
coffee/crema      #E6C9A8
coffee/foam       #FDF8F0
amber/default     #F59E0B
amber/dark        #D97706
amber/light       #FDE68A
terminal/bg       #1A1512
terminal/bg-light #F5F0EB
terminal/text     #C9B99A
terminal/text-lt  #5C4A3A
```

### Text Styles (Figma)

```
heading/hero      JetBrains Mono Bold 56px
heading/h1        JetBrains Mono Bold 36px
heading/h2        JetBrains Mono SemiBold 24px
heading/h3        JetBrains Mono SemiBold 18px
body/large        Inter Regular 18px
body/default      Inter Regular 16px
body/small        Inter Regular 14px
code/large        JetBrains Mono Regular 16px
code/default      JetBrains Mono Regular 14px
code/small        JetBrains Mono Regular 12px
social/title      Space Grotesk Bold 64px
social/subtitle   Space Grotesk Medium 32px
```

---

## 10. 📦 Export Checklist

Sebelum publish konten, cek:

```
☐ Font yang dipakai: JetBrains Mono / Inter / Space Grotesk?
☐ Warna dari palette coffee + amber (bukan random)?
☐ Terminal/code block styling konsisten?
☐ Logo visible dan nggak kepotong?
☐ Dark scrim di bawah teks kalau di atas foto?
☐ Max 3 typeface dalam satu frame?
☐ No Montserrat/Poppins/Lobster?
☐ No Matrix green/glitch effects?
☐ Hashtags di caption, bukan di overlay?
```

---

> **Last updated:** 10 July 2026 · v1.0  
> **Next:** Social media template library, merch design specs
