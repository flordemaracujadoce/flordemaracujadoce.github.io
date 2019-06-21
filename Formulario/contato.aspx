<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="contato.aspx.cs" Inherits="Formulario.contato" %>

<%@ Register assembly="AjaxControlToolkit" namespace="AjaxControlToolkit" tagprefix="cc1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<meta http-equiv="Content-Type" content="text/html;  charset=iso-8859-1" />
	<title>*-*-* Flor de Maracuj&aacute; Doce *-*-*</title>
	<meta http-equiv="Content-Language" content="pt-br" />
	<meta name="google-site-verification" content="QSdLQh1kok63-MefddqCz9pQmnvI2yzEmf76A4DSJII" />
	<meta name="Description" content="Site dedicado a divulgação do  artesanato Flor de Maracujá Doce, feito pela artesã Rita. Arte em biscuit (porcelana fria), em madeira e artesanato em geral: topos de bolo personalizados para casamentos e aniversários, lembrancinhas para todos os momentos, kit bebê  e kit maternidade, potes decorados, tudo personalizado!" />
	<meta name="Keywords" content="biscuit, biscuits, em biscuit, biscuit passo passo, artesanato passo passo, passo passo, lembrancinha em biscuit,lembrancinhas em biscuit, biscuit noivinhos, artesanato em, arte, artesanato, artes&atilde;o, porcelana fria, porcelana, artesao, artes&atilde;, modelagem, &iacute;m&atilde;s, &iacute;m&atilde;s biscuit, artes, passo a passo, biscuit passo a passo, artesanato passo a passo, artesanato natal, biscuit natal, artesanato p&aacute;scoa, biscuit p&aacute;scoa, biscuit artesanato, biscuit noivos, arte em biscuit, biscuit casamento, biscuit pote, pote, potes, moldes biscuit, molde biscuit, receita biscuit, bonecos biscuit, boneca biscuit, biscuit country, fotolog biscuit, passo a passo de biscuit, lembrancinha, lembrancinhas, biscuit passo a passo, flordemaracujadoce, flordemaracuja, potes, anivers&aacute;rio, nascimento, personalizados" />		
	<meta name="robots" content="index,nofollow" />
	<link href="../visual/estilo.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<div align="center">
        <form id="Form1" method="post" runat="server">		
			<table cellspacing="2" cellpadding="2" border="0">
                <asp:Image ImageUrl="../index/titulo_entreemcontato.png" runat="server" />
				<tr>
					<td align="right"><b>Assunto:</b></td>
					<td align="left">
					    <asp:DropDownList ID="Assunto" name="tipo" runat="server">
                            <asp:ListItem Selected="True"></asp:ListItem>
                            <asp:ListItem>Encomenda</asp:ListItem>
                            <asp:ListItem>Dúvida</asp:ListItem>
                            <asp:ListItem>Sugestão</asp:ListItem>
                        </asp:DropDownList>
					    <asp:RequiredFieldValidator ID="RequiredFieldValidatorAssunto" runat="server" 
                            ControlToValidate="Assunto" Display="None" 
                            ErrorMessage="Por favor, preencha o assunto." SetFocusOnError="True"></asp:RequiredFieldValidator>
					    <cc1:ValidatorCalloutExtender ID="RequiredFieldValidatorAssunto_ValidatorCalloutExtender" 
                            runat="server" Enabled="True" TargetControlID="RequiredFieldValidatorAssunto">
                        </cc1:ValidatorCalloutExtender>
					</td>
				</tr>
				<tr><td align="right"><b>Nome:</b></td><td><asp:Textbox id="Nome" runat="server" size="58" />
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorNome" runat="server" 
                        ErrorMessage="Por favor, preencha o seu nome." ControlToValidate="Nome" 
                        Display="None" SetFocusOnError="True"></asp:RequiredFieldValidator>
                    <cc1:ValidatorCalloutExtender ID="RequiredFieldValidatorNome_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RequiredFieldValidatorNome">
                    </cc1:ValidatorCalloutExtender>
                    </td></tr>
				<tr><td align="right"><b>E-mail:</b></td><td><asp:Textbox id="Email" runat="server" size="58" />
                    <asp:RegularExpressionValidator ID="RegularExpressionValidatorEmail" runat="server" 
                        ErrorMessage="Por favor, informe um e-mail válido." 
                        ControlToValidate="Email" Display="None" 
                        ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" 
                        SetFocusOnError="True"></asp:RegularExpressionValidator>
                    <cc1:ValidatorCalloutExtender ID="RegularExpressionValidatorEmail_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RegularExpressionValidatorEmail">
                    </cc1:ValidatorCalloutExtender>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorEmail" runat="server" 
                        ControlToValidate="Email" Display="None" 
                        ErrorMessage="Por favor, preencha o seu e-mail." SetFocusOnError="True"></asp:RequiredFieldValidator>
                    <cc1:ValidatorCalloutExtender ID="RequiredFieldValidatorEmail_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RequiredFieldValidatorEmail">
                    </cc1:ValidatorCalloutExtender>
                    </td></tr>
				<tr><td valign="top"><b>Mensagem:</b></td><td><asp:TextBox id="Mensagem" TextMode="MultiLine" Rows="15" Columns="45" runat="server" />
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorMensagem" runat="server" 
                        ErrorMessage="Por favor, digite sua mensagem." 
                        ControlToValidate="Mensagem" Display="None" SetFocusOnError="True"></asp:RequiredFieldValidator>
                    <cc1:ValidatorCalloutExtender ID="RequiredFieldValidatorMensagem_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RequiredFieldValidatorMensagem">
                    </cc1:ValidatorCalloutExtender>
                    </td></tr>
				<tr><td colspan="2" align="center"><asp:ImageButton ImageUrl="../index/enviar.png" runat="server" ID="btn_enviar" onclick="btn_enviar_Click" /></td></tr>
                <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
			</table> 
        </form>		
	</div>
	
	<script type="text/javascript">
	    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
	    document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
	</script>
	<script type="text/javascript">
	    try {
	        var pageTracker = _gat._getTracker("UA-15974895-1");
	        pageTracker._trackPageview();
	    } catch (err) { }</script>	
    
</body>
</html>