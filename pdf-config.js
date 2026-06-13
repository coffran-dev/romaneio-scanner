/**
 * MODELO DO PDF — edite SOMENTE este arquivo para personalizar o romaneio em PDF.
 * Não precisa tocar no index.html para mudar logo, cores ou textos.
 *
 * COMO COLOCAR SUA LOGO:
 * 1. Acesse https://www.base64-image.de/ (ou similar)
 * 2. Envie a imagem da sua logo (PNG, de preferência quadrada ou retangular pequena)
 * 3. Copie o texto gerado (começa com "data:image/png;base64,....")
 * 4. Cole esse texto inteiro dentro das aspas de LOGO_BASE64 abaixo.
 *
 * Se LOGO_BASE64 ficar vazio (""), o PDF é gerado sem logo (apenas texto).
 */

const PDF_CONFIG = {
  // Logo da empresa em Base64 (veja instruções acima). Deixe "" para não usar logo.
  LOGO_BASE64: "",

  // Formato da imagem usada no LOGO_BASE64: "PNG" ou "JPEG"
  LOGO_FORMATO: "PNG",

  // Largura e altura da logo no PDF (em mm)
  LOGO_LARGURA: 30,
  LOGO_ALTURA: 18,

  // Nome da empresa que aparece no topo do romaneio
  NOME_EMPRESA: "Batele Scanner",

  // Subtítulo / endereço / CNPJ (aparece abaixo do nome da empresa)
  SUBTITULO_EMPRESA: "Controle DE Romaneios - Entrada / Saída / Devolução",

  // Cor principal usada nos títulos e linhas (RGB de 0 a 255)
  COR_PRIMARIA: [255, 159, 28],

  // Texto que aparece no rodapé de cada página do PDF
  RODAPE: "Documento gerado automaticamente pelo sistesma Batele Scanner"
};
