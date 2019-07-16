var intervalo = 5000;
function xmlLoaderSinc(url){ 
  if(window.XMLHttpRequest){
    var Loader = new XMLHttpRequest();
    Loader.open("GET", url ,false);
    Loader.send(null);
    return Loader.responseXML;
  }else if(window.ActiveXObject){  
    var Loader = new ActiveXObject("Msxml2.DOMDocument.3.0");
    Loader.async = false;
    Loader.loadXML(url);
    return Loader;
  }
}
// assincrono
function xmlLoader(arquivoxml,indpaginacao)
{
  if (window.XMLHttpRequest)
    request = new XMLHttpRequest();
  else if (window.ActiveXObject) 
    request = new ActiveXObject("Msxml2.DOMDocument.3.0");
  
  if(request) {
    request.open("GET", arquivoxml, true);
    request.onreadystatechange = function(){
      if (request.readyState == 4) {
        var xmlDocument = request.responseXML;
        getCategorias(xmlDocument,indpaginacao);
      }
    }
    request.send(null);
  }
}

function getDestaques(xmlNode){
  var destaque = new String("");
  var destaques = getElementsByAttribute("destaque", "true", xmlNode, "artesanato");
  
  var inddestaque = document.getElementById("inddestaque").value;
      
  inddestaque = parseInt(inddestaque) + 1
  
  if (parseInt(inddestaque) >= destaques.length)
    inddestaque = 0;
        
  var ind = inddestaque;
        
  document.getElementById("inddestaque").value = ind;
  
  var registro = destaques[ind].getElementsByTagName("destaque")[0];
  
  var titulo = "";
  var imgdestaque = "";
  var descricao = "";
  var imagem = "";
  
  for (var k = 0 ; k < registro.childNodes.length ; k++) {
    var objNode2 = registro.childNodes[k];
    if(objNode2.tagName == "titulo") titulo = objNode2.firstChild.nodeValue; else
    if(objNode2.tagName == "imgdestaque") imgdestaque = objNode2.firstChild.nodeValue; else
    if(objNode2.tagName == "descricao") descricao = objNode2.firstChild.nodeValue; else
    if(objNode2.tagName == "imagem") imagem = objNode2.firstChild.nodeValue; 
  }
  
  destaque += "<div class='imgdestaque'><img src='" + imagem + "' border='0'></div>";
  destaque += "<div class='central'><div class='bigspacer'></div><span class='titulo'>" + titulo + "</span><br>";
  destaque += "<div class='bigspacer'></div><img src='" + imgdestaque + "' border='0'><br>";
  destaque += "<div class='bigspacer'></div><span class='descricaodestaque'>" + descricao + "</span><br>";
  destaque += "<div id='botDestaque' name='botDestaque' class='botDestaque'>";
  destaque += "<input class='btnParar' type='image' src='index/parar.png' onclick='javascript:parar()'>";
  destaque += "<input class='btnContinuar' type='image' src='index/continuar.png' onclick='javascript:continuar()'>";
  destaque += "</div>";
  destaque += "</div></div>";
  
  document.getElementById("divDestaque").innerHTML = destaque;      
}

function getMapaSite(xmlNode,target)
{
  var mapasitefinal = new String("");    
  
  do{
    var nome = "";
    var endereco = "";
    var anterior = "";
    var mapaold = "";
    
    var registros = getElementsByAttribute("id", target, xmlNode, "link");
    
    for (var k = 0 ; k < registros[0].childNodes.length ; k++) {
      var objNode2 = registros[0].childNodes[k];
      if(objNode2.tagName == "nome") nome = objNode2.firstChild.nodeValue; else
      if(objNode2.tagName == "endereco") endereco = objNode2.firstChild.nodeValue; else
      if(objNode2.tagName == "anterior" && objNode2.hasChildNodes()) anterior = objNode2.firstChild.nodeValue; 
    }
    
    if (anterior != "")
      target = anterior;
    
    if (mapasitefinal != ""){
      mapaold = mapasitefinal;
      mapasitefinal = "<a href=\"javascript:inicio('" + endereco + "')\">" + nome + "</a> > " + mapaold;
    }else{
      mapasitefinal = nome;
    }

  }while(anterior != "")

  document.getElementById("divMapa").innerHTML = mapasitefinal;
}    

function getCategorias(xmlNode,indpaginacao){
  var destaque = new String("");
  var artesanatos = new String("");
  var limite = 12;
  var max = 99999;
  var qtd = 0;
  var qtdfinal = 0;
  var possuidestaques = 0;
  
  if(indpaginacao=="")
    indpaginacao=max;
    
  //Obtem o destaque  
  var destaques = getElementsByAttribute("destaque", "true", xmlNode, "artesanato");
  
  if (destaques.length > 1 && indpaginacao==max){
    document.getElementById("intervalo").value = setInterval("AtualizaDestaque()",intervalo);
    possuidestaques = 1;
  }
    
  if (indpaginacao==max){
    var ind = 0;
          
    document.getElementById("inddestaque").value = ind;
            
    destaque += "<div class='destaque'>";
    var registro = destaques[ind].getElementsByTagName("destaque")[0];
    
    var titulo = "";
    var imgdestaque = "";
    var descricao = "";
    var descricao2 = "";
    var imagem = "";
    
    for (var k = 0 ; k < registro.childNodes.length ; k++) {
      var objNode2 = registro.childNodes[k];
      if(objNode2.tagName == "titulo") titulo = objNode2.firstChild.nodeValue; else
      if(objNode2.tagName == "imgdestaque") imgdestaque = objNode2.firstChild.nodeValue; else
      if(objNode2.tagName == "descricao") descricao = objNode2.firstChild.nodeValue; else
      if(objNode2.tagName == "imagem") imagem = objNode2.firstChild.nodeValue; 
    }
    
    destaque += "<div class='imgdestaque'><img src='" + imagem + "' border='0'></div>";
    destaque += "<div class='central'><div class='bigspacer'></div><span class='titulo'>" + titulo + "</span><br>";
    destaque += "<div class='bigspacer'></div><img src='" + imgdestaque + "' border='0'><br>";
    destaque += "<div class='bigspacer'></div><span class='descricaodestaque'>" + descricao + "</span><br>";
    if (possuidestaques == 1){
      destaque += "<div id='botDestaque' name='botDestaque' class='botDestaque'>";
      destaque += "<input class='btnParar' type='image' src='index/parar.png' onclick='javascript:parar()'>";
      destaque += "<input class='btnContinuar' type='image' src='index/continuar.png' onclick='javascript:continuar()'>";
      destaque += "</div>";
    }
    destaque += "</div></div>";

    destaque += "</div>";
    
    document.getElementById("divDestaque").innerHTML = destaque;  
  }
  //Carrega as miniaturas
  var registros = getElementsByAttribute("miniatura", "true", xmlNode, "artesanato");
  
  if(parseInt(indpaginacao)==max){
    artesanatos = "<div class='lista'>";
    var qtdregistros = registros.length;
    for(var j=0;j<qtdregistros;j++)
      artesanatos += "<div id='divConteudo' name='divConteudo' class='conteudolista' style='display: none;'></div>";
    artesanatos += "</div>";
    artesanatos += "<input type='image' src='index/mais_centro.gif' name='divBtnPaginacao' id='divBtnPaginacao' style='display: none; height: 1px; width: 1px;' onclick='javascript:paginar()' />"
    document.getElementById("divCategorias").innerHTML = artesanatos;
  }
  
  artesanatos = new String("");
  
  var hoje = new Date();
  var datarecente = new Date(hoje.getFullYear(), hoje.getMonth()-1, hoje.getDate()-1);
  
  for(var i=0;i<registros.length;i++){
    var registro = registros[i]; 
    var id = registro.getAttribute('id');
    var fdetalhe = registro.getAttribute('detalhe');
    //Marca dagua 25-07-2011 - INI
    var data = registro.getAttribute('data');
    if (data != null){
      var dataForm = (data.split("/"));
      var dataimg = new Date(dataForm[2], dataForm[1]-1, dataForm[0]);
    }else{
      dataimg = null;
    }
    //Marca dagua 25-07-2011 - FIM
    
    var nome = "";
    var descricao = "";
    var pagina = "";
    var outrapagina = "";
    var imagem = "";
    var imagem_grande = "";
    artesanatos = "";
    if(parseInt(indpaginacao)>=parseInt(id) && qtd<limite){
      for (var k = 0 ; k < registro.childNodes.length ; k++) {
        if (registro.childNodes[k].tagName == "miniatura"){
          var miniatura = registro.childNodes[k];
          for (var y = 0 ; y < miniatura.childNodes.length ; y++) {
            var objNode2 = miniatura.childNodes[y];
            if(objNode2.tagName == "nome") nome = objNode2.firstChild.nodeValue; else
            if(objNode2.tagName == "descricao") descricao = objNode2.firstChild.nodeValue; else
            if(objNode2.tagName == "imagem") imagem = objNode2.firstChild.nodeValue; else
            if(objNode2.tagName == "imagem_grande") imagem_grande = objNode2.firstChild.nodeValue;
          }
        }else if (registro.childNodes[k].tagName == "detalhe"){
          var detalhe = registro.childNodes[k];
          for (var w = 0 ; w < detalhe.childNodes.length ; w++) {
            var objNode2 = detalhe.childNodes[w];              
            if(objNode2.tagName == "endereco" && objNode2.hasChildNodes()){
              pagina = objNode2.firstChild.nodeValue;
              outrapagina = objNode2.getAttribute("target");
            }
          }                
        }
      }
      if(fdetalhe == "true" && outrapagina == "true")
      {
        artesanatos += "<a href='" + pagina + "' target='_blank'>";
      }
      else if(fdetalhe == "true" && outrapagina != "true")
      {
        artesanatos += "<a href=\"javascript:inicio('" + pagina + "')\">";  
      }
      else
      {
        if (imagem_grande != "" && imagem_grande != null)
          artesanatos += "<a href='" + imagem_grande + "' rel='lightbox[flor]' title='" + nome + ": " + descricao + "'>"; 
        else
          artesanatos += "<a href='" + imagem + "' rel='lightbox[flor]' title='" + nome + ": " + descricao + "'>";   
      }
      
      artesanatos += "<img src='" + imagem + "' height='199px' border='0'>";      
      artesanatos += "<div class='descricao'><span class='labelnome'>" + nome + ": </span>"
      artesanatos += "<span class='labeldescricao'>" +descricao + "</span></div>";

      if (dataimg > datarecente){
        artesanatos += "<img src='index/novo.png' class='watermark' alt='Novo!'>";
      }else{
        artesanatos += "<img src='index/novo.png' class='watermark' alt='Novo!' style='display: none;'>";
      }
      
      if(fdetalhe == "true") 
        artesanatos += "</a>";
      
      var divs = document.getElementsByName("divConteudo");
      for(var j=0;j<divs.length;j++){
        if(divs[j].innerHTML == ""){
          divs[j].innerHTML = artesanatos;
          divs[j].style.display="initial";
          break;
        }
      }            
      qtd++;
      qtdfinal = i;
    }
  }
  qtdfinal++;
  if(registros[qtdfinal] != null){
    document.getElementById("indpaginacao").value = registros[qtdfinal].getAttribute('id');
    document.getElementById("divBtnPaginacao").style.display="initial";
    document.getElementById("divBtnPaginacao").style.height="47px";
    document.getElementById("divBtnPaginacao").style.width="129px";
  }else{
    document.getElementById("divBtnPaginacao").style.display="none";        
    document.getElementById("divBtnPaginacao").style.height="1px";
    document.getElementById("divBtnPaginacao").style.width="1px";      
  }
  if(registros.length == 0)
    document.getElementById("divCategorias").innerHTML = "";
}
function getParameter(parameter){
  var value = new String("");
  
  parametros = window.location.search.substring(1,window.location.search.length)
  parametros = parametros.split("&")
  
  for(i=0;i<parametros.length;i++){
    param = parametros[i].split("=");
    if(param[0] == parameter){
      value = param[1];
      break;
    }
  }
  return value;
}
function inicio(target){  
  document.getElementById("indpaginacao").value = "";
  document.getElementById("inddestaque").value = "";
  parar();
  var Aguarde = new String("");
  Aguarde = "<div align='center'><img src='index/aguarde.gif'></div>";
  document.getElementById("divCategorias").innerHTML = Aguarde;
      
  document.getElementById("target").value = target
  var arquivoxml = "Xml/" + target + ".xml";
  xmlLoader(arquivoxml,"");
  
  var xmlDocument = xmlLoaderSinc("Xml/mapasite.xml");
  getMapaSite(xmlDocument,target);
}  

function AtualizaDestaque(){
  var target = document.getElementById("target").value
  var arquivoxml = "Xml/" + target + ".xml";
  var xmlDocument = xmlLoaderSinc(arquivoxml);
  getDestaques(xmlDocument);
}

function paginar(){
  var indpaginacao = document.getElementById("indpaginacao").value;
  var target = document.getElementById("target").value
  var arquivoxml = "Xml/" + target + ".xml";      
  xmlLoader(arquivoxml,indpaginacao);
}

function aleatorio(inferior,superior){ 
  numPossibilidades = superior - inferior;
  aleat = Math.random() * numPossibilidades;
  aleat = Math.floor(aleat);
  return parseInt(inferior) + aleat;
} 

function getElementsByAttribute(the_attribute, the_value, the_node, the_tagname) {
    if ( the_node == null )
       the_node = document;
  var node_tags = the_node.getElementsByTagName(the_tagname);
  var results = new Array();
  for (i=0, j=0; i<node_tags.length;i++) {
    if (node_tags[i].getAttribute("ativo") == "true"){
      if (node_tags[i].getAttribute(the_attribute) == the_value) {
        results[j] = node_tags[i];
                j++;
      }
    }
  }
  return results;
}

function parar(){
  clearInterval(document.getElementById("intervalo").value);
  document.getElementById("intervalo").value = "";
}
function continuar(){
  if (document.getElementById("intervalo").value == ""){
    document.getElementById("intervalo").value = setInterval("AtualizaDestaque()",intervalo);
  }
}