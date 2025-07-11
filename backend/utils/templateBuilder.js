// assessment-system/utils/templateBuilder.js

function getValueByPath(obj, path) {
  try {
    return path.split(".").reduce((o, k) => {
      if (Array.isArray(o)) {
        const index = parseInt(k);
        if (!isNaN(index)) return o[index];
        return o.find(x => x.id == k);
      }
      return o?.[k];
    }, obj);
  } catch {
    return undefined;
  }
}

function buildHtmlReport(data, config) {
  let html = `<html><head><style>
    body { font-family: Arial; padding: 20px; }
    h1 { color: #2c3e50; }
    h2 { border-bottom: 1px solid #ccc; margin-top: 30px; }
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 8px; }
  </style></head><body>`;

  html += `<h1>Assessment Report - ${data.assessment_id}</h1>`;

  config.sections.forEach(section => {
    html += `<h2>${section}</h2><ul>`;
    const fields = config.fields[section];
    for (const label in fields) {
      const path = fields[label];
      const value = getValueByPath(data, path);
      html += `<li><strong>${label}:</strong> ${value ?? 'N/A'}</li>`;
    }
    html += `</ul>`;
  });

  html += `</body></html>`;
  return html;
}

module.exports = buildHtmlReport;