$.get("./69th_sig_j.html", function(response)
{ 
  modalContentParser(html2Text(response));
});

function html2Text(raw)
{
  var tmp = document.createElement("div");
  tmp.innerHTML = raw;
  return tmp.textContent || tmp.innerText || "";
}

String.prototype.ltrim = function() {
    return this.replace(/^[\s　]+/gm, '');
}

String.prototype.rtrim = function() {
    return this.replace(/[\s　]+$/gm, '');
}

// out is a reference
function valForKeyWithRegex(out, key, regex, string, rtrim, ltrim)
{
  rtrim = typeof rtrim !== 'undefined' ? rtrim : false;
  ltrim = typeof ltrim !== 'undefined' ? ltrim : false;
  var m = regex.exec(string);

  if (!!m)
    out[key] = m[1];
  else
    return

  if (rtrim)
    out[key] = out[key].rtrim();
  if (ltrim)
    out[key] = out[key].ltrim();

  return
}

function modalContentParser(raw)
{
  raw = Object(raw);

  var content = {};
  content = Object(content);
  
  valForKeyWithRegex(content, 'counter', /第(\d+)回/, raw);
  valForKeyWithRegex(content, 'date', /日.*時：(.*)/, raw, true);
  valForKeyWithRegex(content, 'place', /会[\s　]*場：([\s\S]*)参加費/, raw, true, true);
  valForKeyWithRegex(content, 'place', /場[\s　]*所：([\s\S]*)参加費/, raw, true, true);

  console.log(content);
  return content;
}
